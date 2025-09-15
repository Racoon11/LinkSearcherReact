// hooks/useLinkStorage.js
import { useState, useEffect } from 'react';
import { LinkStorage } from '../LinkStorage.js';

export function useLinkStorage() {
  const [links, setLinks] = useState([]);

  // Загружаем данные при монтировании компонента
  useEffect(() => {
    const storage = LinkStorage.load();
    setLinks(storage.getAll());
  }, []); // Только один раз при загрузке

  // Слушаем изменения в localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const storage = LinkStorage.load();
      setLinks(storage.getAll());
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Обёртка над addLink — обновляет состояние
  const addLink = (link, name = '', desc = '', themes = [], isHidden = false) => {
    const storage = LinkStorage.load(); // загружаем актуальные данные
    const newLink = storage.addLink(link, name, desc, themes, isHidden);
    setLinks(storage.getAll()); // обновляем состояние
    return newLink;
  };
  const editLinkById = (id, link='', name = '', desc = '', themes = [], isHidden = false) => {
    const storage = LinkStorage.load(); // загружаем актуальные данные
    storage.editLinkById(id, link, name, desc, themes, isHidden);
    setLinks(storage.getAll());
    return ;
  }

  // Обёртка над removeLinkById — обновляет состояние
  const removeLinkById = (id) => {
    const storage = LinkStorage.load();
    const success = storage.removeLinkById(id);
    if (success) {
      setLinks(storage.getAll()); // обновляем состояние
    }
    return success;
  };

  // Обёртка над getLinksByTheme — для фильтрации по темам
  const getLinksByTheme = (themeName) => {
    const storage = LinkStorage.load();
    return storage.getLinksByTheme(themeName);
  };

  // Дополнительные полезные методы
  const getAllThemes = () => {
    const storage = LinkStorage.load();
    return storage.getAllThemes();
  };

  const getLinkById = (id) => {
    const storage = LinkStorage.load();
    return storage.getLinkById(id);
  };

  // Получить все ссылки (включая скрытые)
  const getAllLinks = () => {
    const storage = LinkStorage.load();
    return storage.getAll();
  };

  return {
    links, // текущий список видимых ссылок (реактивный!)
    addLink,
    removeLinkById,
    getLinksByTheme,
    getAllThemes,
    getLinkById,
    getAllLinks,
    editLinkById,
  };
}
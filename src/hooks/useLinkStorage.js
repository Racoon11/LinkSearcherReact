// hooks/useLinkStorage.js
import { useState, useEffect } from 'react';
import { LinkStorage } from '../help/LinkStorage.js';

export function useLinkStorage() {
  const [links, setLinks] = useState([]);
  const [logs, setLogs] = useState([]);

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

  const addRatingById = (id) => {
    const storage = LinkStorage.load();
    storage.addRatingById(id);
    setLinks(storage.getAll());
  };

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

  const logClick = (linkId, additionalData = {}) => {
      try {
          const storage = LinkStorage.load();
          const link = storage.getLinkById(linkId);
          if (!link) {
              console.warn(`Cannot log click: link with id ${linkId} not found`);
              return;
          }

          const logEntry = {
              timestamp: new Date().toISOString(),
              url: link.Link,
              name: link.Name,
              linkId: linkId,
              userAgent: navigator.userAgent,
              referrer: document.referrer || 'direct',
              ...additionalData, // можно передавать кастомные данные
          };

          // Получаем старые логи
          const storedLogs = localStorage.getItem('clickLogs');
          let logs = storedLogs ? JSON.parse(storedLogs) : [];

          // Добавляем новый лог
          logs.push(logEntry);
          console.log(logs);

          // Опционально: ограничить размер логов (например, только последние 1000)
          const MAX_LOGS = 1000;
          if (logs.length > MAX_LOGS) {
              logs = logs.slice(-MAX_LOGS);
          }
          setLogs(logs);
          // Сохраняем обратно
          localStorage.setItem('clickLogs', JSON.stringify(logs));

          console.log('🔗 Click logged:', logEntry);
          return logEntry;

      } catch (error) {
          console.error('Failed to log click:', error);
      }
  }

  return {
    links, // текущий список видимых ссылок (реактивный!)
    addLink,
    removeLinkById,
    getLinksByTheme,
    getAllThemes,
    getLinkById,
    getAllLinks,
    editLinkById,
    addRatingById,
    logClick,
    logs
  };
}
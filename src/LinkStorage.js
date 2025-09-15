import {Link} from "./Link";

export class LinkStorage {
    constructor(links=[]) {
        this.links = [...links];
    }
    addLink(link, name = '', desc = '', themes = [], isHidden = false) {
        const newLink = new Link(link, name, desc, themes, isHidden);
        this.links.push(newLink);
        this.save(); // автоматически сохраняем в localStorage
        return newLink; // можно вернуть созданный объект
    }
    getLinksByTheme(themeName) {
        if (!themeName || typeof themeName !== 'string') {
            return []; // защита от невалидных входов
        }
        if (themeName === "none") {
            return this.getVisibleLinks();
        }

        return this.links.filter(link =>
            link.Themes && Array.isArray(link.Themes) && link.IsHidden === false
                ? link.Themes.includes(themeName)
                : false
        );
    }

    removeLinkById(id) {
        const index = this.links.findIndex(link => link.Id === id);

        if (index === -1) {
            return false; // ссылка с таким ID не найдена
        }

        this.links.splice(index, 1); // удаляем один элемент по индексу
        this.save(); // автоматически сохраняем в localStorage
        return true; // успех!
    }
    editLinkById(id, link='', name = '', desc = '', themes = [], isHidden = false) {
        const oLink = this.getLinkById(id);
        oLink.Link = link;
        oLink.Name = name;
        oLink.Description = desc;
        oLink.Themes = themes;
        oLink.isHidden = isHidden;
        this.save();
    }
    
    getLinkById(id) {
        return this.links.find(link => link.Id === id) || null;
    }

    getAllThemes() {
        const allThemes = this.links.flatMap(link => link.Themes);
        return [...new Set(allThemes)].sort(); // Уникальные + отсортированные
    }

    getAll() {
        return [...this.links]; // возвращаем копию, чтобы нельзя было модифицировать напрямую
    }
    getVisibleLinks() {
        return this.links.filter(link => link.IsHidden === false);
    }

    size() {
        return this.links.length;
    }
    save() {
        try {
            localStorage.setItem("links", JSON.stringify(this.links.map(link => link.toJSON())));
        } catch (error) {
            console.error("Failed to save links to localStorage:", error);
        }
    }
    
    static load() {
        try {
            const stored = localStorage.getItem("links");
            if (!stored) {
                return new LinkStorage(); // пустой список
            }

            const parsed = JSON.parse(stored);
            const links = parsed.map(Link.fromJSON);

            // обновляем next_id до максимального + 1
            const maxId = Math.max(0, ...links.map(l => l.Id));
            Link.next_id = maxId + 1;

            return new LinkStorage(links);
        } catch (error) {
            console.warn("Failed to load links from localStorage, starting fresh:", error);
            return new LinkStorage();
        }
    }
}
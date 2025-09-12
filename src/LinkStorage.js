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
            return this.getAll();
        }

        return this.links.filter(link =>
            link.Themes && Array.isArray(link.Themes)
                ? link.Themes.includes(themeName)
                : false
        );
    }
    removeAt(index) {
        if (index < 0 || index >= this.links.length) {
            throw new Error(`Index ${index} is out of bounds`);
        }
        this.links.splice(index, 1);
        this.save(); // автоматически сохраняем
    }

    getAllThemes() {
        const allThemes = this.links.flatMap(link => link.Themes);
        return [...new Set(allThemes)].sort(); // Уникальные + отсортированные
    }

    getAll() {
        return [...this.links]; // возвращаем копию, чтобы нельзя было модифицировать напрямую
    }
    getAt(index) {
        if (index < 0 || index >= this.links.length) {
            throw new Error(`Index ${index} is out of bounds`);
        }
        return this.links[index];
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
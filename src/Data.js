import { LinkStorage } from "./LinkStorage";

let LINKS = LinkStorage.load();
if (LINKS.size() == 0) {
    const baseLinks = [
        {
            "Link": "https://google.com",
            "Name": "Google",
            "Description": "Поисковая система",
            "Themes": ["search", "tools"]
        },
        {
            "Link": "https://github.com",
            "Name": "GitHub",
            "Description": "Хостинг кода и проектов",
            "Themes": ["code", "dev", "open-source"]
        },
        {
            "Link": "https://stackoverflow.com",
            "Name": "Stack Overflow",
            "Description": "",
            "Themes": ["q&a", "programming"]
        },
        {
            "Link": "https://youtube.com",
            "Name": "YouTube",
            "Description": "Видеохостинг",
            "Themes": ["video", "entertainment"]
        }
    ];
    baseLinks.forEach((link) => LINKS.addLink(link['Link'], link['Name'], link['Description'], link['Themes']));
}

export {LINKS};
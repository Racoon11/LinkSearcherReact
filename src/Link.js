export class Link {
    static next_id = 1;
    constructor(link, name='', desc='', themes=[], isHidden=false) {
        this.Id = Link.next_id;
        Link.next_id += 1;
        this.Link = link;
        if (name === '') {name = link;}
        this.Themes = themes;
        this.Name = name;
        this.Description = desc;
        this.IsHidden = isHidden; 
    }

    // toJSON: сериализует объект в JSON-совместимый формат
    toJSON() {
        return {
            Id: this.Id,
            Link: this.Link,
            Name: this.Name,
            Description: this.Description,
            Themes: this.Themes,
            IsHidden: this.IsHidden
        };
    }

    // fromJSON: создаёт экземпляр из сериализованных данных
    static fromJSON(data) {
        const link = new Link(
            data.Link,
            data.Name,
            data.Description,
            data.Themes,
            data.IsHidden
        );
        // ВАЖНО: переопределяем Id из сохранённых данных — чтобы не конфликтовало!
        link.Id = data.Id;
        Link.next_id -= 1;
        // Не увеличиваем next_id — он должен оставаться "живым" для новых объектов
        return link;
    }
}
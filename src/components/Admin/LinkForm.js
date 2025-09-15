

export function LinkForm({ addLink, url, name, desc, themesInput, isHidden, 
                        setUrl, setName, setDesc, setThemesInput, setIsHidden, linkToEdit, setLinkToEdit, editLinkById }) {

    function clear() {
        setUrl('');
        setName('');
        setDesc('');
        setThemesInput('');
        setIsHidden(false);
        setLinkToEdit('none');
    }
    const handleAdd = (e) => {
    
        // Парсим темы: разделяем по запятым, убираем пробелы, фильтруем пустые
        const themes = themesInput
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0);

        // Создаём новую ссылку через LinkStorage
        const newLink = addLink(url, name, desc, themes, isHidden); 

        // Очистка формы после успешного добавления
        clear();
        // Можно показать уведомление или обновить список
        console.log('Добавлена ссылка:', newLink);
    };

    function handleEdit() {
        const themes = themesInput
        .split(',')
        .map(t => t.trim())
        .filter(t => t.length > 0);
        editLinkById(linkToEdit, url, name, desc, themes, isHidden);

        clear();
    }
    return (
    <form className="add-link-form">
        <h3>Add new link</h3>

        {/* URL */}
        <div>
            <label htmlFor="url">URL *</label>
            <input
            id="url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
            className='admin-input'
            />
        </div>

        {/* Имя (опционально) */}
        <div style={{ marginTop: '12px' }}>
            <label htmlFor="name">Name (optional)</label>
            <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Example: Google"
            className='admin-input'
            />
        </div>

        {/* Описание */}
        <div style={{ marginTop: '12px' }}>
            <label htmlFor="desc">Description</label>
            <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Brief description"
            rows="3"
            className='admin-input'
            />
        </div>

        {/* Темы */}
        <div style={{ marginTop: '12px' }}>
            <label htmlFor="themes">Themes (separete with ', ')</label>
            <input
            id="themes"
            type="text"
            value={themesInput}
            onChange={(e) => setThemesInput(e.target.value)}
            placeholder="code, dev, fun"
            className='admin-input'
            />
            <small>Example: code, productivity, video</small>
        </div>

        {/* Скрыть? */}
        <div className='hide-div'>
            <input
            id="isHidden"
            type="checkbox"
            checked={isHidden}
            onChange={(e) => setIsHidden(e.target.checked)}
            />
            <label htmlFor="isHidden">Hidden</label>
        </div>

        {/* Кнопка */}
        <button
            onClick={handleAdd}
            type="button"
            className='btn btn-primary my-btn'>
            Add link
        </button>
        <button
            onClick={handleEdit}
            type="button"
            className='btn btn-primary my-btn'
            style={{ display:  linkToEdit !== 'none' ? 'inline' :'none'}}
            >
            Edit
        </button>
    </form>
    );
}
export function exportClickLogs() {
    try {
        const logs = localStorage.getItem('clickLogs');
        
        if (!logs) {
            alert('Нет данных для экспорта. Пока не было кликов.');
            return;
        }

        // Парсим логи
        const parsedLogs = JSON.parse(logs);

        // Если пустой массив — тоже сообщим
        if (parsedLogs.length === 0) {
            alert('Логи кликов пусты.');
            return;
        }

        // Преобразуем в строку JSON с красивым форматированием
        const jsonStr = JSON.stringify(parsedLogs, null, 2); // отступы для читаемости

        // Создаём Blob (объект файла)
        const blob = new Blob([jsonStr], { type: 'application/json' });

        // Создаём URL для скачивания
        const url = URL.createObjectURL(blob);

        // Создаём ссылку для скачивания
        const a = document.createElement('a');
        a.href = url;
        a.download = `link-clicks-${new Date().toISOString().slice(0, 10)}.json`; // например: link-clicks-2025-04-05.json
        a.style.display = 'none';

        // Добавляем ссылку в DOM, кликаем, удаляем
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Освобождаем память
        URL.revokeObjectURL(url);


    } catch (error) {
        console.error('Ошибка при экспорте логов:', error);
    }
}
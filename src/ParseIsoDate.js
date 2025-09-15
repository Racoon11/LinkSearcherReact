export function parseISODate(isoString) {
    const date = new Date(isoString);

    // Проверка на корректность
    if (isNaN(date.getTime())) {
        return { date: 'Недопустимая дата', time: '' };
    }

    // Форматируем дату: DD.MM.YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // месяц начинается с 0!
    const year = date.getFullYear();

    // Форматируем время: HH:MM:SS
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return {
        date: `${day}.${month}.${year}`,
        time: `${hours}:${minutes}:${seconds}`
    };
}
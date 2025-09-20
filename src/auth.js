const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'admin', 
};

// Время жизни токена — 8 часов (в миллисекундах)
const TOKEN_EXPIRES_IN = 10 * 60 * 1000; // 8 часов

// Генерация токена — просто строка: "admin:timestamp:hash"
export function generateToken() {
    const timestamp = Date.now();
    const hash = btoa(`${ADMIN_CREDENTIALS.username}:${timestamp}`); // base64
    return `${ADMIN_CREDENTIALS.username}:${timestamp}:${hash}`;
}

// Проверка токена — возвращает { isValid, username, expiresAt }
export function validateToken(token) {
    if (!token) return { isValid: false };

    const parts = token.split(':');
    if (parts.length !== 3) return { isValid: false };

    const [username, timestampStr, hash] = parts;

    // Проверяем логин
    if (username !== ADMIN_CREDENTIALS.username) return { isValid: false };

    const timestamp = parseInt(timestampStr, 10);
    if (isNaN(timestamp)) return { isValid: false };

    // Проверяем срок действия
    const now = Date.now();
    if (now - timestamp > TOKEN_EXPIRES_IN) {
        return { isValid: false, expired: true };
    }

    // Проверяем целостность (опционально — для защиты от подмены)
    const expectedHash = btoa(`${username}:${timestamp}`);
    if (hash !== expectedHash) return { isValid: false };

    return {
        isValid: true,
        username,
        expiresAt: timestamp + TOKEN_EXPIRES_IN,
        expiresIn: TOKEN_EXPIRES_IN - (now - timestamp),
    };
}

// Сохранить токен в localStorage
export function setToken(token) {
    localStorage.setItem('adminToken', token);
}

// Получить токен из localStorage
export function getToken() {
    return localStorage.getItem('adminToken');
}

// Удалить токен (выход)
export function logout() {
    localStorage.removeItem('adminToken');
}
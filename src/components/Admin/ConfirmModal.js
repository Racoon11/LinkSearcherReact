// ConfirmModal.jsx
import React from 'react';

export function ConfirmModal({ 
  isOpen, 
  onClose, 
  onDelete, 
  onEdit, 
  anchorPosition, 
  title = "Действия",
  message = "" // не нужен, если только кнопки
}) {
  if (!isOpen || !anchorPosition) return null;

  const style = {
    top: `${anchorPosition.y}px`,
    left: `${anchorPosition.x}px`,
  };

  return (
    <div className="context-menu" style={style}>
      {/* Кнопка "Редактировать" */}
      <button onClick={onEdit}>
        ✏️ Редактировать
      </button>

      {/* Кнопка "Удалить" */}
      <button onClick={onDelete}>
        🗑️ Удалить
      </button>

      {/* Кнопка "Отмена" */}
      <button onClick={onClose}>
        ❌ Отмена
      </button>
    </div>
  );
}
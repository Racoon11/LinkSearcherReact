import React, { useState, useRef, useCallback } from 'react';
import {ConfirmModal} from "./ConfirmModal";
import { Wand } from './Wand';

export function AdminLinkRow({ link, onDeleteButtonClick, setUrl, setName, setDesc, setThemesInput, setIsHidden, setLinkToEdit}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [anchorPosition, setAnchorPosition] = useState(null);
    const buttonRef = useRef(null);

    const handleDelete = useCallback(() => {
        onDeleteButtonClick(link.Id);
        setIsMenuOpen(false);
    }, []);

    const handleEdit = () => {
        setUrl(link.Link);
        setName(link.Name);
        setDesc(link.Description);
        setThemesInput(link.Themes.join(", "));
        setIsHidden(link.IsHidden);
        setIsMenuOpen(false);
        setLinkToEdit(link.Id);
    };

    const handleClose = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    document.addEventListener('click', () => {
        setIsMenuOpen(false);
    });

    const handleButtonClick = (e) => {
        e.stopPropagation(); // предотвращаем всплытие клика
        const rect = buttonRef.current.getBoundingClientRect();
        
        setAnchorPosition({
            x: rect.left + rect.width / 2, // центр кнопки по X
            y: rect.bottom,                // нижняя граница кнопки по Y
        });
        setIsMenuOpen(true);
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <li className='link-row' >
                        <a className={`link-name ${link.IsHidden ? "hidden" : ""} `} href={ link.Link }>{ link.Name }</a><br/>
                        <a className={`link-link ${link.IsHidden ? "hidden" : ""} `}  href={ link.Link }>{ link.Link }</a>
                        <p className='link-desc'>{ link.Description }</p>
                        <ul className='themes-list'>
                            { link.Themes.map((theme) => <li key={theme} className='theme'>#{theme}</li>) }
                        </ul>
                        <p className={ `link-rating ${link.IsHidden ? "hidden" : ""} `}>Rating: {link.rating}</p>
                    </li>
                </div>
                <div className="col-2">
                    <button className="edit-button" ref={buttonRef}
                            onClick={handleButtonClick}>
                                <Wand />
                    </button>
                </div>
                <ConfirmModal
                    isOpen={isMenuOpen}
                    onClose={handleClose}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                    anchorPosition={anchorPosition}
                />
            </div>
        </div>
    );
}
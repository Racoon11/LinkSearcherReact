import { useState } from 'react';
import { AdminLinkList } from "./AdminLinkList";
import { LinkForm } from "./LinkForm";
import "./styles.css";
import { useNavigate } from 'react-router-dom';

export function AdminScreen({ getAllLinks, removeLinkById, addLink, editLinkById }) {
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [themesInput, setThemesInput] = useState('');
    const [isHidden, setIsHidden] = useState(false);
    const [linkToEdit, setLinkToEdit] = useState('none');

    return (
        <div className="container">
            <div className="row">
                <div className="col-7">
                    <AdminLinkList getAllLinks={ getAllLinks } removeLinkById={ removeLinkById } 
                    setUrl={setUrl} setName={setName} setDesc={setDesc} setThemesInput={setThemesInput}
                     setIsHidden={setIsHidden} setLinkToEdit={setLinkToEdit} /> 
                </div>
                <div className="col-5">
                    <LinkForm addLink={addLink} url={url} name={name} desc={desc} themesInput={themesInput} isHidden={isHidden}
                     setUrl={setUrl} setName={setName} setDesc={setDesc} setThemesInput={setThemesInput} setIsHidden={setIsHidden}
                     linkToEdit={linkToEdit} setLinkToEdit={setLinkToEdit} editLinkById={editLinkById}/>

                     <button
                        className='btn btn-primary my-btn'
                        onClick={() => navigate("/LinkSearcherReact/admin/logs")}
                     > logs </button>

                </div>
            </div>
        </div>
    );
} 
import {AdminLinkRow} from "./AdminLinkRow";

export function AdminLinkList({ getAllLinks, removeLinkById, 
    setUrl, setName, setDesc, setThemesInput, setIsHidden, setLinkToEdit }) {

    return (
        <div className="scrollable-container">
            <ul>
                {getAllLinks().map((link) => <AdminLinkRow key={ link.Id } link={ link } onDeleteButtonClick={removeLinkById} 
                setUrl={setUrl} setName={setName} setDesc={setDesc} setThemesInput={setThemesInput} setIsHidden={setIsHidden} 
                setLinkToEdit={setLinkToEdit} />)} 
            </ul>
        </div>
    );
}
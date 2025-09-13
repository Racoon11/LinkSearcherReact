import {AdminLinkRow} from "./AdminLinkRow";

export function AdminLinkList({ links }) {
    return (
        <ul>
            {links.getAll().map((link) => <AdminLinkRow key={ link.Id } link={ link }/>)}
        </ul>
    );
}
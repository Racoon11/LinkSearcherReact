import {AdminLinkList} from "./AdminLinkList";
import {LinkForm} from "./LinkForm";
import "./styles.css";

export function AdminScreen({ links }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <AdminLinkList links={links}/>
                </div>
                <div className="col-4">
                    <LinkForm />
                </div>
            </div>
        </div>
    );
} 
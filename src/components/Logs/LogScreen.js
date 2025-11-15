import {LogRow} from "./LogRow";
import {JsonIcon} from "./JsonIcon";
import {exportClickLogs} from "../../help/ParseLogs";
import { useNavigate } from 'react-router-dom';

export function LogScreen() {
    const navigate = useNavigate();
    const storedLogs = localStorage.getItem('clickLogs');
    let mylogs = storedLogs ? JSON.parse(storedLogs) : [];
    return (
        <div>
            <button
                className='btn btn-primary my-btn'
                onClick={() => navigate("/LinkSearcherReact/admin")}
                > back 
            </button>
            <button className="icon-btn" onClick={exportClickLogs}><JsonIcon /></button>
            <table className="table table-light  table-striped">
                <thead>
                    <tr>
                        <th>time</th>
                        <th>date</th>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
                <tbody>
                    {mylogs.map((log) => <LogRow key={ log.timestamp } log={ log }/>)}
                </tbody>
            </table>
        </div>
    );
}
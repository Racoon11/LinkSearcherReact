import { parseISODate } from "../../help/ParseIsoDate";
import "./styles.css";
export function LogRow({ log }) {
    const datetime = parseISODate(log.timestamp);
    return (
        <tr>
            <td className="log-time"> { datetime.time } </td> 
            <td className="log-date"> { datetime.date } </td>  
            <td className="log-id"> { log.linkId } </td> 
            <td className="log-name"> { log.name } </td> 
        </tr>
    );
}
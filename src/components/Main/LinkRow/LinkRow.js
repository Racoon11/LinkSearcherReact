import { ThemesList } from "../ThemesList/ThemesList";
import "./styles.css";

export function LinkRow({ link, addRatingById, logClick }) {
  function linkClick(e) {
    e.preventDefault(); // отменяем стандартное поведение
    addRatingById(link.Id); // увеличиваем счётчик
    logClick(link.Id);
    window.open(link.Link, '_blank'); 
  }
  return (
    <li className='link-row'>
      <a className='link-name' href={ link.Link } onClick={(e) => linkClick(e)}>{ link.Name }</a><br/>
      <a className='link-link'  href={ link.Link } onClick={(e) => linkClick(e)}>{ link.Link }</a>
      <p className='link-desc'>{ link.Description }</p>
      <ThemesList themes={link.Themes} />
    </li>
  );
}
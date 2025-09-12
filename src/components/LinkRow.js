import { ThemesList } from "./ThemesList";

export function LinkRow({ link }) {
  return (
    <li className='link-row'>
      <a className='link-name' href={ link.Link }>{ link.Name }</a><br/>
      <a className='link-link'  href={ link.Link }>{ link.Link }</a>
      <p className='link-desc'>{ link.Description }</p>
      <ThemesList themes={link.Themes} />
    </li>
  );
}
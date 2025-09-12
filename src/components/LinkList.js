import { LinkRow } from "./LinkRow";

export function LinkList({ links, theme }){
  const rows = [];

  links.getLinksByTheme(theme).forEach((link) => {
    rows.push(
      <LinkRow 
        link={link} 
        key={link.Id} />
    );
  });
  return (
    <ul>
      {rows}
    </ul>
  );
}
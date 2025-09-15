import { LinkRow } from "./LinkRow/LinkRow";

export function LinkList({ getLinksByTheme, theme }){
  const rows = [];

  getLinksByTheme(theme).forEach((link) => {
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
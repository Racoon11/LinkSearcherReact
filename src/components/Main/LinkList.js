import { LinkRow } from "./LinkRow/LinkRow";

export function LinkList({ getLinksByTheme, theme, addRatingById, logClick }){
  const rows = [];

  getLinksByTheme(theme).forEach((link) => {
    rows.push(
      <LinkRow 
        link={link} 
        key={link.Id}
        addRatingById={addRatingById}
        logClick={ logClick } />
    );
  });
  return (
    <ul>
      {rows}
    </ul>
  );
}
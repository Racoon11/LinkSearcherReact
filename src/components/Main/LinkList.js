import { LinkRow } from "./LinkRow/LinkRow";

export function LinkList({ getLinksByTheme, theme, addRatingById }){
  const rows = [];

  getLinksByTheme(theme).forEach((link) => {
    rows.push(
      <LinkRow 
        link={link} 
        key={link.Id}
        addRatingById={addRatingById} />
    );
  });
  return (
    <ul>
      {rows}
    </ul>
  );
}
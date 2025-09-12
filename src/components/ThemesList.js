
export function ThemesList({ themes }){
  const tlist = [];
  themes.forEach((theme) => tlist.push(
    <li key={theme} className='theme'>#{theme}</li>
  ));
  return (
    <ul className='themes-list'>
      { tlist }
    </ul>
  );
}
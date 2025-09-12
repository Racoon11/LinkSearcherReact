import {ThemeInput} from "./ThemeInput";

export function SearchBar({themes,
                          filterTheme, 
                          onFilterThemeChange
}) {
  return (
    <form>
      <input className='search-input' type='text' placeholder='Search links...'/>
      <label className="choose-label" for="theme-select">Choose theme:</label>
      <select id="theme-select" value={ filterTheme } onChange={(e) => onFilterThemeChange(e.target.value) }>
          <option value="none">None</option>
          { themes.map((theme) => <ThemeInput name={ theme } key={ theme } />) }
      </select>
    </form>
  );
}
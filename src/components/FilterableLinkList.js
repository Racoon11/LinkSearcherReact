import {SearchBar} from "./SearchBar";
import {LinkList} from "./LinkList";
import { useState } from "react";

export function FilterableLinkList({ links }) {
  const [filterTheme, setFilterTheme] = useState("none");
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <SearchBar 
            themes={links.getAllThemes()}
            filterTheme={filterTheme}
            onFilterThemeChange={setFilterTheme}/>
          <LinkList links={links} theme={filterTheme}/>
        </div>
      </div>
    </div>
  );
}
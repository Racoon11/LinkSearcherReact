import {SearchBar} from "./SearchBar";
import {LinkList} from "./LinkList";
import { useState } from "react";

export function FilterableLinkList({ getLinksByTheme, getAllThemes }) {
  const [filterTheme, setFilterTheme] = useState("none");
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <SearchBar 
            themes={getAllThemes()}
            filterTheme={filterTheme}
            onFilterThemeChange={setFilterTheme}/>
          <LinkList getLinksByTheme={getLinksByTheme} theme={filterTheme}/>
        </div>
      </div>
    </div>
  );
}
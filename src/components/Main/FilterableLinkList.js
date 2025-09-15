import {SearchBar} from "./SearchBar/SearchBar";
import {LinkList} from "./LinkList";
import { useState } from "react";

export function FilterableLinkList({ getLinksByTheme, getAllThemes, addRatingById }) {
  const [filterTheme, setFilterTheme] = useState("none");
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <SearchBar 
            themes={getAllThemes()}
            filterTheme={filterTheme}
            onFilterThemeChange={setFilterTheme}/>
          <LinkList 
            getLinksByTheme={getLinksByTheme} 
            theme={filterTheme} 
            addRatingById={addRatingById}/>
        </div>
      </div>
    </div>
  );
}
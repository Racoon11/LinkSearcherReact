import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {FilterableLinkList} from "./components/Main/FilterableLinkList";
import {AdminScreen} from "./components/Admin/AdminScreen";
import { LogScreen } from './components/Logs/LogScreen';

import { useLinkStorage } from './hooks/useLinkStorage';

export default function App() {
  const { getLinksByTheme, getAllThemes, getAllLinks, 
          removeLinkById, addLink, editLinkById, addRatingById, logClick, logs } = useLinkStorage();

  return (
    <Router>
        <Routes>
          <Route path="/" element={<FilterableLinkList 
                                      getLinksByTheme={getLinksByTheme} 
                                      getAllThemes={getAllThemes} 
                                      addRatingById={addRatingById}
                                      logClick={logClick} />} />
          <Route path="/admin" element={<AdminScreen 
                                          getAllLinks={getAllLinks} 
                                          removeLinkById={removeLinkById} 
                                          addLink={ addLink } 
                                          editLinkById={editLinkById} />} />
          <Route path="/admin/logs" element={<LogScreen />}/>
        </Routes>
    </Router>
  );

}

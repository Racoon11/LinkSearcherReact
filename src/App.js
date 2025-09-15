import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {FilterableLinkList} from "./components/Main/FilterableLinkList";
import {AdminScreen} from "./components/Admin/AdminScreen";

import { useLinkStorage } from './hooks/useLinkStorage';

export default function App() {
  const { getLinksByTheme, getAllThemes, getAllLinks, removeLinkById, addLink, editLinkById, addRatingById } = useLinkStorage();

  return (
    <Router>
        <Routes>
          <Route path="/" element={<FilterableLinkList 
                                      getLinksByTheme={getLinksByTheme} 
                                      getAllThemes={getAllThemes} 
                                      addRatingById={addRatingById} />} />
          <Route path="/admin" element={<AdminScreen 
                                          getAllLinks={getAllLinks} 
                                          removeLinkById={removeLinkById} 
                                          addLink={ addLink } 
                                          editLinkById={editLinkById} />} />
        </Routes>
    </Router>
  );

}

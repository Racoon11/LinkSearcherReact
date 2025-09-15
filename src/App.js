import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {FilterableLinkList} from "./components/FilterableLinkList";
import {AdminScreen} from "./components/Admin/AdminScreen";
import {LINKS} from './Data';

import { useLinkStorage } from './hooks/useLinkStorage';

export default function App() {
  const { getLinksByTheme, getAllThemes, getAllLinks, removeLinkById, addLink, editLinkById } = useLinkStorage();

  return (
    <Router>
        <Routes>
          <Route path="/" element={<FilterableLinkList getLinksByTheme={getLinksByTheme} getAllThemes={getAllThemes} />} />
          <Route path="/admin" element={<AdminScreen getAllLinks={getAllLinks} removeLinkById={removeLinkById} addLink={ addLink } editLinkById={editLinkById} />} />
        </Routes>
    </Router>
  );

}

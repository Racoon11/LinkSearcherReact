import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {FilterableLinkList} from "./components/Main/FilterableLinkList";
import {AdminScreen} from "./components/Admin/AdminScreen";
import { LogScreen } from './components/Logs/LogScreen';
import { LoginScreen } from './components/Login/LoginScreen';

import { useLinkStorage } from './hooks/useLinkStorage';
import { ProtectedRoute } from './ProtectedRoute';

export default function App() {
  const { getLinksByTheme, getAllThemes, getAllLinks, 
          removeLinkById, addLink, editLinkById, addRatingById, logClick, logs } = useLinkStorage();

  return (
    <Router>
        <Routes>
          <Route path="/linksearcherreact" element={
            <FilterableLinkList 
              getLinksByTheme={getLinksByTheme} 
              getAllThemes={getAllThemes}
              addRatingById={addRatingById}
              logClick={logClick} />} />
          <Route path="/linksearcherreact/admin" element={
            <ProtectedRoute>
              <AdminScreen 
                getAllLinks={getAllLinks} 
                removeLinkById={removeLinkById} 
                addLink={ addLink } 
                editLinkById={editLinkById} />
            </ProtectedRoute>
          } />
          <Route path="/linksearcherreact/admin/logs" element={
            <ProtectedRoute>
              <LogScreen />
            </ProtectedRoute>
          }/>
          
          <Route path="/linksearcherreact/login" element={<LoginScreen />} />
        </Routes>
    </Router>
  );

}

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {FilterableLinkList} from "./components/Main/FilterableLinkList";
import {AdminScreen} from "./components/Admin/AdminScreen";
import { LogScreen } from './components/Logs/LogScreen';
import { LoginScreen } from './components/Login/LoginScreen';

import { useLinkStorage } from './hooks/useLinkStorage';
import { ProtectedRoute } from './components/Main/ProtectedRoute';

export default function App() {
  const { getLinksByTheme, getAllThemes, getAllLinks, 
          removeLinkById, addLink, editLinkById, addRatingById, logClick, logs } = useLinkStorage();

  return (
    <Router>
        <Routes>
          <Route path="/LinkSearcherReact" element={
            <FilterableLinkList 
              getLinksByTheme={getLinksByTheme} 
              getAllThemes={getAllThemes}
              addRatingById={addRatingById}
              logClick={logClick} />} />
          <Route path="/LinkSearcherReact/admin" element={
            <ProtectedRoute>
              <AdminScreen 
                getAllLinks={getAllLinks} 
                removeLinkById={removeLinkById} 
                addLink={ addLink } 
                editLinkById={editLinkById} />
            </ProtectedRoute>
          } />
          <Route path="/LinkSearcherReact/admin/logs" element={
            <ProtectedRoute>
              <LogScreen />
            </ProtectedRoute>
          }/>
          
          <Route path="/LinkSearcherReact/login" element={<LoginScreen />} />
        </Routes>
    </Router>
  );

}

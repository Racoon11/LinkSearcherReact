import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LINKS } from "./Data";
import {FilterableLinkList} from "./components/FilterableLinkList";
import {AdminScreen} from "./components/Admin/AdminScreen";

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<FilterableLinkList links={LINKS} />} />
          <Route path="/admin" element={<AdminScreen links={LINKS} />} />
        </Routes>
    </Router>
  );

}

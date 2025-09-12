import { useState } from 'react';
import { LINKS } from "./Data";
import {FilterableLinkList} from "./components/FilterableLinkList";

export default function App() {
  return <FilterableLinkList links={LINKS} />;
}
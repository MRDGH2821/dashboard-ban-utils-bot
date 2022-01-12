import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { LogsPage } from './pages/LogsPage';
import { GuildContext } from './utils/contexts/GuildContext'

function App() {
  const [guildId, setGuildId] = useState('');
  const updateGuildId = (id: string) => setGuildId(id);
  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/categories' element={<CategoryPage />} />
        {/*<Route path='/dashboard' element={<HomePage />} />*/}
        <Route path='/guild/setlogs' element={<LogsPage />} />
      </Routes>
    </GuildContext.Provider>
  );
}

export default App;

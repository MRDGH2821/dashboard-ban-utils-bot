import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { MenuPage } from './pages/MenuPage';
import { CategoryPage } from './pages/CategoryPage';
import { LogsPage } from './pages/LogsPage';
import { GuildContext } from './utils/contexts/GuildContext';
import { AppBar } from './components/AppBar';
import { useFetchUser } from './utils/hooks/useFetchUser';

function App() {
  const [guildId, setGuildId] = useState('');
  const { user, error, loading } = useFetchUser();
  const updateGuildId = (id: string) => setGuildId(id);
  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      {user ? (
        <>
          <Routes>
            <Route path='/dashboard/*' element={<AppBar />} />
          </Routes>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/dashboard/categories' element={<CategoryPage />} />
            {/*<Route path='/dashboard' element={<HomePage />} />*/}
            <Route path='/dashboard/setlogs' element={<LogsPage />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path='/' element={<LoginPage />} />
          </Routes>
        </>
      )}
    </GuildContext.Provider>
  );
}

export default App;

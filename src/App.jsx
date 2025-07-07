import { useState, useCallback } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

function App() {
  const [user, setUser] = useState({ name: '', level: 'Easy' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleThemeChange = useCallback((e) => {
    const root = document.getElementById('root');
    const themes = {
      Light: {
        '--bkg-color': '#1d3557',
        '--box-bkg': '#f1faee',
        '--img-color': '#1d3557',
        '--text-type1': '#1d3557',
        '--text-type2': '#457b9d',
        '--input-type1': '#f1faee',
      },
      Dark: {
        '--bkg-color': '#cad2c5',
        '--box-bkg': '#2f3f47',
        '--img-color': '#cad2c5',
        '--text-type1': '#cad2c5',
        '--text-type2': '#84a98c',
        '--input-type1': '#2f3e46',
      },
    };
    const selectedTheme = themes[e.target.value];
    if (selectedTheme && root) {
      Object.entries(selectedTheme).forEach(([key, value]) => {
        root.style.setProperty(key, value);
      });
    }
  }, []);

  const changeLoginState = useCallback(() => setIsLoggedIn(true), []);
  const changeUser = useCallback((newUser) => setUser(newUser), []);

  return (
    <div className="app">
      {isLoggedIn ? (
        <GamePage user={user} />
      ) : (
        <HomePage
          user={user}
          changeUser={changeUser}
          changeLoginState={changeLoginState}
          handleThemeChange={handleThemeChange}
        />
      )}
    </div>
  );
}

export default App;

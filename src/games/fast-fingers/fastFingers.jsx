import react, { useState, useCallback, useEffect } from "react";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

const fastFingers =()=> {
  const [user, setUser] = useState({ name: "", level: "Easy" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user.name && user.level) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);


  const changeUser = useCallback((newUser) => setUser(newUser), []);

  return (
    <div className="app">
      {isLoggedIn ? (
        <GamePage user={user} />
      ) : (
        <HomePage
          user={user}
          changeUser={changeUser}
        />
      )}  
    </div>
  );
}

export default fastFingers;

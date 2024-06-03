import React from 'react'; // Importuje bibliotekę React
import Profile from './components/Profile/Profile'; // Importuje komponent Profile
import user from './data/user.json'; // Importuje dane użytkownika z pliku JSON

const App = () => {
  return (
    <div>
      <Profile
        username={user.username} // Przekazuje nazwę użytkownika jako props
        tag={user.tag} // Przekazuje tag użytkownika jako props
        location={user.location} // Przekazuje lokalizację użytkownika jako props
        avatar={user.avatar} // Przekazuje URL awatara użytkownika jako props
        stats={user.stats} // Przekazuje statystyki użytkownika jako props
      />
    </div>
  );
};

export default App; // Eksportuje komponent App jako domyślny eksport

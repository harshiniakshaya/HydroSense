import React, { useState } from 'react';
import Pages from './Pages';
import SignIn from './components/SignIn'; 

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <div>
      {isAuthenticated ? (
        <Pages /> 
      ) : (
        <SignIn onAuthenticate={() => setIsAuthenticated(true)} /> 
      )}
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Pages from './Pages';
import SignIn from './components/SignIn'; // Import the SignIn component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  return (
    <div>
      {isAuthenticated ? (
        <Pages /> 
      ) : (
        <SignIn onAuthenticate={() => setIsAuthenticated(true)} /> // Show SignIn if not authenticated
      )}
    </div>
  );
};

export default App;

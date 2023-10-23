import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="bricolage-font">
            This is a test title.        
        </p>
        {user ? (
          <div>I did it!</div>
        ) : (
          <a
            onClick={handleSignIn}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded inline-block mt-5 cursor-pointer"
          >
            Get started
          </a>
        )}
      </header>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import UserSummary from "./UserSummary";
import './App.css';

function App() {
  const[currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const userURL = "https://api.randomuser.me/";
    const makeApiCall = async () => {
      const res = await axios.get(userURL);
      setCurrentUser(res.data.results[0]);
    };
    makeApiCall();
  }, [])

  return (
    <div>
      <UserSummary userData={currentUser} />
    </div>
  )
  }

export default App
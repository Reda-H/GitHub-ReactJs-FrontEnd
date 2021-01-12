import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import axios from 'axios';

import UsernameInput from './Components/UsernameInput';

import './App.css';
import GitPage from './Pages/GitPage';

function App() {

  const [username, setUsername] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);
  const [user, setUser] = useState({});

  const fetchUserData = async (username) => {
    const data = {
      username: username,
    }
    return await axios.post(`http://127.0.0.1:3000/users`, { data }, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => { if (res.status === 200) return res.data; })
      .catch(error => console.log(error))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(username).then((data) => { setUser(data); setDataLoaded(true); });
  }

  const fetchUserFollowers = async (username) => {
    const data = {
      username: username,
    }
    return await axios.post(`http://127.0.0.1:3000/followers`, { data }, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => { if (res.status === 200) { console.log(res.data); return res.data; } })
      .catch(error => console.log(error))
  }

  const fetchUserFollowed = async (username) => {
    const data = {
      username: username,
    }
    return await axios.post(`http://127.0.0.1:3000/followed`, { data }, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => { if (res.status === 200) { console.log(res.data); return res.data;} })
      .catch(error => console.log(error))
  }

  const fetchListRepos = async (username) => {
    const data = {
      username: username,
    }
    return await axios.post(`http://127.0.0.1:3000/repos`, { data }, { headers: { "Access-Control-Allow-Origin": "*" } })
      .then(res => { if (res.status === 200) { return res.data; } })
      .catch(error => console.log(error))
  }

  return (
    <div className="App" style={{padding: 0}}>
      <Box display="flex" justifyContent='space-around' maxWidth="sm" height="90vh">
        {dataLoaded ?
          <GitPage user={user} handleFollowers={fetchUserFollowers} handleFollowed={fetchUserFollowed} handleRepos={fetchListRepos}/>
          :
          <UsernameInput username={username} setUsername={setUsername} formSubmit={handleSubmit} />
        }
      </Box>
    </div>
  );
}

export default App;

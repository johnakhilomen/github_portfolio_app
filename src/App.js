import logo from './logo.svg';
import './App.css';
import Nav from './components/Header';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Api from './api/Api';
import Main from './components/Main';

function App() {
  const [profile, setProfile] = useState({})
  useEffect(() => {
    Api().get()
    .then(response=>setProfile(response.data))
    .catch(err=>console.log(err));

  }, [profile])
  
 /* avatar_url: "https://avatars.githubusercontent.com/u/29316016?v=4"
bio: "I'm an Engineer, Educator and Creator. And at my free time, I enjoy doing poetry or listening to good music."
blog: "www.johnakhilomen.com"
company: "node-badger"
created_at: "2017-06-09T22:44:42Z"
email: null
events_url: "https://api.github.com/users/johnakhilomen/events{/privacy}"
followers: 16
followers_url: "https://api.github.com/users/johnakhilomen/followers"
following: 3
following_url: "https://api.github.com/users/johnakhilomen/following{/other_user}"
gists_url: "https://api.github.com/users/johnakhilomen/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/johnakhilomen"

location: null
login: "johnakhilomen"
name: "John Akhilomen"
node_id: "MDQ6VXNlcjI5MzE2MDE2"
organizations_url: "https://api.github.com/users/johnakhilomen/orgs"
public_gists: 7
public_repos: 87
received_events_url: "https://api.github.com/users/johnakhilomen/received_events"
repos_url: "https://api.github.com/users/johnakhilomen/repos"
site_admin: false
starred_url: "https://api.github.com/users/johnakhilomen/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/johnakhilomen/subscriptions"
twitter_username: "johnakhilomen"
type: "User"
updated_at: "2021-10-22T21:07:31Z"
url: "https://api.github.com/users/johnakhilomen"
*/
  return (
    <div className="App">
     
       <Header userData={profile}/>
       <Main userData={profile} />

    </div>
  );
}

export default App;

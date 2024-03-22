import React from 'react';
// Import Components
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
  //Able to write normal javascript
  const name = 'name';
  const message = 'This is a tweet';
  return (
    <div>
      <h1>Hello React</h1>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;

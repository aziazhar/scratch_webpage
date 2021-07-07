import React, {Component} from 'react';
import Navbar from './component/Navbar';
import Homebanner from './component/Homebanner';
import Upcomingdeadlines from './component/Upcomingdeadlines';
import Topstories from './component/Topstories';
import Lastset from './component/Lastset';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />     
        <Homebanner />
        <Upcomingdeadlines />
        <Topstories />
        <Lastset />
      </div>
    );
  }
}

export default App;

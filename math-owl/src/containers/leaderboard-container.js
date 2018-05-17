import React, { Component } from 'react';

import Leaderboard from '../components/leaderboard';
import LeaderboardHeader from '../components/leaderboard-header';

class LeaderboardContainer extends Component {
  
  
  render() {
      return (
        <div>
            <LeaderboardHeader />
            <Leaderboard />
        </div>
      )
    }
}

export default LeaderboardContainer;

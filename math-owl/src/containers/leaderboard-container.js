import React, { Component } from 'react';

import Leaderboard from '../components/leaderboard';
import LeaderboardHeader from '../components/leaderboard-header';
import { Header, Grid, Segment } from 'semantic-ui-react';


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

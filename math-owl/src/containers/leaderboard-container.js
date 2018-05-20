import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLeaderboard } from '../actions/leaderboardActions';

import Leaderboard from '../components/leaderboard';
import LeaderboardHeader from '../components/leaderboard-header';

class LeaderboardContainer extends Component {
  
  componentDidMount() {
    this.props.fetchLeaderboard();
  }
  
  render() {
      return (
        <div>
            <LeaderboardHeader />
            <Leaderboard 
              players={this.props.leaderboard}
              fetchLeaderboard={this.props.fetchLeaderboard}
            />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return { leaderboard: state.leaderboard }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchLeaderboard: fetchLeaderboard
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps )(LeaderboardContainer);



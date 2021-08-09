import React from 'react';
import './Team.css';

// Components
import Background from '../../components/Background/Background.js';
import TopBar from '../../components/TopBar/TopBar.js';
import Member from '../../components/Member/Member.js';

function Team(props) {
  return (
    <div className="root">
      <div className="team-background"/>
      <TopBar/>
      <div className="member-cluster">
        <Member name="John Deer" title="Mr. President"/>
        <Member name="John Deer" title="Mr. President"/>
        <Member name="John Deer" title="Mr. President"/>
        <Member name="John Deer" title="Mr. President"/>
      </div>
    </div>
  )
}

export default React.memo(Team);
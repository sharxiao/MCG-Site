import React from 'react';
import './Events.css';

function Events(props) {
  return (
    <div className="root">
      <div>
        <h1 style={{zIndex: 5}}>
          Events
        </h1>
      </div>
    </div>
  )
}

export default React.memo(Events);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Plan from './plan/plan.js'

class Calendar extends React.Component {

  render() {
    return (
      <div className="main">
        <Plan/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Calendar/>,
  document.getElementById('root')
);

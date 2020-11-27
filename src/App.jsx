import React, { Component } from 'react';

import Calendar from './components/Calendar';

const style = {
  div: {
    position: 'relative',
  },
  p: {
    position: 'absolute',
    top: '100px',
    left: '500px',
  },
};

class App extends Component {
  state = {
    date: null,
  }

  handleDateChange = date => this.setState({ date });

  render() {
    const { date } = this.state;

    return (
      <div style={style.div}>
        {date && <p style={style.p}>Selected date: {date.toLocaleString()}</p>}
        <Calendar onChange={this.handleDateChange} />
      </div>
    );
  }  
};

export default App;
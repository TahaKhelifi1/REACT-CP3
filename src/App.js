import React, { Component } from 'react';

class App extends Component {
  // Define state in the constructor
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A software developer',
        imgSrc: 'path_to_image.jpg',
        profession: 'Developer',
      },
      shows: false,
      mountedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ mountedTime: prevState.mountedTime + 1 }));
    }, 1000); // increments every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;

import React from 'react';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] //state를 빈array로 두어도 괜찮다.
  };
  componentDidMount() {
    setTimeout(() => { this.setState({ isLoading: false, book: true }) }, 10000); //선언하지 않은 state를 추가해도 오류가 나지 않는다.
  }
  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;

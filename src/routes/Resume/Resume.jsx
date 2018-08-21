import React from 'react';
import './resume.pdf';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // After the component output has been rendered to the DOM.
  // public componentDidMount() {}
  // public componentWillUnmount() {}

  render() {
    return <h1> Hello {this.props} </h1>;
  }

  // private someMethod() {
  //   /* Async ref:
  //   https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
  //   */
  //   this.setState({
  //     something: 'data',
  //   });
  //   this.setState((prevState, props) => ({
  //     counter: prevState.something + props.something
  //   }));
  // }
}
export default Resume;

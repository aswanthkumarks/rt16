import React from 'react';

class Sample extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {ss: Number(props.text)}
  }
  /*
    Calls before rendering a component
    No rerendering if setState is called
   */
  componentWillMount() {
    console.log('componentWillMount');
  }

  /*
    For initial api calls
    subscriptions
    setting state here will rerender component
   */
  componentDidMount() {
    console.log('componentDidMount');
  }

  /*
    Used to change state based on compairing new props and existing prosp
   */
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps: New Props: ', nextProps, 'current Props: ', this.props);
    if(nextProps.text !== this.props.text) {
      this.setState({ ss: Number(nextProps.text)})
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate: nextProps:',nextProps, 'Next State:', nextState, 'currentState:', this.state, 'currProps:', this.props);
    return true;
  }

  /*
  Update only
   */
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error, info){
    console.log('componentDidCatch');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h4>Component LifeCycle</h4>
        {this.props.text}
      </div>
    )
  }
}


export default Sample;

import React from 'react';
import Sample from './sample';

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.changeText = this.changeText.bind(this);
    this.state = {
      text: '1'
    };
  }

  componentDidMount() {
    this.modalRoot = document.getElementById('rt-header');
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  changeText() {
    this.setState({
      text: Number(this.state.text) + 1
    })
  }

  render() {
    return (<div>
      <h3>User Details</h3>
      <Sample text={this.state.text}></Sample>
      <button onClick={this.changeText}>Change Text</button>
    </div>
    );
  }
}

export default UserComponent;

import React from 'react';

class ApiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      error: '',
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('http://hn.algolia.com/api/v1/items/1')
      .then(response => response.json())
      .then(data => this.setState({ item: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    let data = "";
    if (this.state.isLoading) {
      data = (<div>Loading...</div>);
    } else if(this.state.error !== '') {
      data = (<div>{this.state.error}</div>);
    } else if(this.state.item !== null){
      data = (
        <div>
          <div className="panel-title">
            {this.state.item.title}
          </div>
          <div>
            {this.state.item.type}
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Fetch Api</h1>
        <div className="panel panel-default">
          {data}
        </div>
      </div>
    )
  }
}

export default ApiComponent;

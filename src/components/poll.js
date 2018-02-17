import React, { Component } from "react";

const URL_HOME = "http://localhost:3005/teams";
export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pollTeams: ""
    };
  }

  fetchPoll() {
    fetch(`${URL_HOME}?poll=true&_sort=count&_order=desc`, { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.setState({
          pollTeams: json
        });
      });
  }

  componentDidMount() {
    this.fetchPoll();
  }

  pollUp(count, id) {
    fetch(`${URL_HOME}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({ count: count + 1 })
    }).then(() => {
      this.fetchPoll();
    });
  }

  renderPoll() {
    const position = ["1ST", "2ND", "3RD"];

    if (this.state.pollTeams) {
      return this.state.pollTeams.map((item, index) => {
        return (
          <div key={item.id} className="poll_item">
            <img
              src={`/images/teams/${item.logo} `}
              alt="item.name"
              onClick={() => this.pollUp(item.count, item.id)}
            />
            <h4>{position[index]}</h4>
            <div>{item.count} votes </div>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <div className="home_poll">
        <h3>Who will be the next champion ?</h3>
        <div className="poll_container">{this.renderPoll()}</div>
      </div>
    );
  }
}

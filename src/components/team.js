import React, { Component } from "react";
import Header from "./header";
const URL_TEAMS = "http://localhost:3005/teams";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`${URL_TEAMS}?name=${this.props.match.params.id}`, { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json
        });
      });
  }

  renderSquad = squad => {
    return squad.map(item => {
      return (
        <div key={item.name} className="player">
          <img src={`/images/avatar.png`} alt={item.name} />

          <h4>{item.name}</h4>

        <div className="node" >
        <span>Number:</span> {item.number}
        </div>   
        <div className="node" >
        <span>PPG:</span> {item.PPG}
        </div> 
        <div className="node" >
        <span>APG:</span> {item.APG}
        </div> 


        </div>
      );
    });
  };

  renderData = ({ data }) => {
    return data.map(item => {
      return (
        <div key={item.id} className="team_item">
          <div className="left">
            <img src={`/images/teams/${item.logo} `} alt={item.name} />
          </div>
          <div className="right">
            <h1>{item.name} </h1>
            <p>{item.description}<hr/> </p>
        
          <div className="squad" />
          {this.renderSquad(item.squad)}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="team_main">
        <Header />
        <div className="team_data">{this.renderData(this.state)}</div>
      </div>
    );
  }
}

export default Team;

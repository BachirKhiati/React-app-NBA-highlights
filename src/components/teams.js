import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Header from "./header";

const URL_TEAMS = "http://localhost:3005/teams";

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      filterTeam: [],
      keyword: ""
    };
  }

  componentDidMount() {
    fetch(URL_TEAMS, { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.setState({
          teams: json,
          filterTeam: json
        });
      });
  }

  renderList = ({ filterTeam }) => {
    return filterTeam.map(item => {
      return (
        <Link to={`/team/${item.name}`} key={item.id} className="teams_item">
          <img src={`/images/teams/${item.logo} `} alt={item.name} />
        </Link>
      );
    });
  };

  searchTeam = event => {
    const key = event.target.value;
    if (key !== "") {
      const list = this.state.teams.filter(item => {
        return item.name.toLowerCase().indexOf(key.toLowerCase()) > -1;
      });
      this.setState({
        filterTeam: list,
        keyword: event.target.value
      });
    } else {
      this.setState({
        filterTeam: this.state.teams,
        keyword: key
      });
    }
  };

  render() {
    return (
      <div>
        <Header />

        <div className="teams_comp">
          <div className="teams_input">
            <input
              type="text"
              placeholder="Search for a team"
              value={this.state.keyword}
              onChange={e => this.searchTeam(e)}
            />
          </div>

          <Fade bottom>
            <div className="teams_container">{this.renderList(this.state)}</div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Team;

import React, { Component } from "react";

import Header from "./header";
import Featured from "./featured";
import Subscribe from "./subscribe";
import Blocks from "./blocks";
import Poll from "./poll";




const URL_HOME = "http://localhost:3005/home";



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      home: "",
      teams:""
    };
  }

  componentDidMount() {
    fetch(URL_HOME, {
      method: "GET"
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          home: json
        });
      });



  }

  render() {
    return (
      <div>
        <Header />
        <Featured slides={this.state.home.slider} />
        <Subscribe />
        <Blocks block={this.state.home.blocks} />
        <Poll />
       
      </div>
    );
  }
}

export default Home;

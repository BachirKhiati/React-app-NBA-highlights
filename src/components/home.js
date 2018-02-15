import React, { Component } from "react";

import Header from "./header";



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bachir Khiati",
      age: "25",
      hobbies: "Coding!",
      english: true,
      french: true,
      finnish: true,
      arabic: true,
      car: false,
      color: "blue"
    };
  }

  

 


  





  render() {
   
    return (
      <div>
        <Header></Header>
        <div>Home</div>
       
          
         
      </div>
    );
  }
}

export default Home;

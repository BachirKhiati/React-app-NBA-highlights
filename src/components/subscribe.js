import React, { Component } from "react";

export default class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ""
    };
  }

  componentWillUpdate() {}

  onChangeinput = event => {

    this.setState({
        email:event.target.value,
        error:false,
        success:false

    });

  };

    saveSubcribe=email=>{
        const URL_EMAIL=`http://localhost:3005/subcriptions`;
        fetch(URL_EMAIL,{
          method:'post',
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body:JSON.stringify({email})
            

        })
        .then(res=>res.json())
        .then(()=>{
            this.setState({
                email:'',
                success:true
            });


        });
    }

    clearMessages=()=>{
        setTimeout(() => {
            this.setState({
                error:false,
                success:false
        
            });
        }, 3000);
    }


  handleSubmit=event=>{
      event.preventDefault();
      let email= this.state.email;
      let regex= /\S+@\S+\.\S+/;
      if(regex.test(email)){
          this.saveSubcribe(email);
      }else
      {
        this.setState({
            error:true
        });  /////////////
      }
      this.clearMessages();



  }

  render() {
    return (
      <div className="sub_panel">
        <h3>Subscribe to us!</h3>
        <div>
          <form action="" onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="youremail@email.com"
              value={this.state.email}
              onChange={this.onChangeinput}
            />
            <div className={this.state.error ? "error show":"error"} >Check your email</div>
            <div className={this.state.success ? "success show":"success"} >Thank you!</div>
          </form>
          <small>
            Nostrud eiusmod irure enim esse officia ea dolore elit consectetur
            veniam. Labore occaecat cupidatat veniam elit dolor in enim
            consequat. Mollit consequat consequat proident nulla nulla.
            Consectetur elit velit in nisi commodo qui cupidatat enim ea amet
            mollit. Elit dolor irure ex Lorem fugiat pariatur amet.
          </small>
        </div>
      </div>
    );
  }
}

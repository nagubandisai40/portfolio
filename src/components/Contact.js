import React, { Component } from 'react';
import '../css/card.css';
import { Card } from 'react-mdl';
import { browserHistory } from 'react-router-dom';
import axios from 'axios';
// import { FormGroup, Form, Input, Label } from 'reactstrap';
import { Button } from 'react-mdl';
class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      suggession: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSuggestions = this.handleSuggestions.bind(this);
  }
  handleName(props) {
    this.setState({
      name: props.target.value
    })
  }
  handleSuggestions(props) {
    this.setState({
      suggession: props.target.value,
    })
  }

  handleEmail(props) {
    this.setState({
      email: props.target.value,
    })

  }

  submitFirebase = event => {
    event.preventDefault();
    const user={
      name:this.state.name,
      email:this.state.email,
      suggesstion:this.state.suggession,
    };
    axios.post("https://portfolio-4bbe9.firebaseio.com/feedback.json",user).then(res=>{
      console.log(res.data);
      console.log(res.status);
      if(res.status==200)
      {
        alert("Thank you for submitting feedback");
        this.props.history.push('/');
      }else{
        alert("Your feedback has not been submitted due to some problem");
        this.props.history.push('/Contact');
        
      }
    })
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} className="parent">
        <div className="child1" style={{ width: "40%" }}>
          <Card shadow={0} calssName="contact-card" style={{ margin: 'auto', width: "80%" }}>
            <center><h4>Feedback Form</h4></center>
            <br></br>
            <div className="inputfields">
              {/* <label class="input1" style={{text-align: center;font-kerningsize: 20px;}}> Payment Details </label> */}
              <form onSubmit={this.submitFirebase}>
                <input name="firstname" className="input" value={this.state.name} type="text" placeholder="Name" onChange={this.handleName} requierd="true" />
                <input name="email" className="input" type="email" id="email" value={this.state.email} onChange={this.handleEmail} placeholder="E-mail" requierd="true" />
                <textarea name="Suggesions" className="input" value={this.state.suggession} onChange={this.handleSuggestions} placeholder="Suggestions" requierd="true" />
                {/* <input name="phone" class="input" type="tel"  placeholder="Mobile No" /> */}
                <center><button type="submit" className="submit-btn">Submit</button></center>
              </form>
            </div>
          </Card>
        </div >
      </div >
    );
  }
}

export default Contact;

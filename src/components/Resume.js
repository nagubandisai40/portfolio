
import React, { Component } from 'react';
import axios from 'axios';
// import Card from './Card';
import '../css/card.css';

class Resume extends Component {
constructor(){
  super()
  this.state={
    resume:[]
  }
}

componentDidMount(){
    axios.get("https://portfolio-4bbe9.firebaseio.com/resume.json").then(
      res=>{
        const fetchedData = [];
        for(let key in res.data)
        {
          fetchedData.push(res.data[key])
        }
        this.setState({resume:fetchedData})
        console.log(fetchedData);
      }
    )
}

  render() {
    // this.getData()
    return (
      
      <div style={{height:"100%" }}>
        {
          this.state.resume.map(resume=><iframe title="Resume" src={resume.pdfUrl}  height="100%" width="100%"></iframe>)
        }
      </div>

      // <div className="container" style={{width:"25%"}}>
      //   <Card name="sai kumar is a good boy"></Card>
      // </div>
    );
  }
}

export default Resume;
import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import '../css/card.css';
// import { Container, Row, Col } from 'reactstrap';

class Certificate extends Component {
  constructor() {
    super()
    this.state = {
      certificates: [],
    };
  }
  componentDidMount() {

    axios.get("https://portfolio-4bbe9.firebaseio.com/certificates.json").then(res => {
      // console.log(res.data);
      const fetchedData = [];
      for (let key in res.data) {
            fetchedData.push(res.data[key])
            // console.log(res.data[key])
      }
      this.setState({
        certificates:fetchedData,
      })
      // console.log(this.state.certificates)
    },
    );
  }
  

  render() {
    return (  
        <div  className="wrapper" style={{background:"linear-gradient(to right,#536976,#292E49)"}}>
        {    
          this.state.certificates.map(certi=><Card name={certi.Name} url={certi.imageUrl}></Card>)
        }
      </div>
    );
    // if(this.state.isLoaded==false)
    // {
    //   return <h4>Loadig..</h4>
    // }
    // else if(this.state.isLoaded==true && this.state.certificates.length==0)
    // {
    //     return <h1>Please check Your Network Connection and Try again..!</h1>
    // }else{
      
    // }
  }
}

export default Certificate;

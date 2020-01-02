import React, { Component } from 'react';
import '../css/card.css';
class AboutMe extends Component {
  render() {
    return (
       <div className="parent-about">
         <div className="child-about">
              <p className="intro-name"><b>Nagubandi Sai Kumar</b></p>
              <br className="break-about"></br>
              <center>
              {/* <div  className="pitch-div"> */}
              <p className="short-pitch">I am self-motivated and Pursuing my degree at BV Raju Institute of Technology. I had worked on android app and Web development, very
much interested in analyzing a huge amount of data and to extract the knowledge and insights from that data.</p>
              {/* </div>   */}
              </center>
              <div className="social-links">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/saikumar9436/" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                  {/* github */}
                  <a href="https://github.com/nagubandisai40" rel="noopener noreferrer">
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                  </a>
                  {/* Hacker Rank */}
                  <a href="https://www.hackerrank.com/Nagubandisai40" rel="noopener noreferrer">
                  <span className="iconify" data-icon="simple-icons:hackerrank" style={{color:"#fff",fontSize:"30px"}} data-inline="false"></span>
                  </a>
                  {/* Twitter */}
                  <a href="https://twitter.com/Saii50495558" rel="noopener noreferrer">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
              </div>
         </div>
       </div>
    );
  }
}

export default AboutMe;

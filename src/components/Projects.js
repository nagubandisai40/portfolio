import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import '../css/card.css';
import axios from 'axios';
import ProjectComponent from './projectComponent';

class Project extends Component {

  constructor() {
    super()
    this.state = {
      activeTab: 0,
      android: [],
      web: [],
      flutter: [],
      ds: [],
      all: []
    }
  }

  getTabContent() {
    if (this.state.activeTab == 0) {
      return (
        <div className="wrapper">
          {this.state.android.map(android => <ProjectComponent name={android.Name} imageUrl={android.imageUrl} githubUrl={android.githubUrl}></ProjectComponent>)}
        </div>
      )
    } else if (this.state.activeTab == 1) {
      return (
        <div className="wrapper">
          {this.state.web.map(web => <ProjectComponent name={web.Name} githubUrl={web.githubUrl} imageUrl={web.imageUrl}></ProjectComponent>)}
        </div>
      );
    } else if (this.state.activeTab == 2) {
      return (
        <div className="wrapper">
          {this.state.flutter.map(flutter => <ProjectComponent name={flutter.Name} githubUrl={flutter.githubUrl} imageUrl={flutter.imageUrl}></ProjectComponent>)}
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          {this.state.ds.map(data => <ProjectComponent name={data.Name} githubUrl={data.githubUrl} imageUrl={data.imageUrl}></ProjectComponent>)}
        </div>
      );
    }
  }

  componentDidMount() {
    axios.get("https://portfolio-4bbe9.firebaseio.com/projects.json").then((res) => {
      const tempAndroid = [];
      const tempWeb = [];
      const tempFlutter = [];
      const tempDs = [];
      for (let key in res.data['android']) {
        tempAndroid.push(res.data['android'][key])
      }
      for (let key in res.data['web']) {
        tempWeb.push(res.data['web'][key])
      }
      for (let key in res.data['flutter']) {
        tempFlutter.push(res.data['flutter'][key])
      }
      for (let key in res.data['datascience']) {
        tempDs.push(res.data['datascience'][key])
      }
      this.setState({
        android: tempAndroid,
        web: tempWeb,
        flutter: tempFlutter,
        ds: tempDs
      })
      // console.log("The web data is");
      // console.log(this.state.web);
    })
  }

  render() {
    return (
      <div style={{background:"#fff",height:"100%"}}>
        <div className="demo-tabs" >
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Android</Tab>
            <Tab>Web</Tab>
            <Tab>Flutter</Tab>
            <Tab>Data Science</Tab>
          </Tabs>
          <div style={{ marginTop: "15px" }}>
            {this.getTabContent()}
          </div>
          {/* <Grid>
          <Cell col={12}>
            <div className="getTabContent">
              {this.getTabContent()}
            </div>
          </Cell>
        </Grid> */}
        </div>
      </div>
    );
  }
}

export default Project;

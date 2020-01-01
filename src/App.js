import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="Nagubandi Sai Kumar" className="header1" style={{background:"transparent"}} scroll>
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Certificate">Certificates</Link>
              <Link to="/Contact">Feedback</Link>
            </Navigation>
          </Header>
          <Drawer title="Sai Kumar">
            <Navigation>
              <Link to="/">About Me</Link>
              <Link to="/Resume">Resume</Link>
              <Link to="/Projects">Projects</Link>
              <Link to="/Certificate">Certificates</Link>
              <Link to="/Contact">Feedback</Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main></Main>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App;

import React from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../css/card.css';

class ProjectComponent extends React.Component {
  render() {
    return (
      <div>
        <Card shadow={5} style={{ minwidth: "500px",height:"300", margin: "auto" }}>
          <CardTitle className="cardTitle" style={{fontSize:'20%',fontWeight:"bold" ,color:"#000",height: "200px", background: 'url('+this.props.imageUrl+') center / cover' }}>
            {/* {this.props.name} */}
          </CardTitle>
          <CardTitle style={{height:"50px",fontSize:"20px"}}>{this.props.name}</CardTitle>
          <CardActions border>
            <a href={this.props.githubUrl}>
              <Button colored style={{fontWeight:"bold"}}>Open</Button>
            </a>
          </CardActions>
          {/* <CardMenu style={{ color: '#fff' }}>
            <IconButton name="share" />
          </CardMenu> */}
        </Card>
      </div>
    )
  }
}

export default ProjectComponent;
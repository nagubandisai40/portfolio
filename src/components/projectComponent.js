import React from 'react';
import { Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import '../css/card.css';

class ProjectComponent extends React.Component {
  render() {
    return (
      <div>
        <Card shadow={5} className="project-card">
          <CardTitle className="cardTitle" style={{background: 'url('+this.props.imageUrl+') center / cover' }}>
            {/* {this.props.name} */}
          </CardTitle>
          <CardTitle className="card-title1">{this.props.name}</CardTitle>
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
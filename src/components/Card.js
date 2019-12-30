import React from 'react';
// import {Tooltip,Icon} from 'react-mdl';
import { Button } from 'react-mdl';
// import '../css/card.css'
class Card extends React.Component {
    render() {
        const card = {
            shadow: "0 4 8 0",
            transition: "0.3s",
            padding: "50px 0px 0px 50px",
            display: "inline-block",
        };

        return (
            <div>
                <div className='box' style={card}>
                    <img src={this.props.url} alt="Avatar" style={{ width: "80%" }} />
                    <div className="container" style={{ border: "green" }}>
                        <h5 style={{ padding: "0px", top: "0px", inline: "block" }}><b>{this.props.name}</b></h5>
                        <a href="resume.pdf" download>
                            <Button raised accent ripple>Download</Button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
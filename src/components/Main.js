import React from 'react';
// import Switch from 'react-router'
import { Route, Switch } from 'react-router-dom';
import AboutMe from './AboutMe';
import Certificate from './Certificate';
import Contact from './Contact';
import Projects from './Projects.js';
import Resume from './Resume';

function Main() {
    return (
        <Switch>
            <Route path="/" component={AboutMe} exact></Route>
            <Route path="/Resume" component={Resume}></Route>
            <Route path="/Projects" component={Projects}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/Certificate" component={Certificate}></Route>
        </Switch>
    )
}

export default Main
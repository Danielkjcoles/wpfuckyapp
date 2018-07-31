import React from 'react';
import Moviecomponent from './Moviecomponent';
import COMPHome from './COMPHome';
import COMPAbout from './COMPAbout';
import COMPTopics from './COMPTopics';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  const Nav = () => (



    <Router>

    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={COMPHome} />
      <Route path="/about" component={COMPAbout} />
      <Route path="/topics" component={COMPTopics} />

      <Moviecomponent />


</div>


  </Router>

  );


  export default Nav;
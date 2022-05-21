import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Link, NavLink} from 'react-router-dom';

import TestPage from './views/TestPage';
import BuildingPage from './views/BuildingPage/BuildingPage';
import NotFound from './views/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/TestPage">TestPage</Link>
      <Link to="/TestPage">Blog</Link>
      <Swtich>
        <Route exact path="/TestPage" component={TestPage} />
        <Route exact path="/Blog" component={BuildingPage} />
        <Route exact path="/NotFound" component={NotFound} />
        <Redirect to="NotFound" />
      </Swtich>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

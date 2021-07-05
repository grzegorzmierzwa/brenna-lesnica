
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './components/views/Homepage/Homepage';
import Aboutus from './components/views/Aboutus/Aboutus';
// import Photogallery from './components/views/PhotoGallery';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Homepage} />
      <Route exact path={'/aboutus'} component={Aboutus} />
      {/* <Route exact path={'/gallery'} component={Photogallery} /> */}
    </Switch>
  </BrowserRouter>
  );
}

export default App;

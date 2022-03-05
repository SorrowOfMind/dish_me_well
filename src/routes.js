import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {DishForm, Notification} from './components';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={DishForm} />
      <Route exact path="/notification" component={Notification} />
    </Switch>
  );
}

export default Routing;
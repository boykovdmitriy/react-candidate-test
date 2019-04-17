import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Channels} from '../channels';
import {ROOT} from '../../routes';
import {BottomPanel} from '../../components/bottomPanel';

export class App extends React.PureComponent {
  render() {
    return (
      <main>
        <Switch>
          <Route
            exact
            path={ROOT.pattern}
            component={Channels}
          />
        </Switch>
        <BottomPanel/>
      </main>
    );
  }
}
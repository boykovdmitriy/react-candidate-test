import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Channels} from '../channels';
import {ROOT} from '../../routes';
import {Footer} from '../../components/footer';
import {Button} from '../../components/button';
import {HomeIcon, ListIcon, TvIcon, RepeatIcon, UserIcon} from '../../components/icons';
import styles from './app.css';

export class App extends React.PureComponent {
  renderFooter() {
    return (
      <Footer className={styles.footer}>
        <Button className={styles.footerItem}>
          <HomeIcon/>
        </Button>
        <Button className={styles.footerItem}>
          <TvIcon/>
        </Button>
        <Button className={styles.footerItem}>
          <ListIcon/>
        </Button>
        <Button className={styles.footerItem}>
          <RepeatIcon/>
        </Button>
        <Button className={styles.footerItem}>
          <UserIcon/>
        </Button>
      </Footer>
    )
  }

  render() {
    return (
      <main className={styles.container}>
        <section className={styles.content}>
          <Switch>
            <Route
              exact
              path={ROOT.pattern}
              component={Channels}
            />
          </Switch>
        </section>
        {
          this.renderFooter()
        }
      </main>
    );
  }
}
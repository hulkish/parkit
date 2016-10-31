import React, {Component} from 'react';
import Header from 'components/header';
import HomeContainer from 'containers/home';

import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css';

import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <section>
          <HomeContainer />
        </section>
      </div>
    );
  }
}

export default App;

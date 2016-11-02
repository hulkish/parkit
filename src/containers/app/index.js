import React, {Component} from 'react';
import Header from 'components/header';
import styles from './app.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header />
        <div className="slds-container--large">
          <div className="slds-grid">
            <div className="slds-col slds-p-around--small">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

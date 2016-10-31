import React, {Component} from 'react';
import styles from './header.scss';

class Header extends Component {
  render() {
    return (
      <div className={styles.appHeader}>
        <h1 className={styles.appLogo}>Parkit</h1>
      </div>
    );
  }
}

export default Header;

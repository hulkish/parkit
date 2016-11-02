import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './header.scss';
import { Button } from 'react-lightning-design-system';

function onClick() {
  //
}

class Header extends Component {

  constructor() {
    super();
    this._onClick = onClick.bind(this);
  }

  render() {
    let headerClassNames = classNames(styles.appHeader, 'slds-p-around--medium');
    return (
      <div className={headerClassNames}>
        <div>
          <h1 className={styles.appLogo}>Parkit</h1>
        </div>
        <div>
          <Button type='neutral' onClick={ this._onClick }>Neutral</Button>
          <Button type='brand' onClick={ this._onClick }>Brand</Button>
        </div>
      </div>
    );
  }
}

export default Header;

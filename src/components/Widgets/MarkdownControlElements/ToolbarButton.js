import React, { PropTypes } from 'react';
import { List } from 'immutable';
import classnames from 'classnames';
import { Icon } from '../../UI';
import styles from './ToolbarButton.css';

const ToolbarButton = ({ name, label, icon, action, active }) => (
  <li className={classnames(styles.listItem, { [styles.active]: active })}>
    <button className={styles.button} onClick={action} title={label}>
      { icon ? <Icon type={icon} /> : label }
    </button>
  </li>
  );

ToolbarButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  action: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default ToolbarButton;

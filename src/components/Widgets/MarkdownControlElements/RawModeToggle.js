import React, { PropTypes } from 'react';
import ToolbarButton from './ToolbarButton';
import styles from './RawModeToggle.css';

const RawModeToggle = props => (
  <div className={styles.toggle}>
    <ToolbarButton className={styles.button} {...props} />
  </div>
  );

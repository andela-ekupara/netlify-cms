import React, { PropTypes } from 'react';
import { List } from 'immutable';
import ToolbarButton from './ToolbarButton';
import { Icon } from '../../UI';
import styles from './Toolbar.css';

function Toolbar(props) {
  const { onH1, onH2, onBold, onItalic, onLink } = props;
  return (
    <ul className={styles.Toolbar}>
      <ToolbarButton label="Header 1" icon="h1" action={onH1} />
      <ToolbarButton label="Header 2" icon="h2" action={onH2} />
      <ToolbarButton label="Bold" icon="bold" action={onBold} />
      <ToolbarButton label="Italic" icon="italic" action={onItalic} />
      <ToolbarButton label="Link" icon="link" action={onLink} />
    </ul>
  );
}

Toolbar.propTypes = {
  onH1: PropTypes.func.isRequired,
  onH2: PropTypes.func.isRequired,
  onBold: PropTypes.func.isRequired,
  onItalic: PropTypes.func.isRequired,
  onLink: PropTypes.func.isRequired,
};

export default Toolbar;

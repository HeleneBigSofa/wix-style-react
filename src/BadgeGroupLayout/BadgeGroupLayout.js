import React from 'react';
import DropdownLayout from '../DropdownLayout';
import styles from './BadgeGroupLayout.scss';
import PropTypes from 'prop-types';

export default class BadgeGroupLayout extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      color: PropTypes.string,
      text: PropTypes.string
    }))
  };

  get options() {
    const { options } = this.props;

    return options.map(({id, color, text}) => ({
      id,
      value: (
        <div>
          <div className={styles.marker} style={{backgroundColor: color}}/>
          <span className={styles.label}>{text}</span>
        </div>
      )
    }));
  }

  render() {
    const { selectedId } = this.props;

    return (
      <div>
        <DropdownLayout visible
                        selectedId={selectedId}
                        options={this.options}/>
      </div>
    );
  }
}
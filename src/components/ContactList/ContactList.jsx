import React, { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.stateFilter
          ? this.props.contacts.map(el => {
              if (
                el.clientName
                  .toLowerCase()
                  .includes(this.props.stateFilter.toLowerCase())
              ) {
                return (
                  <li key={el.id} id={el.id} className={css.listItem}>
                    {el.clientName}: {el.clientNumber}
                    <button
                      type="button"
                      onClick={this.props.deleteClient}
                      className={css.deleteButton}
                    >
                      Delete
                    </button>
                  </li>
                );
              }
              return <div key={el.id}></div>;
            })
          : this.props.contacts.map(el => {
              return (
                <li key={el.id} id={el.id} className={css.listItem}>
                  {el.clientName}: {el.clientNumber}
                  <button
                    type="button"
                    className={css.deleteButton}
                    onClick={this.props.deleteClient}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
      </ul>
    );
  }
}
ContactList.propTypes = {
  stateFilter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      clientName: PropTypes.string.isRequired,
      clientNumber: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

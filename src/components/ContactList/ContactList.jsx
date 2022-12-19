import React, { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts, deleteClient } = this.props;
    return (
      <ul className={css.list}>
        {contacts.map(el => {
          return (
            <li key={el.id} className={css.listItem}>
              {el.name}: {el.number}
              <button
                type="button"
                className={css.deleteButton}
                onClick={() => deleteClient(el.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
        {/*  {this.props.stateFilter
          ? this.props.contacts.map(el => {
              if (
                el.name
                  .toLowerCase()
                  .includes(this.props.stateFilter.toLowerCase())
              ) {
                return (
                  <li key={el.id} id={el.id} className={css.listItem}>
                    {el.name}: {el.number}
                    <button
                      type="button"
                      onClick={() => this.props.deleteClient(el.id)}
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
                  {el.name}: {el.number}
                  <button
                    type="button"
                    className={css.deleteButton}
                    onClick={this.props.deleteClient}
                  >
                    Delete
                  </button>
                </li>
              );
            })} */}
      </ul>
    );
  }
}
ContactList.propTypes = {
  stateFilter: PropTypes.string,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

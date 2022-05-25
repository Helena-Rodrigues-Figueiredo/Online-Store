import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategorieButton from './CategorieButton';

class CategoriesDisplay extends Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <h1>Categorias</h1>
        <ul>
          {categories.map(({ name, id }) => (
            <li key={ id }>
              <CategorieButton
                labelText={ name }
                inputId={ id }
              />
            </li>))}
        </ul>
      </aside>
    );
  }
}

CategoriesDisplay.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default CategoriesDisplay;
import PropTypes from 'prop-types';

import { categories } from '../assets/data/marketplaceSections';

const Categories = ({ display }) => (
  <section className="__second-marketplace-section">
    <div className="__outer-sub-section">
      <div className="__center-title">
        <h1>Categories</h1>
      </div>
      <div className="__center-sub-section">
        <div className="category__options">
          {display(categories)}
        </div>
      </div>
    </div>
  </section>
);

Categories.propTypes = {
  display: PropTypes.func.isRequired,
};

export default Categories;

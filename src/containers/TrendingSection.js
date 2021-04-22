import PropTypes from 'prop-types';

import { marketPlace } from '../assets/data/marketplaceSections';

const TrendingSection = ({ display }) => (
  <section className="__first-marketplace-section">
    <div className="__outer-sub-section">
      <div className="__center-title">
        <h1>Trending</h1>
      </div>
      <div className="__center-sub-section">
        {display(marketPlace)}
      </div>
    </div>
  </section>
);

TrendingSection.propTypes = {
  display: PropTypes.func.isRequired,
};

export default TrendingSection;

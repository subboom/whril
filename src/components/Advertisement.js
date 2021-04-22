import PropTypes from 'prop-types';

const Advertisement = ({
  followers, platformLogo, companyLogo, price,
}) => (
  <div className="__advertisement-carousel">
    <div className="inner-carousel">
      <div className="__top">
        <button type="button">
          <img src={followers} alt="" />
        </button>
        <button type="button">
          <img src={platformLogo} alt="" />
        </button>
      </div>
      <div className="__bottom">
        <img src={companyLogo} alt="" />
        <h3>{price}</h3>
      </div>
    </div>
    <p>@username</p>
  </div>
);

Advertisement.propTypes = {
  followers: PropTypes.string,
  platformLogo: PropTypes.string,
  companyLogo: PropTypes.string,
  price: PropTypes.string,
};

Advertisement.defaultProps = {
  followers: '',
  platformLogo: '',
  companyLogo: '',
  price: '',
};

export default Advertisement;

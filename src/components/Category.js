import PropTypes from 'prop-types';

const Category = ({ image, title }) => (
  <div className="category">
    <img src={image} alt="" />
    <h1>{title}</h1>
  </div>
);

Category.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

Category.defaultProps = {
  image: '',
  title: '',
};

export default Category;

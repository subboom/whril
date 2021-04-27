import Advertisement from '../components/Advertisement';
import Category from '../components/Category';

const displaySection = (marketSection) => (
  marketSection().map((ad) => (
    <Advertisement
      key={ad.followers + ad.platformLogo}
      followers={ad.followers}
      platformLogo={ad.platformLogo}
      companyLogo={ad.companyLogo}
      price={ad.price}
    />
  )));

const displayCategories = (categories) => (
  categories.map((category) => (
    <Category key={category.title} title={category.title} image={category.image} />
  ))
);

export { displaySection, displayCategories };

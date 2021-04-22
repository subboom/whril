import { useState, useEffect } from 'react';

const marketPlace = () => {
  const [platforms, setPlatforms] = useState([{ logo: '' }]);
  useEffect(() => {
    fetch('https://whirl-back.herokuapp.com/platforms/index', {
      method: 'get',
    }).then((res) => res.json()).then((data) => setPlatforms(data));
  }, []);
  if (platforms[0].logo !== '') {
    return ([{
      followers: '../images/marketplace/followers/100k.png',
      platformLogo: platforms.find((elem) => elem.name === 'TikTok').logo,
      companyLogo: '../images/marketplace/yourlogohere.png',
      price: '$25,000',
    }, {
      followers: '../images/marketplace/followers/5m.png',
      platformLogo: platforms.find((elem) => elem.name === 'YouTube').logo,
      companyLogo: '../images/marketplace/yourlogohere.png',
      price: '$25,000',
    }, {
      followers: '../images/marketplace/followers/10k.png',
      platformLogo: '../images/social/light/__instagram-logo.png',
      companyLogo: '../images/marketplace/yourlogohere.png',
      price: '$25,000',
    }, {
      followers: '../images/marketplace/followers/10m.png',
      platformLogo: platforms.find((elem) => elem.name === 'Twitter').logo,
      companyLogo: '../images/marketplace/yourlogohere.png',
      price: '$25,000',
    }, {
      followers: '../images/marketplace/followers/10m.png',
      platformLogo: platforms.find((elem) => elem.name === 'Snap').logo,
      companyLogo: '../images/marketplace/yourlogohere.png',
      price: '$25,000',
    }, {
      followers: '../images/marketplace/followers/10m.png',
      platformLogo: platforms.find((elem) => elem.name === 'Facebook').logo,
      companyLogo: '../images/marketplace/yourlogohere.png',
      price: '$25,000',
    }]);
  } return platforms;
};

const categories = [{
  image: '../images/marketplace/style-icon.png',
  title: 'Style',
}, {
  image: '../images/marketplace/tech-icon.png',
  title: 'Tech',
}];

const marketSections = [{
  class: '__third-marketplace-section',
  title: '1M+ Followers',
  marketPlace,
}, {
  class: '__fourth-marketplace-section',
  title: '500k-1M Followers',
  marketPlace,
}, {
  class: '__fifth-marketplace-section',
  title: 'Under 500k Followers',
  marketPlace,
}, {
  class: '__sixth-marketplace-section',
  title: 'Under 25k Followers',
  marketPlace,
}];

export { marketPlace, categories, marketSections };

import React from 'react';
import Page from '../components/Page';

const AdvFilters: React.FC = () => {
  const title = 'ADVANCED FILTERS';
  const header = 'Unique Filters';
  const text = [
    'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  ];
  const buttonText = 'Learn More';
  const images = [
    'img-AdvFilters.png',
    'img-AdvFilters-1.png',
    'img-AdvFilters-2.png',
  ];

  return (
    <Page
      title={title}
      header={header}
      text={text}
      buttonText={buttonText}
      images={images}
      id="1"
    />
  );
};

export default AdvFilters;

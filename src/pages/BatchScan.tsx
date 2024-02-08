import React from 'react';
import Page from '../components/Page';

const BatchScan: React.FC = () => {
  const title = 'BATCH SCAN';
  const header = 'Multiple Page Scan';
  const text = [
    'LScan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  ];
  const buttonText = 'Learn More';
  const images = [
    'img-BatchScan.png',
    'img-BatchScan-1.png',
    'img-BatchScan-2.png',
    'img-BatchScan-3.png',
  ];
  return (
    <Page
      title={title}
      header={header}
      text={text}
      buttonText={buttonText}
      images={images}
      id="2"
    />
  );
};
export default BatchScan;

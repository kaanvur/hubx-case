import React from 'react';
import Page from '../components/Page';

const ExportShare: React.FC = () => {
  const title = 'EXPORT & SHARE';
  const header = 'All-Round Conversion';
  const text = ['Export your scans as PDF,JPG,ZIP,TXT and Word.'];
  const buttonText = 'Learn More';
  const images = [
    'img-ExportShare.png',
    'img-ExportShare-1.png',
    'img-ExportShare-2.png',
    'img-ExportShare-3.png',
    'img-ExportShare-4.png',
  ];

  return (
    <Page
      title={title}
      header={header}
      text={text}
      buttonText={buttonText}
      images={images}
      id="4"
    />
  );
};
export default ExportShare;

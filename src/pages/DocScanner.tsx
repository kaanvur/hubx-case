import React from 'react';
import Page from '../components/Page';

const DocScanner: React.FC = () => {
  const title = 'DOCUMENT SCANNER';
  const header = 'Scan with Ease';
  const text = [
    'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  ];
  const buttonText = 'Learn More';
  const images = ['img-DocScanner.png'];

  return (
    <Page
      title={title}
      header={header}
      text={text}
      buttonText={buttonText}
      images={images}
      id="3"
    />
  );
};
export default DocScanner;

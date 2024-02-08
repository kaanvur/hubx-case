import React from 'react';
import Page from '../components/Page';

const SignStamp: React.FC = () => {
  const title = 'SING & STAMP';
  const header = 'One-Tap Focus';
  const text = [
    'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  ];
  const buttonText = 'Learn More';
  const images = [
    'img-SignStamp.png',
    'img-SignStamp-1.png',
    'img-SignStamp-2.png',
  ];

  return (
    <Page
      title={title}
      header={header}
      text={text}
      buttonText={buttonText}
      images={images}
      id="5"
    />
  );
};
export default SignStamp;

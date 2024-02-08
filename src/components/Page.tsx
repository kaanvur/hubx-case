import React from 'react';
import '../styles/page.css';
import { motion } from 'framer-motion';

interface PageProps {
  title: string;
  header: string;
  text: string[];
  buttonText: string;
  images: string[];
  id: string;
}

const Page: React.FC<PageProps> = ({
  title,
  header,
  text,
  buttonText,
  images,
  id,
}) => {
  const dynamicClass = `anim-${title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`;
  const customAnimations = [
    {
      initial: { y: '100%' },
      animate: { y: '0%' },
      transition: { duration: 0.5, ease: 'easeOut' },
      dynamicClass: [
        'anim-batch-scan',
        'anim-document-scanner',
        'anim-sing--stamp',
        'anim-advanced-filters',
        'anim-export--share',
      ],
      index: [0],
    },
    {
      initial: { scale: 0, top: '30%', x: '50%', right: 0, width: '60%' },
      animate: { scale: 1 },
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
      dynamicClass: ['anim-sing--stamp'],
      index: [1],
    },
    {
      initial: { scale: 0, top: '50%', x: '-50%', width: '60%' },
      animate: { scale: 1 },
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
      dynamicClass: ['anim-sing--stamp'],
      index: [2],
    },
    {
      initial: {
        y: '110%',
        left: '50%',
        x: '-50%',
        scale: 1.2,
        width: '66.4%',
      },
      animate: { y: '0%', scale: 1 },
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
      dynamicClass: ['anim-batch-scan'],
      index: [1],
    },
    {
      initial: {
        y: '110%',
        left: '50%',
        x: '-50%',
        scale: 1.2,
        width: '78.1%',
      },
      animate: { y: '0%', scale: 1, bottom: '-17px' },
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.8 },
      dynamicClass: ['anim-batch-scan'],
      index: [2],
    },
    {
      initial: {
        y: '110%',
        left: '50%',
        x: '-50%',
        scale: 1.2,
        width: '82.6%',
      },
      animate: { y: '0%', scale: 1, bottom: '-15px' },
      transition: { duration: 0.3, ease: 'easeOut', delay: 1.1 },
      dynamicClass: ['anim-batch-scan'],
      index: [3],
    },
    {
      initial: { opacity: 0, x: '-70%', width: '11.7%' },
      animate: { opacity: 1 },
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.5 },
      dynamicClass: ['anim-advanced-filters'],
      index: [1],
    },
    {
      initial: { opacity: 0, right: 0, x: '70%', width: '11.7%' },
      animate: { opacity: 1 },
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.7 },
      dynamicClass: ['anim-advanced-filters'],
      index: [2],
    },
    {
      initial: {
        y: '100%',
        left: '50%',
        x: '-50%',
        rotate: '40deg',
        width: '6.6%',
      },
      animate: { y: '-100%', left: '-5%', rotate: '0deg' },
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.5 },
      dynamicClass: ['anim-export--share'],
      index: [1],
    },
    {
      initial: {
        y: '100%',
        left: '50%',
        x: '-50%',
        rotate: '26deg',
        width: '43.5%',
      },
      animate: { y: '0%', left: '14%', rotate: '-0deg' },
      transition: { duration: 0.5, ease: 'easeOut', delay: 0.8 },
      dynamicClass: ['anim-export--share'],
      index: [2],
    },
    {
      initial: { y: '100%', left: '50%', x: '-50%', width: '35.5%' },
      animate: { y: '-25%', left: '50%' },
      transition: { duration: 0.5, ease: 'easeOut', delay: 1.1 },
      dynamicClass: ['anim-export--share'],
      index: [3],
    },
    {
      initial: {
        y: '100%',
        left: '50%',
        x: '-50%',
        rotate: '-26deg',
        width: '43.5%',
      },
      animate: { y: '0%', left: '90%', rotate: '-0deg' },
      transition: { duration: 0.5, ease: 'easeOut', delay: 1.4 },
      dynamicClass: ['anim-export--share'],
      index: [4],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      key={id}
    >
      <div className="page">
        <div className={`image-container ${dynamicClass}`}>
          {images.map((image, index) => {
            const customAnimation = customAnimations.find(
              (value) =>
                value.index.includes(index) &&
                value.dynamicClass.includes(`${dynamicClass}`),
            );
            const initial = customAnimation ? customAnimation.initial : {};
            const animate = customAnimation ? customAnimation.animate : {};
            const transition = customAnimation
              ? customAnimation.transition
              : {};

            return (
              <motion.img
                initial={initial}
                animate={animate}
                transition={transition}
                key={index}
                src={`src/img/${image}`}
                alt={`Image ${index}`}
              />
            );
          })}
        </div>
        <div className="content">
          <h1>{title}</h1>
          <h2>{header}</h2>
          {text.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <button type="button">{buttonText}</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;

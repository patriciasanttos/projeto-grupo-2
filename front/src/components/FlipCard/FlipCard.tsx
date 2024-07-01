import React from 'react';
import Style from './index.module.scss';
import { open_Sans } from '@/fonts/_fonts';

interface FlipCardProps {
  image: string;
  alt: string;
  text: string;
  frontText?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, alt, text, frontText }) => {
  return (
    <div className={Style.flipCard}>
      <div className={Style.flipCard__inner}>
        <div className={Style.flipCard__front}>
          <img src={image} alt={alt} />
          {frontText ? <p>{frontText}</p> : ''}
        </div>
        <div
          className={`${Style.flipCard__back} ${open_Sans.style.fontFamily}`}
        >
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

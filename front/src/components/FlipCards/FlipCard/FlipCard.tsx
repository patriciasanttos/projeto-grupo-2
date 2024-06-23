import React from 'react';
import Style from './index.module.scss';

interface FlipCardProps {
  image: string;
  alt: string;
  text: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, alt, text }) => {
  return (
    <div className={Style.flipCard}>
      <div className={Style.flipCard__inner}>
        <div className={Style.flipCard__front}>
          <img src={image} alt={alt} />
        </div>
        <div
          className={Style.flipCard__back}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </div>
    </div>
  );
};

export default FlipCard;

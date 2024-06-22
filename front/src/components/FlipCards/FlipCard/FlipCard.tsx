import React from 'react';
import './styles.scss';

interface FlipCardProps {
  image: string;
  alt: string;
  text: string;
}

export const FlipCard: React.FC<FlipCardProps> = ({ image, alt, text }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="front">
          <img src={image} alt={alt} />
        </div>
        <div className="back" dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </div>
  );
};

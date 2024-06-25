import React from 'react';
import Style from './index.module.scss';

interface ServiceCardProps {
  image: string;
  alt: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ image, alt }) => {
  return (
    <div className={Style.serviceCard}>
      <img src={image} alt={alt} />
    </div>
  );
};

export const ServiceCardList = () => {
  return (
    <main className={Style.serviceCard__list}>
      <ServiceCard image="quality.svg" alt="dollar" />
      <ServiceCard image="hourglass.svg" alt="hourglass" />
      <ServiceCard image="dollar.svg" alt="dollar" />
      <ServiceCard image="hospital.svg" alt="hospital" />
    </main>
  );
};

export default ServiceCardList;

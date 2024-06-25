import { ServiceCard } from '../ServiceCard/ServiceCard';
import Style from './index.module.scss';

export const ServiceList = () => {
  return (
    <main className={Style.serviceCard__list}>
      <ServiceCard image="quality.svg" alt="dollar" />
      <ServiceCard image="hourglass.svg" alt="hourglass" />
      <ServiceCard image="dollar.svg" alt="dollar" />
      <ServiceCard image="hospital.svg" alt="hospital" />
    </main>
  );
};

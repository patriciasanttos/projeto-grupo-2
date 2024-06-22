import { ServiceCard } from '../ServiceCard/ServiceCard';
import './styles.scss';

export const ServiceList = () => {
  return (
    <main>
      <ServiceCard image="quality.svg" alt="dollar" />
      <ServiceCard image="hourglass.svg" alt="hourglass" />
      <ServiceCard image="dollar.svg" alt="dollar" />
      <ServiceCard image="hospital.svg" alt="hospital" />
    </main>
  );
};

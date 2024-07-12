import React from 'react';
import Style from './index.module.scss';
import FlipCard from '@/components/FlipCard/FlipCard';

const ServiceCardList = () => {
  return (
    <main className={Style.serviceCard__list}>
      <FlipCard
        text="A esterilização correta dos instrumentos cirúrgicos e médicos é fundamental para evitar infecções hospitalares, que podem levar a complicações graves ou até à morte do paciente. Conhecer e avaliar o CME do hospital garante que todos os processos estejam alinhados com os padrões de segurança e higiene."
        frontText="Segurança do paciente"
        image="patient.svg"
        alt="dollar"
      />
      <FlipCard
        text="Um CME bem-estruturado e equipado assegura que os instrumentos utilizados em procedimentos médicos sejam devidamente esterilizados e mantidos. Isso resulta em um alto padrão de cuidado e tratamento"
        frontText="Qualidade dos Serviços de Saúde"
        image="healthcare.svg"
        alt="hourglass"
      />
      <FlipCard
        text="A reputação de um hospital é fortemente influenciada pela segurança e qualidade dos seus serviços. A transparência sobre os processos do CME e a garantia de sua eficácia aumentam a confiança dos pacientes e da comunidade médica na instituição, fortalecendo sua reputação."
        frontText="Confiança e Reputação"
        image="reputation.svg"
        alt="dollar"
      />
    </main>
  );
};

export default ServiceCardList;

import React from 'react';
import Style from './index.module.scss';
import FlipCard from '@/components/FlipCard/FlipCard';

const ServiceCardList = () => {
  return (
    <main className={Style.serviceCard__list}>
      <FlipCard
        text="A reputação de um hospital é fortemente influenciada pela segurança e qualidade dos seus serviços. A transparência sobre os processos do CME e a garantia de sua eficácia aumentam a confiança dos pacientes e da comunidade médica na instituição, fortalecendo sua reputação."
        frontText="Segurança do paciente"
        image="quality.svg"
        alt="dollar"
      />
      <FlipCard
        text="A reputação de um hospital é fortemente influenciada pela segurança e qualidade dos seus serviços. A transparência sobre os processos do CME e a garantia de sua eficácia aumentam a confiança dos pacientes e da comunidade médica na instituição, fortalecendo sua reputação."
        frontText="Qualidade dos Serviços de Saúde"
        image="hourglass.svg"
        alt="hourglass"
      />
      <FlipCard
        text="A esterilização correta dos instrumentos cirúrgicos e médicos é fundamental para evitar infecções hospitalares, que podem levar a complicações graves ou até à morte do paciente. Conhecer e avaliar o CME do hospital garante que todos os processos estejam alinhados com os padrões de segurança e higiene."
        frontText="Confiança e Reputação"
        image="dollar.svg"
        alt="dollar"
      />
    </main>
  );
};

export default ServiceCardList;

import React from 'react';
import Style from './index.module.scss';
import FlipCard from '../FlipCard/FlipCard';

const AboutToolList = () => {
  return (
    <section className={Style.aboutTool__list}>
      <FlipCard
        image="quality.svg"
        alt="dollar"
        text="Nossa ferramenta leva em conta os mais rigorosos padrões de qualidade e
              segurança para garantir que as máquinas recomendadas atendam e superem 
              essas exigências."
      />
      <FlipCard
        image="hourglass.svg"
        alt="hourglass"
        text="Utilizar a nossa ferramenta é simples e intuitivo. <br/>
              Com apenas algumas informações ela gera recomendações precisas, eliminando 
              a complexidade do processo de seleção, reduzindo significativamente o tempo 
              gasto na tomada de decisão."
      />
      <FlipCard
        image="dollar.svg"
        alt="dollar"
        text="Nossa ferramenta ajuda você a identificar opções que oferecem o melhor custo-benefício,
              considerando não só o preço de compra, mas também os custos operacionais e de manutenção
              ao longo do tempo."
      />
      <FlipCard
        image="hospital.svg"
        alt="hospital"
        text="A nossa ferramenta de cálculo de CME foi desenvolvida para atender às necessidades 
              específicas do seu hospital."
      />
    </section>
  );
};

export default AboutToolList;

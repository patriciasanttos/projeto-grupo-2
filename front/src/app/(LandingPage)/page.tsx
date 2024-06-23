'use client';
import React, { useState } from 'react';
import Style from './page.module.scss';
import Image from 'next/image';
import HeaderImage from '../../../public/headerImg.jpg';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import InitialCardForm from '@/components/InitialCardForm/InitialCardForm';
import FormCard from '@/components/CardForm/FormCard';
import { LightTheme } from '@/themes';
import FlipCardList from '@/components/FlipCardList/FlipCardList';

const LandingPage = () => {
  const [card, setCard] = useState('initial');

  const renderCardForm = (card: string) => {
    switch (card) {
      case 'initial':
        return <InitialCardForm setCard={setCard} />;
      case 'form':
        return <FormCard />;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <nav style={{ height: '10vh', backgroundColor: 'midnightblue' }}>
        Temporario ate o nav ser inserido seguindo essa mesma medida
      </nav>
      <Box component="header" className={Style.header}>
        <Image
          src={HeaderImage}
          alt="CME"
          priority
          className={Style.header__img}
          fill
        />
        <Box className={Style.header__title}>
          <Typography variant="h2" fontWeight="900" color="white">
            Não espere mais para transformar a gestão do seu hospital!
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box className={Style.header__subTitle}>
            <Typography variant="h5" fontWeight="600">
              Otimize a gestão de recursos com nossa ferramenta de cálculo de
              CME
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box component="section" className={Style.cardForm}>
        <Container maxWidth="lg" className={Style.cardForm__card}>
          {renderCardForm(card)}
        </Container>
      </Box>
      {card != 'initial' ? (
        <Container maxWidth="lg" className={Style.aboutTool}>
          <Typography variant="h6" fontWeight="600" textAlign="center" color={"white"}>
            Descubra a revolução na Gestão de Materiais Hospitalares com Nossa
            Ferramenta de Cálculo de CME
          </Typography>
          <FlipCardList />
        </Container>
      ) : (
        ''
      )}
    </ThemeProvider>
  );
};

export default LandingPage;

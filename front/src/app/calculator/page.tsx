'use client';
import React, { useState } from 'react';
import Style from './page.module.scss';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { LightTheme } from '@/themes';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

const CalculatorForm1 = () => {
  return (
    <Box component="section" className={Style.calculator}>
      <Box component="aside" className={Style.calculator__aside}>
        <Typography variant="h5" fontWeight="700" color="white">
          Informações Gerais:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="500"
          color="white"
          marginTop="5vh"
          lineHeight="2rem"
        >
          Preencha os dados sobre o seu hospital. Essas informações são
          essenciais para entendermos a capacidade e a estrutura básica da sua
          instituição. Precisamos saber o tamanho do hospital, o número de
          leitos e outras informações gerais.
        </Typography>
      </Box>
      <Box component="main" className={Style.calculator__card}></Box>
    </Box>
  );
};
const CalculatorForm2 = () => {
  return (
    <Box component="section" className={Style.calculator}>
      <Box component="aside" className={Style.calculator__aside}>
        <Typography variant="h5" fontWeight="700" color="white">
          Informações Gerais:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="500"
          color="white"
          marginTop="5vh"
          lineHeight="2rem"
        >
          Preencha os dados sobre o seu hospital. Essas informações são
          essenciais para entendermos a capacidade e a estrutura básica da sua
          instituição. Precisamos saber o tamanho do hospital, o número de
          leitos e outras informações gerais.
        </Typography>
      </Box>
      <Box component="main" className={Style.calculator__card}></Box>
    </Box>
  );
};
const CalculatorForm3 = () => {
  return (
    <Box component="section" className={Style.calculator}>
      <Box component="aside" className={Style.calculator__aside}>
        <Typography variant="h5" fontWeight="700" color="white">
          Informações Gerais:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="500"
          color="white"
          marginTop="5vh"
          lineHeight="2rem"
        >
          Preencha os dados sobre o seu hospital. Essas informações são
          essenciais para entendermos a capacidade e a estrutura básica da sua
          instituição. Precisamos saber o tamanho do hospital, o número de
          leitos e outras informações gerais.
        </Typography>
      </Box>
      <Box component="main" className={Style.calculator__card}></Box>
    </Box>
  );
};

const Calculator = () => {
  const [page, setPage] = useState('page1');

  const RenderCalculator = (page: string) => {
    switch (page) {
      case 'page1':
        return <CalculatorForm1 />;
      case 'page2':
        return <CalculatorForm2 />;
      case 'page3':
        return <CalculatorForm3 />;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <Box component="header" className={Style.header}>
        <Image src={Logo} alt="Logo Equipacare" className={Style.header__img} />
      </Box>
      {RenderCalculator(page)}
    </ThemeProvider>
  );
};

export default Calculator;

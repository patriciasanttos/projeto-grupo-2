'use client';
import React from 'react';
import Style from './page.module.scss';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { LightTheme } from '@/themes';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

const Calculator = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box component="header" className={Style.header}>
        <Image src={Logo} alt="Logo Equipacare" className={Style.header__img} />
      </Box>
      <Box component="section" className={Style.calculator}>
        <Box component="aside" className={Style.calculator__aside}>
          <Typography variant="h5" fontWeight="700" color="white"></Typography>
          <Typography
            variant="body2"
            fontWeight="500"
            color="white"
            marginTop="5vh"
            lineHeight="2rem"
          ></Typography>
        </Box>
        <Box component="main" className={Style.calculator__card}></Box>
      </Box>
    </ThemeProvider>
  );
};

export default Calculator;

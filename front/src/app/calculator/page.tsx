'use client';
import React from 'react';
import Style from './page.module.scss';
import { Box, ThemeProvider } from '@mui/material';
import { LightTheme } from '@/themes';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';

const Calculator = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box component="header" className={Style.header}>
        <Image src={Logo} alt="Logo Equipacare" className={Style.header__img} />
      </Box>
    </ThemeProvider>
  );
};

export default Calculator;

'use client'
import React from 'react';
import Style from './page.module.scss';
import { Box, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import { LightTheme } from '@/themes';
import Logo from '../../../../public/logo.svg';
import VerticalTab from '@/components/VerticalTab/VerticalTab';

const Result = () => {
  return (
    <>
      <ThemeProvider theme={LightTheme}>
        <Box component="header" className={Style.header}>
          <Image
            src={Logo}
            alt="Logo Equipacare"
            className={Style.header__img}
          />
        </Box>
        <VerticalTab brands={''/*todo*/}/>
      </ThemeProvider>
    </>
  );
};

export default Result;

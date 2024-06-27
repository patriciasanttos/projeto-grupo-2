'use client';
import React from 'react';
import Style from './page.module.scss';
import { Box, Tab, Tabs, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import { LightTheme } from '@/themes';
import Logo from '../../../../public/logo.svg';
import VerticalTab from '@/components/VerticalTab/VerticalTab';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Result = () => {
  const [machine, setMachine] = React.useState(0);

  const handleMachine = (event: React.SyntheticEvent, newValue: number) => {
    setMachine(newValue);
  };

  const RenderVerticalTab = (machine: number) => {
    switch (machine) {
      case 0:
        return <VerticalTab brands={'' /*todo*/} />
      case 1:
        return <VerticalTab brands={'' /*todo*/} />
      default:
        break;
    }
  }

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
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white' }}>
            <Tabs
              
              textColor="primary"
              value={machine}
              onChange={handleMachine}
              aria-label="basic tabs example"
            >
              <Tab label="Autoclave" {...a11yProps(0)} />
              <Tab label="Lavadora Termodesinfectora" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </Box>
        {RenderVerticalTab(machine)}
      </ThemeProvider>
    </>
  );
};

export default Result;

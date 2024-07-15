'use client';
import React, { useEffect, useReducer } from 'react';
import Style from './page.module.scss';
import { Box, Tab, Tabs, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import { LightTheme } from '@/themes';
import Logo from '../../../../public/logo.svg';
import VerticalTab from '@/components/VerticalTab/VerticalTab';
import { ActionResult, StateResult } from '@/types';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Reducer = (state: StateResult, action: ActionResult) => {
  switch (action.type) {
    case 'SET_MACHINE':
      return { ...state, machine: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const Result = ({ params }: { params: { result: string } }) => {
  const initialArgs = {
    machine: 0,
    data: {
      autoclaves: [],
      cnpj: '',
      num_autoclaves: 0,
      num_thermo_washers: 0,
      thermo_washers: [],
    },
  };

  const [state, dispatch] = useReducer(Reducer, initialArgs);

  const handleMachine = (event: React.SyntheticEvent, newValue: number) => {
    dispatch({ type: 'SET_MACHINE', payload: newValue });
  };

  let autoclavesteste = [
    {
      brand: 'A',
      model: 'a2',
      total_vol: 1111,
      price: 1111,
    },
    {
      brand: 'A',
      model: 'a3',
      total_vol: 1111,
      price: 1111,
    },
    {
      brand: 'C',
      model: 'c2',
      total_vol: 1111,
      price: 1111,
    },
    {
      brand: 'F',
      model: 'f4',
      total_vol: 1111,
      price: 1111,
    },
  ];

  const RenderVerticalTab = () => {
    switch (state.machine) {
      case 0:
        return (
          <VerticalTab
            machines={autoclavesteste}
            numMachines={state.data.num_autoclaves}
          />
        );
      case 1:
        return (
          <VerticalTab
            machines={state.data.thermo_washers}
            numMachines={state.data.num_thermo_washers}
          />
        );
      default:
        break;
    }
  };

  useEffect(() => {
    const decodedString = decodeURIComponent(params.result);
    const jsonObject = JSON.parse(decodedString);
    dispatch({ type: 'SET_DATA', payload: jsonObject });
  }, []);

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
          <Box
            sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white' }}
          >
            <Tabs
              textColor="primary"
              value={state.machine}
              onChange={handleMachine}
              aria-label="basic tabs example"
            >
              <Tab label="Autoclave" {...a11yProps(0)} />
              <Tab label="Lavadora Termodesinfectora" {...a11yProps(1)} />
            </Tabs>
          </Box>
        </Box>
        {RenderVerticalTab()}
      </ThemeProvider>
    </>
  );
};

export default Result;

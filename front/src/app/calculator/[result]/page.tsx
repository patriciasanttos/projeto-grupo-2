'use client';
import React, { useEffect, useReducer } from 'react';
import Style from './page.module.scss';
import { Box, Tab, Tabs, ThemeProvider } from '@mui/material';
import Image from 'next/image';
import { LightTheme } from '@/themes';
import Logo from '../../../../public/logo.svg';
import VerticalTab from '@/components/VerticalTab/VerticalTab';
import { ActionResult, StateResult } from '@/types';
import ModalResult from '@/components/ModalResult/ModalResult';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Função auxiliar para configurar acessibilidade das abas
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

  // Função para lidar com a mudança de aba entre Autoclave e Lavadora Termodesinfectora
  const handleMachine = (event: React.SyntheticEvent, newValue: number) => {
    dispatch({ type: 'SET_MACHINE', payload: newValue });
  };

  // Renderiza o componente VerticalTab baseado na máquina selecionada
  const RenderVerticalTab = () => {
    switch (state.machine) {
      case 0:
        return (
          <VerticalTab
            machines={state.data.autoclaves}
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
    // Decodifica a string de parâmetro result e converte em objeto JSON
    const decodedString = decodeURIComponent(params.result);
    const jsonObject = JSON.parse(decodedString);

    // Atualiza o estado local com os dados decodificados
    dispatch({ type: 'SET_DATA', payload: jsonObject });

    // Limpa os dados da empresa do LocalStorage após o processamento
    localStorage.removeItem('dataLocal');
  }, []);

  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
          <ModalResult cnpj={state.data.cnpj} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default Result;

'use client';
import React, { useReducer } from 'react';
import Style from './page.module.scss';
import Image from 'next/image';
import HeaderImage from '../../../public/headerImg.jpg';
import { Box, Container, ThemeProvider, Typography } from '@mui/material';
import InitialCardForm from '@/components/InitialCardForm/InitialCardForm';
import FormCard from '@/components/CardForm/FormCard';
import { LightTheme } from '@/themes';
import AboutToolList from '@/components/AboutToolList/AboutToolList';
import ServiceCardList from '@/components/ServiceCard/ServiceCardList';
import Footer from '@/components/Footer/Footer';

interface State {
  name: string;
  email: string;
  tel: string;
  cep: string;
  institutionName: string;
  cnpj: string;
  segment: string;
  momentEnterprise: string;
  statusClinicalEng: string;
  momentCME: string;
  card: string;
}

type Action =
  | {
      type: 'SET_FORM';
      payload: {
        name?: string;
        email?: string;
        tel?: string;
        cep?: string;
        institutionName?: string;
        cnpj?: string;
        position?: string;
        segment?: string;
        momentEnterprise?: string;
        statusClinicalEng?: string;
        momentCME?: string;
      };
    }
  | {
      type: 'SET_CARD';
      payload: string;
    };

const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_FORM':
      return { ...state, ...action.payload };
    case 'SET_CARD':
      return { ...state, card: action.payload };
    default:
      return state;
  }
};

const LandingPage = () => {
  const InitialArgs = {
    name: '',
    email: '',
    tel: '',
    cep: '',
    institutionName: '',
    cnpj: '',
    segment: '',
    momentEnterprise: '',
    statusClinicalEng: 'Própria',
    momentCME: 'Implementação',
    card: 'initial',
  };

  const [state, dispatch] = useReducer(Reducer, InitialArgs);

  const renderCardForm = (card: string) => {
    switch (card) {
      case 'initial':
        return <InitialCardForm dispatch={dispatch} />;
      case 'form':
        return <FormCard dispatch={dispatch} />;
      default:
        break;
    }
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <nav style={{ height: '10vh', backgroundColor: '#001329' }}>
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
          {renderCardForm(state.card)}
        </Container>
      </Box>
      {state.card != 'initial' ? (
        <Container maxWidth="lg" className={Style.aboutTool}>
          <Typography
            variant="h6"
            fontWeight="600"
            textAlign="center"
            color={'white'}
          >
            Descubra a revolução na Gestão de Materiais Hospitalares com Nossa
            Ferramenta de Cálculo de CME
          </Typography>
          <AboutToolList />
        </Container>
      ) : (
        ''
      )}
      <Container className={Style.serviceCards}>
        <Typography
          variant="h5"
          fontWeight="600"
          textAlign="center"
          color={'white'}
          marginBottom={'2vh'}
        >
          A importância de garantir equipamentos adequados
        </Typography>
        <ServiceCardList />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default LandingPage;

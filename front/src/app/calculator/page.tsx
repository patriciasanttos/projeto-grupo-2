'use client';
import React, { useEffect, useReducer, useState } from 'react';
import Style from './page.module.scss';
import {
  Autocomplete,
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  Switch,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { LightTheme } from '@/themes';
import Image from 'next/image';
import Logo from '../../../public/logo.svg';
import {
  ActionCalculator,
  CalculatorResponseType,
  StateCalculator,
} from '@/types';
import { useSaveCompanyAndCalc } from '@/hooks/useCompany';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { clearCNPJ } from '@/utils/clearCNPJ';
import { useRouter } from 'next/navigation';

interface PropsCalculatorForm {
  state: StateCalculator;
  dispatch: React.Dispatch<ActionCalculator>;
}

const Reducer = (state: StateCalculator, action: ActionCalculator) => {
  switch (action.type) {
    case 'SET_FORM':
      return { ...state, ...action.payload };
    case 'SET_PAGE':
      return { ...state, page: action.payload };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, ...action.payload } };
    default:
      return state;
  }
};

const CalculatorForm1 = ({ dispatch, state }: PropsCalculatorForm) => {
  const HandleValidate = () => {
    !state.surgeryRooms.length ||
    !state.icuBeds.length ||
    !state.hospitalizationBeds.length
      ? dispatch({ type: 'SET_ERROR', payload: { validate: true } })
      : (dispatch({ type: 'SET_PAGE', payload: 'page2' }),
        dispatch({ type: 'SET_ERROR', payload: { validate: false } }));
  };

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
          Precisamos saber o tamanho do hospital, o número de leitos e outras
          informações gerais. Essas informações são essenciais para determinar a
          capacidade de atendimento e a demanda por materiais e equipamentos
          esterilizados, garantindo assim a eficiência e segurança no
          atendimento aos pacientes. A coleta desses dados permite um
          planejamento mais preciso e uma alocação adequada de recursos,
          otimizando o funcionamento do CME.
        </Typography>
      </Box>
      <Box component="main" className={Style.calculator__card}>
        <Box>
          <Typography variant="body1" fontWeight="700" textAlign="center">
            Por favor, preencha as informações gerais sobre o seu hospital.
          </Typography>
          <Typography variant="body2" textAlign="center" marginTop="2%">
            Esses dados são essenciais para entender a capacidade e estrutura
            básica da sua instituição.
          </Typography>
        </Box>
        <Box component="form" className={Style.calculator__form}>
          <TextField
            id="surgeryRooms"
            name="SurgeryRooms"
            label="Quantas salas cirúrgicas existem no hospital?"
            variant="outlined"
            value={state.surgeryRooms}
            onChange={e =>
              dispatch({
                type: 'SET_FORM',
                payload: { surgeryRooms: e.target.value },
              })
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Salas</InputAdornment>
              ),
            }}
            type="number"
            fullWidth
            margin="normal"
            error={state.errors.validate && !state.surgeryRooms.length}
            helperText={
              state.errors.validate && !state.surgeryRooms.length
                ? 'Campo Obrigatório'
                : ''
            }
          />
          <TextField
            id="icuBeds"
            name="ICUBeds"
            label="Quantos leitos de UTI estão disponíveis?"
            variant="outlined"
            value={state.icuBeds}
            onChange={e =>
              dispatch({
                type: 'SET_FORM',
                payload: { icuBeds: e.target.value },
              })
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Leitos</InputAdornment>
              ),
            }}
            type="number"
            fullWidth
            margin="normal"
            error={state.errors.validate && !state.icuBeds.length}
            helperText={
              state.errors.validate && !state.icuBeds.length
                ? 'Campo Obrigatório'
                : ''
            }
          />
          <TextField
            id="hospitalizationBeds"
            name="HospitalizationBeds"
            label="Quantos leitos estão disponíveis para internação?"
            variant="outlined"
            value={state.hospitalizationBeds}
            onChange={e =>
              dispatch({
                type: 'SET_FORM',
                payload: { hospitalizationBeds: e.target.value },
              })
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Leitos</InputAdornment>
              ),
            }}
            type="number"
            fullWidth
            margin="normal"
            error={state.errors.validate && !state.hospitalizationBeds.length}
            helperText={
              state.errors.validate && !state.hospitalizationBeds.length
                ? 'Campo Obrigatório'
                : 'recuperação pós-anestésica (RPA), observações e hospital-dia (HD)'
            }
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => HandleValidate()}
            fullWidth
          >
            Próximo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const CalculatorForm2 = ({ dispatch, state }: PropsCalculatorForm) => {
  const Days: string[] = ['1 ', '2 ', '3 ', '4 ', '5 ', '6 ', '7']; //todo

  const HandleValidate = () => {
    !state.surgerysPerDay.length || !state.weekDaySurgery.length
      ? dispatch({ type: 'SET_ERROR', payload: { validate: true } })
      : (dispatch({ type: 'SET_PAGE', payload: 'page3' }),
        dispatch({ type: 'SET_ERROR', payload: { validate: false } }));
  };
  return (
    <Box component="section" className={Style.calculator}>
      <Box component="aside" className={Style.calculator__aside}>
        <Typography variant="h5" fontWeight="700" color="white">
          Detalhes das Cirurgias:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="500"
          color="white"
          marginTop="5vh"
          lineHeight="2rem"
        >
          Informe sobre as cirurgias realizadas em seu hospital. Precisamos
          saber a quantidade de cirurgias e a frequência com que elas ocorrem.
          Isso nos ajudará a calcular o volume de materiais esterilizados e para
          garantir que as máquinas recomendadas mantenham um bom fluxo de
          organização e agilidade, elementos essenciais para o sucesso das
          operações.
        </Typography>
      </Box>
      <Box component="main" className={Style.calculator__card}>
        <Box>
          <Typography variant="body2" fontWeight="700" textAlign="center">
            Vamos coletar alguns detalhes sobre as cirurgias realizadas no seu
            hospital.
          </Typography>
          <Typography variant="body2" textAlign="center" marginTop="2%">
            Forneça informações sobre a quantidade e os dias em que as cirurgias
            são realizadas. Isso é essencial para calcular o volume de materiais
            usados.
          </Typography>
        </Box>
        <Box component="form" className={Style.calculator__form}>
          <TextField
            id="surgerysPerDay"
            name="SurgerysPerDay"
            label="Quantas cirurgias são realizadas em média por cada sala cirúrgica por dia?"
            variant="outlined"
            fullWidth
            margin="normal"
            value={state.surgerysPerDay}
            onChange={e =>
              dispatch({
                type: 'SET_FORM',
                payload: { surgerysPerDay: e.target.value },
              })
            }
            error={state.errors.validate && !state.surgerysPerDay.length}
            helperText={
              state.errors.validate && !state.surgerysPerDay.length
                ? 'Campo Obrigatório'
                : ''
            }
          />
          <Autocomplete
            disablePortal
            id="weekDaySurgery"
            options={Days}
            renderInput={params => (
              <TextField
                {...params}
                name="WeekDaySurgery"
                label="Quantos dias da semana as cirurgias são normalmente realizadas?"
                variant="outlined"
                fullWidth
                margin="normal"
                error={state.errors.validate && !state.weekDaySurgery.length}
                helperText={
                  state.errors.validate && !state.weekDaySurgery.length
                    ? 'Campo Obrigatório'
                    : ''
                }
              />
            )}
            value={state.weekDaySurgery}
            onChange={(e, value) =>
              value
                ? dispatch({
                    type: 'SET_FORM',
                    payload: { weekDaySurgery: value },
                  })
                : null
            }
          />
        </Box>
        <Box display={'flex'} columnGap={'5%'}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: 'SET_PAGE', payload: 'page1' })}
            fullWidth
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => HandleValidate()}
            fullWidth
          >
            Próximo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
const CalculatorForm3 = ({ dispatch, state }: PropsCalculatorForm) => {
  const HandleFabricProcessing = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch({
      type: 'SET_FORM',
      payload: { fabricProcessing: event.target.checked },
    });
  };

  const [dataCompany, setDataCompany] = useState({
    name: '',
    email: '',
    tel: '',
    cep: '',
    institutionName: '',
    cnpj: '',
    position: '',
    segment: '',
    momentEnterprise: '',
    statusClinicalEng: '',
    momentCME: '',
  });

  useEffect(() => {
    const dataLocal = localStorage.getItem('dataLocal');
    if (dataLocal) {
      const parsedData = JSON.parse(dataLocal);
      setDataCompany(parsedData);
    }
  }, []);

  const { mutate } = useSaveCompanyAndCalc();
  const router = useRouter();

  const HandleSubmit = async () => {
    const data = {
      dimensions: {
        surgery_rooms: Number(state.surgeryRooms),
        surgerys_per_day: Number(state.surgerysPerDay),
        week_days_surgery: Number(state.weekDaySurgery),
        uti_beds: Number(state.icuBeds),
        hospital_beds: Number(state.hospitalizationBeds),
        tissue_processing: state.fabricProcessing,
        cme_peak_interval: Number(state.cmePeakInterval),
        vol_per_surgery: {
          tissue: Number(state.fabricSurgery),
          instruments: Number(state.instrumentsSurgery),
        },
        vol_per_uti_beds: {
          tissue: Number(state.fabricICU),
          instruments: Number(state.instrumentsICU),
        },
        vol_per_hospital_beds: {
          tissue: Number(state.fabricHospitalization),
          instruments: Number(state.instrumentsHospitalization),
        },
      },
      data: {
        cnpj: clearCNPJ(dataCompany.cnpj),
        name: dataCompany.name,
        email: dataCompany.email,
        company_name: dataCompany.institutionName,
        cep: dataCompany.cep,
        phone: dataCompany.tel,
        segment: dataCompany.segment,
        role: dataCompany.position,
        objective: dataCompany.momentEnterprise,
        situation: dataCompany.statusClinicalEng,
      },
    };

    mutate(data, {
      onSuccess: ( res : { res: CalculatorResponseType }) => {
        const querystring = encodeURIComponent(JSON.stringify(res));
        console.log('foi', 'res:', res, 'querystring:', querystring);
        router.push(`/calculator/${querystring}`);
      },
    });
  };

  const HandleValidate = () => {
    if (state.fabricProcessing) {
      !state.instrumentsSurgery.length ||
      !state.instrumentsICU.length ||
      !state.instrumentsHospitalization.length ||
      !state.fabricSurgery.length ||
      !state.fabricICU.length ||
      !state.fabricHospitalization.length ||
      !state.cmePeakInterval.length
        ? dispatch({ type: 'SET_ERROR', payload: { validate: true } })
        : (dispatch({ type: 'SET_ERROR', payload: { validate: false } }),
          HandleSubmit());
    } else {
      !state.instrumentsSurgery.length ||
      !state.instrumentsICU.length ||
      !state.instrumentsHospitalization.length ||
      !state.cmePeakInterval.length
        ? dispatch({ type: 'SET_ERROR', payload: { validate: true } })
        : (dispatch({ type: 'SET_ERROR', payload: { validate: false } }),
          HandleSubmit());
    }
  };

  return (
    <Box component="section" className={Style.calculator}>
      <Box component="aside" className={Style.calculator__aside}>
        <Typography variant="h5" fontWeight="700" color="white">
          Volume de Materiais Processados:
        </Typography>
        <Typography
          variant="body2"
          fontWeight="500"
          color="white"
          marginTop="5vh"
          lineHeight="2rem"
        >
          Forneça o volume médio de materiais processados no seu hospital. Essa
          etapa é crucial para que possamos calcular a demanda de autoclaves e
          lavadoras termo-desinfectoras necessárias para a sua instituição.
        </Typography>
      </Box>
      <Box component="main" className={Style.calculator__card}>
        <Box>
          <Typography variant="body2" fontWeight="700" textAlign="center">
            Informe o volume médio de materiais processados no seu hospital.
          </Typography>
          <Typography variant="body2" textAlign="center" marginTop="2%">
            Essas informações são cruciais para nossos cálculos.
          </Typography>
        </Box>
        <Box component="form" className={Style.calculator__form}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant="caption">Por Cirurgia</Typography>
            <FormControlLabel
              value={state.fabricProcessing}
              control={
                <Switch
                  checked={state.fabricProcessing}
                  color="primary"
                  onChange={HandleFabricProcessing}
                />
              }
              label="Processamento de Tecido"
              labelPlacement="start"
            />
          </Box>
          {state.fabricProcessing ? (
            <Box className={Style.calculator__inputBox}>
              <TextField
                label="Instrumentos"
                id="instrumentsSurgery"
                name="instrumentsSurgery"
                error={
                  state.errors.validate && !state.instrumentsSurgery.length
                }
                helperText={
                  state.errors.validate && !state.instrumentsSurgery.length
                    ? 'Campo Obrigatório'
                    : '01 U.E. = 54 litros'
                }
                value={state.instrumentsSurgery}
                onChange={e =>
                  dispatch({
                    type: 'SET_FORM',
                    payload: { instrumentsSurgery: e.target.value },
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">U.E.</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Tecido"
                id="fabricSurgery"
                name="FabricSurgery"
                error={state.errors.validate && !state.fabricSurgery.length}
                helperText={
                  state.errors.validate && !state.fabricSurgery.length
                    ? 'Campo Obrigatório'
                    : '01 U.E. = 54 litros'
                }
                value={state.fabricSurgery}
                onChange={e =>
                  dispatch({
                    type: 'SET_FORM',
                    payload: { fabricSurgery: e.target.value },
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">U.E.</InputAdornment>
                  ),
                }}
              />
            </Box>
          ) : (
            <TextField
              label="Instrumentos"
              id="instrumentsSurgery"
              name="instrumentsSurgery"
              error={state.errors.validate && !state.instrumentsSurgery.length}
              helperText={
                state.errors.validate && !state.instrumentsSurgery.length
                  ? 'Campo Obrigatório'
                  : '01 U.E. (unidade de esterilização) = 01 DIN = 54 litros'
              }
              value={state.instrumentsSurgery}
              onChange={e =>
                dispatch({
                  type: 'SET_FORM',
                  payload: { instrumentsSurgery: e.target.value },
                })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">U.E.</InputAdornment>
                ),
              }}
            />
          )}
          <Typography variant="caption">Por Leito de UTI por Dia</Typography>
          {state.fabricProcessing ? (
            <Box className={Style.calculator__inputBox}>
              <TextField
                label="Instrumentos"
                id="instrumentsICU"
                name="InstrumentsICU"
                error={state.errors.validate && !state.instrumentsICU.length}
                helperText={
                  state.errors.validate && !state.instrumentsICU.length
                    ? 'Campo Obrigatório'
                    : '01 U.E. = 54 litros'
                }
                value={state.instrumentsICU}
                onChange={e =>
                  dispatch({
                    type: 'SET_FORM',
                    payload: { instrumentsICU: e.target.value },
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">U.E.</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Tecido"
                id="fabricICU"
                name="FabricICU"
                error={state.errors.validate && !state.fabricICU.length}
                helperText={
                  state.errors.validate && !state.fabricICU.length
                    ? 'Campo Obrigatório'
                    : '01 U.E. = 54 litros'
                }
                value={state.fabricICU}
                onChange={e =>
                  dispatch({
                    type: 'SET_FORM',
                    payload: { fabricICU: e.target.value },
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">U.E.</InputAdornment>
                  ),
                }}
              />
            </Box>
          ) : (
            <TextField
              label="Instrumentos"
              id="instrumentsICU"
              name="InstrumentsICU"
              error={state.errors.validate && !state.instrumentsICU.length}
              helperText={
                state.errors.validate && !state.instrumentsICU.length
                  ? 'Campo Obrigatório'
                  : '01 U.E. (unidade de esterilização) = 01 DIN = 54 litros'
              }
              value={state.instrumentsICU}
              onChange={e =>
                dispatch({
                  type: 'SET_FORM',
                  payload: { instrumentsICU: e.target.value },
                })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">U.E.</InputAdornment>
                ),
              }}
            />
          )}
          <Typography variant="caption">
            Por Leito de Internação por Dia
          </Typography>
          {state.fabricProcessing ? (
            <Box className={Style.calculator__inputBox}>
              <TextField
                label="Instrumentos"
                id="instrumentsHospitalization"
                name="instrumentsHospitalization"
                error={
                  state.errors.validate &&
                  !state.instrumentsHospitalization.length
                }
                helperText={
                  state.errors.validate &&
                  !state.instrumentsHospitalization.length
                    ? 'Campo Obrigatório'
                    : '01 U.E. = 54 litros'
                }
                value={state.instrumentsHospitalization}
                onChange={e =>
                  dispatch({
                    type: 'SET_FORM',
                    payload: { instrumentsHospitalization: e.target.value },
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">U.E.</InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Tecido"
                id="fabricHospitalization"
                name="fabricHospitalization"
                error={
                  state.errors.validate && !state.fabricHospitalization.length
                }
                helperText={
                  state.errors.validate && !state.fabricHospitalization.length
                    ? 'Campo Obrigatório'
                    : '01 U.E. = 54 litros'
                }
                value={state.fabricHospitalization}
                onChange={e =>
                  dispatch({
                    type: 'SET_FORM',
                    payload: { fabricHospitalization: e.target.value },
                  })
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">U.E.</InputAdornment>
                  ),
                }}
              />
            </Box>
          ) : (
            <TextField
              label="Instrumentos"
              id="instrumentsHospitalization"
              name="instrumentsHospitalization"
              error={
                state.errors.validate &&
                !state.instrumentsHospitalization.length
              }
              helperText={
                state.errors.validate &&
                !state.instrumentsHospitalization.length
                  ? 'Campo Obrigatório'
                  : '01 U.E. (unidade de esterilização) = 01 DIN = 54 litros'
              }
              value={state.instrumentsHospitalization}
              onChange={e =>
                dispatch({
                  type: 'SET_FORM',
                  payload: { instrumentsHospitalization: e.target.value },
                })
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">U.E.</InputAdornment>
                ),
              }}
            />
          )}
          <TextField
            id="cmePeakInterval"
            name="CMEPeakInterval"
            label="Qual o intervalo de pico de funcionamento da CME?"
            variant="outlined"
            type="number"
            fullWidth
            error={state.errors.validate && !state.cmePeakInterval.length}
            helperText={
              state.errors.validate && !state.cmePeakInterval.length
                ? 'Campo Obrigatório'
                : 'Horas por dia'
            }
            value={state.cmePeakInterval}
            onChange={e =>
              dispatch({
                type: 'SET_FORM',
                payload: { cmePeakInterval: e.target.value },
              })
            }
          />
        </Box>
        <Box display={'flex'} columnGap={'5%'}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch({ type: 'SET_PAGE', payload: 'page2' })}
            fullWidth
          >
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => HandleValidate()}
            fullWidth
          >
            Calcular
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Calculator = () => {
  const InitialArgs = {
    surgeryRooms: '',
    icuBeds: '',
    hospitalizationBeds: '',
    surgerysPerDay: '',
    weekDaySurgery: '',
    fabricProcessing: false,
    instrumentsSurgery: '',
    fabricSurgery: '',
    instrumentsICU: '',
    fabricICU: '',
    instrumentsHospitalization: '',
    fabricHospitalization: '',
    cmePeakInterval: '',
    page: 'page1',
    errors: {
      validate: false,
    },
  };

  const [state, dispatch] = useReducer(Reducer, InitialArgs);

  const RenderCalculator = (page: string) => {
    switch (page) {
      case 'page1':
        return <CalculatorForm1 state={state} dispatch={dispatch} />;
      case 'page2':
        return <CalculatorForm2 state={state} dispatch={dispatch} />;
      case 'page3':
        return <CalculatorForm3 state={state} dispatch={dispatch} />;
      default:
        break;
    }
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={LightTheme}>
        <Box component="header" className={Style.header}>
          <Image
            src={Logo}
            alt="Logo Equipacare"
            className={Style.header__img}
          />
        </Box>
        {RenderCalculator(state.page)}
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Calculator;

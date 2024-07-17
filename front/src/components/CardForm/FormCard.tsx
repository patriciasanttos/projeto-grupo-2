'use client';
import React, { useCallback, useState } from 'react';
import Style from './index.module.scss';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { ActionLandingPage, StateLandinPage } from '@/types';
import InputMask from 'react-input-mask';
import { validateLandingPageState } from '@/utils/validateLandingPageState';
import { useCheckFirstSubmitByCNPJ } from '@/hooks/useCompany';
import { clearCNPJ } from '@/utils/clearCNPJ';
import { useRouter } from 'next/navigation';
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

interface FormCardProps {
  state: StateLandinPage;
  dispatch: React.Dispatch<ActionLandingPage>;
}

interface HandleSubmit {
  state: StateLandinPage;
  dispatch: React.Dispatch<ActionLandingPage>;
}

const positions: string[] = [
  'Sócio | CEO | Proprietário',
  'Diretoria | Superintendência',
  'Gerência',
  'Coordenadoria | Supervisão',
  'Analista | Assistente',
  'Estagiário | Estudante',
  'Presidente | Vice-Presidente',
  'Outros',
];

const segment: string[] = [
  'Rede Hospitalar - Corporativo',
  'Hospital Privado',
  'Hospital Público',
  'Clínica Médica',
  'Clínica de Diagnóstico por Imagem',
  'Laboratório de Análises Clínicas',
  'Empresa de Arquitetura | Projetos',
  'Empresa de Engenharia | Manutenção',
  'Construtora | Empreiteira',
  'Outros',
];

const momentEnterprise: string[] = [
  'Elaboração de projetos',
  'Visita técnica para avaliação diagnóstica',
  'Dimensionamento e especificação técnica dos equipamentos para aquisição',
  'Análise técnica financeira comparativa dos equipamentos',
  'Comissionamento das instalações',
  'Outro momento',
];

const FormCard = ({ dispatch, state }: FormCardProps) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');

  const { mutate } = useCheckFirstSubmitByCNPJ();
  const router = useRouter();

  // Função para atualizar o token do ReCaptcha
  const onVerifyRecaptcha = useCallback((token: string) => {
    if (recaptchaToken !== token) {
      setRecaptchaToken(token);
    }
  }, []);

  // Função para lidar com o envio do formulário
  const HandleSubmit = async ({ state, dispatch }: HandleSubmit) => {
    dispatch({ type: 'SET_ERROR', payload: { validate: true } });

    if (validateLandingPageState(state)) {
      localStorage.setItem('dataLocal', JSON.stringify(state.dataCompany));

      mutate({
        cnpj: clearCNPJ(state.dataCompany.cnpj),
        token: recaptchaToken
      }, {
        onError: () => {
          console.log('Cliente já cadastrado'); // TODO: Adicionar lógica de erro adequada
        },
        onSuccess: () => {
          router.push('/calculator');
        },
      });
    } else {
      console.log('Por favor, preencha todos os campos obrigatórios.'); // TODO: Adicionar lógica de erro adequada
      return;
    }
  };

  return (
    <Box className={Style.formCard}>
      <Typography>
        Descubra a eficiência em apenas 2 minutos! Simples, rápido e
        personalizado!
      </Typography>

      <Typography>
        Preencha nosso formulário e receba instantaneamente as melhores soluções
        em equipamentos para o seu CME.
      </Typography>
      <Box component="form" className={Style.formCard__form}>
        <TextField
          id="name"
          label="Nome"
          variant="standard"
          type="text"
          required
          value={state.dataCompany.name}
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { name: e.target.value } })
          }
          error={state.errors.validate && !state.dataCompany.name.length}
          helperText={
            state.errors.validate && !state.dataCompany.name.length
              ? 'Campo Obrigatório'
              : ''
          }
        />
        <TextField
          id="email"
          label="E-mail"
          variant="standard"
          type="email"
          required
          value={state.dataCompany.email}
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { email: e.target.value } })
          }
          error={state.errors.validate && !state.dataCompany.email.length}
          helperText={
            state.errors.validate && !state.dataCompany.email.length
              ? 'Campo Obrigatório'
              : ''
          }
        />
        <InputMask
          mask={'99 999999999'}
          maskChar={null}
          maskPlaceholder={''}
          value={state.dataCompany.tel}
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { tel: e.target.value } })
          }
        >
          <TextField
            id="tel"
            label="Contato"
            variant="standard"
            type="tel"
            required
            error={state.errors.validate && !state.dataCompany.tel.length}
            helperText={
              state.errors.validate && !state.dataCompany.tel.length
                ? 'Campo Obrigatório'
                : ''
            }
          />
        </InputMask>
        <InputMask
          mask="99999-999"
          maskChar={null}
          maskPlaceholder={''}
          value={state.dataCompany.cep}
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { cep: e.target.value } })
          }
        >
          <TextField
            id="cep"
            label="CEP"
            variant="standard"
            type="text"
            required
            error={state.errors.validate && !state.dataCompany.cep.length}
            helperText={
              state.errors.validate && !state.dataCompany.cep.length
                ? 'Campo Obrigatório'
                : ''
            }
          />
        </InputMask>
        <TextField
          id="institutionName"
          label="Nome da Instituiçao"
          variant="standard"
          type="text"
          required
          value={state.dataCompany.institutionName}
          onChange={e =>
            dispatch({
              type: 'SET_FORM',
              payload: { institutionName: e.target.value },
            })
          }
          error={
            state.errors.validate && !state.dataCompany.institutionName.length
          }
          helperText={
            state.errors.validate && !state.dataCompany.institutionName.length
              ? 'Campo Obrigatório'
              : ''
          }
        />
        <InputMask
          mask={'99.999.999/9999-99'}
          maskChar={null}
          maskPlaceholder={''}
          value={state.dataCompany.cnpj}
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { cnpj: e.target.value } })
          }
        >
          <TextField
            id="cnpj"
            label="CNPJ"
            variant="standard"
            type="CNPJ"
            required
            error={state.errors.validate && !state.dataCompany.cnpj.length}
            helperText={
              state.errors.validate && !state.dataCompany.cnpj.length
                ? 'Campo Obrigatório'
                : ''
            }
          />
        </InputMask>
        <Autocomplete
          disablePortal
          id="position"
          options={positions}
          value={state.dataCompany.position}
          renderInput={params => (
            <TextField
              {...params}
              error={
                state.errors.validate && !state.dataCompany.position.length
              }
              helperText={
                state.errors.validate && !state.dataCompany.position.length
                  ? 'Campo Obrigatório'
                  : ''
              }
              variant="standard"
              label="Cargo"
              required
            />
          )}
          onChange={(e, value) =>
            value
              ? dispatch({ type: 'SET_FORM', payload: { position: value } })
              : null
          }
        />
        <Autocomplete
          disablePortal
          id="segment"
          options={segment}
          value={state.dataCompany.segment}
          renderInput={params => (
            <TextField
              {...params}
              error={state.errors.validate && !state.dataCompany.segment.length}
              helperText={
                state.errors.validate && !state.dataCompany.segment.length
                  ? 'Campo Obrigatório'
                  : ''
              }
              variant="standard"
              label="Segmento da Empresa"
              required
            />
          )}
          onChange={(e, value) =>
            value
              ? dispatch({ type: 'SET_FORM', payload: { segment: value } })
              : null
          }
        />
        <Autocomplete
          disablePortal
          id="momentEnterprise"
          options={momentEnterprise}
          value={state.dataCompany.momentEnterprise}
          renderInput={params => (
            <TextField
              {...params}
              error={
                state.errors.validate &&
                !state.dataCompany.momentEnterprise.length
              }
              helperText={
                state.errors.validate &&
                  !state.dataCompany.momentEnterprise.length
                  ? 'Campo Obrigatório'
                  : ''
              }
              variant="standard"
              label="Momento Atual do Empreendimento"
              required
            />
          )}
          onChange={(e, value) =>
            value
              ? dispatch({
                type: 'SET_FORM',
                payload: { momentEnterprise: value },
              })
              : null
          }
        />
        <FormControl>
          <FormLabel id="statusClinicalEng">
            Situação da Engenharia Clínica
          </FormLabel>
          <RadioGroup
            aria-labelledby="statusClinicalEng"
            defaultValue="Própria"
            name="StatusClinicalEng"
            value={state.dataCompany.statusClinicalEng}
            onChange={e =>
              dispatch({
                type: 'SET_FORM',
                payload: { statusClinicalEng: e.target.value },
              })
            }
          >
            <FormControlLabel
              value="Própria"
              control={<Radio />}
              label="Própria"
            />
            <FormControlLabel
              value="Terceirizada"
              control={<Radio />}
              label="Terceirizada"
            />
            <FormControlLabel
              value="Não possui"
              control={<Radio />}
              label="Não possui"
            />
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel id="momentCME">Situação do CME</FormLabel>
          <RadioGroup
            aria-labelledby="momentCME"
            defaultValue="Implementação"
            name="momentCME"
            value={state.dataCompany.momentCME}
            onChange={e =>
              dispatch({
                type: 'SET_FORM',
                payload: { momentCME: e.target.value },
              })
            }
          >
            <FormControlLabel
              value="Implementação"
              control={<Radio />}
              label="Implementação"
            />
            <FormControlLabel
              value="Substituição"
              control={<Radio />}
              label="Substituição"
            />
            <FormControlLabel
              value="Ampliação"
              control={<Radio />}
              label="Ampliação"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Button
        onClick={() => HandleSubmit({ state, dispatch })}
        variant="contained"
        size="large"
        endIcon={<KeyboardArrowRightRoundedIcon />}
        className={Style.formCard__button}
      >
        Teste Grátis
      </Button>
      <GoogleReCaptcha
        key={process.env.RECAPTCHA_KEY}
        onVerify={onVerifyRecaptcha}
      />
    </Box>
  );
};

export default FormCard;

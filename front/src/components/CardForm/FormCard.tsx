'use client';
import React from 'react';
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

const HandleSubmit = ({state, dispatch}: HandleSubmit) => {
  console.log(state, dispatch)
};

const FormCard = ({ dispatch, state }: FormCardProps) => {
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
      <Box
        component="form"
        className={Style.formCard__form}
      >
        <TextField
          id="name"
          label="Nome"
          variant="standard"
          type="text"
          required
          value={state.name}
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { name: e.target.value } })
          }
        />
        <TextField
          id="email"
          label="E-mail"
          variant="standard"
          type="email"
          required
          value={state.email}
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { email: e.target.value } })
          }
        />
        <InputMask
          mask={'99 999999999'}
          maskChar={null}
          maskPlaceholder={''}
          value={state.tel}
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
          />
        </InputMask>
        <InputMask
          mask="99999-999"
          maskChar={null}
          maskPlaceholder={''}
          value={state.cep}
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
          />
        </InputMask>
        <TextField
          id="institutionName"
          label="Nome da Instituiçao"
          variant="standard"
          type="text"
          required
          value={state.institutionName}
          onChange={e =>
            dispatch({
              type: 'SET_FORM',
              payload: { institutionName: e.target.value },
            })
          }
        />
        <InputMask
          mask={'99.999.999/9999-99'}
          maskChar={null}
          maskPlaceholder={''}
          value={state.cnpj}
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
          />
        </InputMask>
        <Autocomplete
          disablePortal
          id="position"
          options={positions}
          value={state.position}
          renderInput={params => (
            <TextField {...params} variant="standard" label="Cargo" required />
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
          value={state.segment}
          renderInput={params => (
            <TextField
              {...params}
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
          value={state.position}
          renderInput={params => (
            <TextField
              {...params}
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
            value={state.statusClinicalEng}
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
            value={state.momentCME}
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
        onClick={() => HandleSubmit({state, dispatch})}
        variant="contained"
        size="large"
        endIcon={<KeyboardArrowRightRoundedIcon />}
        className={Style.formCard__button}
      >
        Teste Grátis
      </Button>
    </Box>
  );
};

export default FormCard;

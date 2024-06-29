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

interface FormCardProps {
  dispatch: React.Dispatch<Action>;
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

const HandleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
};

const FormCard = ({ dispatch }: FormCardProps) => {
  return (
    <Box className={Style.formCard}>
      <Typography>
        Descubra a eficiência em apenas 2 minutos! Preencha nosso formulário
        rápido e receba instantaneamente as melhores soluções em equipamentos
        para o seu CME. Simples, rápido e personalizado
      </Typography>
      <Box
        component="form"
        onSubmit={HandleSubmit}
        className={Style.formCard__form}
      >
        <TextField
          id="name"
          label="Nome"
          variant="standard"
          type="text"
          required
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
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { email: e.target.value } })
          }
        />
        <TextField
          id="tel"
          label="Contato"
          variant="standard"
          type="tel"
          required
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { tel: e.target.value } })
          }
        />
        <TextField
          id="cep"
          label="CEP"
          variant="standard"
          type="text"
          required
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { cep: e.target.value } })
          }
        />
        <TextField
          id="institutionName"
          label="Nome da Instituiçao"
          variant="standard"
          type="text"
          required
          onChange={e =>
            dispatch({
              type: 'SET_FORM',
              payload: { institutionName: e.target.value },
            })
          }
        />
        <TextField
          id="cnpj"
          label="CNPJ"
          variant="standard"
          type="CNPJ"
          required
          onChange={e =>
            dispatch({ type: 'SET_FORM', payload: { cnpj: e.target.value } })
          }
        />
        <Autocomplete
          disablePortal
          id="position"
          options={positions}
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
          <FormLabel id="StatusClinicalEng">
            Situação da Engenharia Clínica
          </FormLabel>
          <RadioGroup
            aria-labelledby="StatusClinicalEng"
            defaultValue="Própria"
            name="StatusClinicalEng"
            onChange={e =>
              dispatch({ type: 'SET_FORM', payload: { statusClinicalEng: e.target.value } })
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
            onChange={e =>
              dispatch({ type: 'SET_FORM', payload: { momentCME: e.target.value } })
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
        type="submit"
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

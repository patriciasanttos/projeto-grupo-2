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

const FormCard = () => {
  return (
    <Box className={Style.formCard}>
      <Typography>
        Descubra a eficiência em apenas 2 minutos! Preencha nosso formulário
        rápido e receba instantaneamente as melhores soluções em equipamentos
        para o seu CME. Simples, rápido e personalizado
      </Typography>
      <Box component="form" className={Style.formCard__form}>
        <TextField id="name" label="Nome" variant="standard" type="text" />
        <TextField id="email" label="E-mail" variant="standard" type="email" />
        <TextField id="tel" label="Contato" variant="standard" type="tel" />
        <TextField id="cep" label="CEP" variant="standard" type="text" />
        <TextField
          id="institutionName"
          label="Nome da Instituiçao"
          variant="standard"
          type="text"
        />
        <TextField id="cnpj" label="CNPJ" variant="standard" type="CNPJ" />
        <Autocomplete
          disablePortal
          id="position"
          options={positions}
          renderInput={params => (
            <TextField {...params} variant="standard" label="Cargo" />
          )}
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
            />
          )}
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
            />
          )}
        />
        <FormControl>
          <FormLabel id="StatusClinicalEng">
            Situação da Engenharia Clínica
          </FormLabel>
          <RadioGroup
            aria-labelledby="StatusClinicalEng"
            defaultValue="Própria"
            name="StatusClinicalEng"
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

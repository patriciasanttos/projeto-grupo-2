import React from 'react';
import Style from './index.module.scss';
import { Box, Button, Typography } from '@mui/material';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

interface PropsInitialCardForm {
  setCard: React.Dispatch<React.SetStateAction<string>>;
}

const InitialCardForm = ({ setCard }: PropsInitialCardForm) => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <Typography variant="subtitle1" fontWeight="600" textAlign="center">
          Você pode testar a ferramenta gratuitamente uma vez.
        </Typography>
        <Typography variant="subtitle1" fontWeight="600" textAlign="center">
          Após isso, caso queira obter análises mais detalhadas, um de nossos
          consultores entrará em contato via e-mail.
        </Typography>
      </Box>
      <Button
        variant="contained"
        size="large"
        endIcon={<KeyboardArrowRightRoundedIcon />}
        className={Style.initialCardForm__button}
        onClick={() => setCard('form')}
      >
        Teste Grátis
      </Button>
      <Typography variant="h6" fontWeight="600" textAlign="center">
        Descubra a revolução na Gestão de Materiais Hospitalares com Nossa
        Ferramenta de Cálculo de CME
      </Typography>
    </>
  );
};

export default InitialCardForm;

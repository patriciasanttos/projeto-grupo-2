import React, { useEffect, useReducer } from 'react';
import Style from './index.module.scss';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from '@mui/material';
import { useConfirmCompanyContact } from '@/hooks/useCompany';
import axios from 'axios';
import { ActionModalResult, StateModalResult } from '@/types';

interface ModalResultProps {
  cnpj: string;
}

const Reducer = (state: StateModalResult, action: ActionModalResult) => {
  switch (action.type) {
    case 'SET_OPEN':
      return { ...state, open: action.payload };
    case 'SET_SNACKBAR':
      return { ...state, snackbar: { ...state.snackbar, ...action.payload } };
    default:
      return state;
  }
};

const ModalResult = ({ cnpj }: ModalResultProps) => {
  const { mutate } = useConfirmCompanyContact();

  const InitialArgs: StateModalResult = {
    open: false,
    snackbar: {
      snackbarType: 'info',
      SnackbarText: '',
      SnackbarOpen: false,
    },
  };

  const [state, dispatch] = useReducer(Reducer, InitialArgs);

  const handleClickOpen = () => {
    dispatch({ type: 'SET_OPEN', payload: true });
  };

  const handleClose = () => {
    dispatch({ type: 'SET_OPEN', payload: false });
  };

  useEffect(() => {
    setTimeout(() => handleClickOpen(), 5000);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formJson: Record<string, unknown> = Object.fromEntries(
      formData.entries(),
    );
    const supportFeedback = formJson.supportFeedback as string;

    const data = {
      cnpj: cnpj,
      contactConfirm: true,
      rate: supportFeedback,
    };

    mutate(data, {
      onSuccess: () => {
        dispatch({
          type: 'SET_SNACKBAR',
          payload: {
            SnackbarText: 'Cadastro Realizado com Sucesso!!',
            SnackbarOpen: true,
            snackbarType: 'success',
          },
        });
      },
      onError: error => {
        if (axios.isAxiosError(error)) {
          const errorMsg: string =
            error.response?.data.error || 'Erro desconhecido';
          dispatch({
            type: 'SET_SNACKBAR',
            payload: {
              SnackbarText: errorMsg,
              SnackbarOpen: true,
              snackbarType: 'error',
            },
          });
        }
      },
    });

    handleClose();
  };

  return (
    <>
      <Dialog
        className={Style.modal}
        open={state.open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) =>
            handleSubmit(event),
        }}
      >
        <DialogTitle>Quer um atendimento mais completo?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Estamos aqui para ajudar! Deixe-nos saber do que você sente mais
            falta no suporte da engenharia clínica e um de nossos especialistas
            entrará em contato com você para oferecer um serviço mais completo e
            personalizado.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="supportFeedback"
            name="supportFeedback"
            type="text"
            fullWidth
            variant="standard"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit">Enviar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={state.snackbar.SnackbarOpen} autoHideDuration={5000}>
        <Alert
          onClose={() => {
            dispatch({
              type: 'SET_SNACKBAR',
              payload: {
                SnackbarText: '',
                SnackbarOpen: false,
                snackbarType: 'info',
              },
            });
          }}
          severity={state.snackbar.snackbarType}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {state.snackbar.SnackbarText}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ModalResult;

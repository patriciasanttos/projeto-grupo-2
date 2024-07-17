import React, { useEffect } from 'react';
import Style from './index.module.scss';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { useConfirmCompanyContact } from '@/hooks/useCompany';
import axios from 'axios';
import { clearCNPJ } from '@/utils/clearCNPJ';

interface ModalResultProps {
  cnpj: string;
}

const ModalResult = ({ cnpj }: ModalResultProps) => {
  const [open, setOpen] = React.useState(false);
  const { mutate } = useConfirmCompanyContact();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        console.log('foii');
      },
      onError: error => {
        if (axios.isAxiosError(error)) {
          const errorMsg = error.response?.data.error || 'Erro desconhecido';
					console.log(error)
        }
      },
    });

    handleClose();
  };

  return (
    <Dialog
      className={Style.modal}
      open={open}
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
          Estamos aqui para ajudar! Deixe-nos saber do que você sente mais falta
          no suporte da engenharia clínica e um de nossos especialistas entrará
          em contato com você para oferecer um serviço mais completo e
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
  );
};

export default ModalResult;

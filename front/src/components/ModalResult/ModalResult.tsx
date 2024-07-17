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

const ModalResult = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => handleClickOpen(), 5000);
  }, []);

  return (
    <Dialog
			className={Style.modal}
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const formJson: Record<string, unknown> = Object.fromEntries(
            formData.entries(),
          );
          const supportFeedback = formJson.supportFeedback as string;

          console.log(supportFeedback);

          handleClose();
        },
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

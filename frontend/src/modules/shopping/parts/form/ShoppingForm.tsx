import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
} from "@mui/material";
import { InputText, TextArea } from "./inputs";
import { Formik } from "formik";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    height: "580px",
  },

  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle
      sx={{
        m: 0,
        p: 2,
        backgroundColor: "#FAFAFA",
        fontFamily: "Dosis",
        fontWeight: "600",
        color: "#5C6269",
      }}
      {...other}
    >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const ShoppingForm = () => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          SHOPPING LIST
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Formik
            initialValues={{
              name: " test",
              description: "test222",
              qty: 2,
            }}
            onSubmit={() => {}}
            enableReinitialize
          >
            {({ isSubmitting, handleSubmit, resetForm, isValid }) => {
              return (
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ paddingTop: "28px", paddingBottom: "13px" }}>
                    <Typography variant="body2"> Edit an Item </Typography>
                    <Typography> Edit your item below </Typography>
                  </Box>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={16}>
                      <InputText name="name" label="" />
                    </Grid>
                    <Grid item xs={16}>
                      <TextArea name="description" label="" />
                    </Grid>
                    <Grid item xs={16}>
                      <InputText name="qty" label="" />
                    </Grid>
                    <Grid item xs={16}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox name="purchased" />}
                          label="Purchased"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </Box>
              );
            }}
          </Formik>
        </DialogContent>
        <DialogActions
          sx={{
            borderBottom: "5px solid #4D81B7",
            paddingBottom: "21px",
          }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Save Item
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
export default ShoppingForm;

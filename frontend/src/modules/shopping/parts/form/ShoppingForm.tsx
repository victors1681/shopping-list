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
} from "@mui/material";
import { InputText, TextArea } from "./inputs";
import { Formik } from "formik";
import * as Yup from "yup";
import ShoppingViewModel from "../../ViewModel";
import { observer } from "mobx-react";

const searchSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required().max(100),
  qty: Yup.number().required(),
});

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

interface ShoppingFormProps {
  viewModel: ShoppingViewModel;
}

export const ShoppingForm =  observer(({ viewModel} : ShoppingFormProps) => {
  const { isNewEditOpen, handleOpenNewEdit, initialFormValues, handleFormSubmission, isNew } = viewModel;
    
  return (
    <div>
      <Formik
        initialValues={{
          ...initialFormValues
        }}
        validationSchema={searchSchema}
        onSubmit={(values)=> handleFormSubmission(values as any)}
        enableReinitialize
      >
        {({ isSubmitting, handleSubmit, isValid, values, setFieldValue }) => {
          return (
            <BootstrapDialog
              onClose={() => handleOpenNewEdit(true)}
              aria-labelledby="customized-dialog-title"
              open={isNewEditOpen}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={() => handleOpenNewEdit(true)}
              >
                SHOPPING LIST
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ paddingTop: "28px", paddingBottom: "13px" }}>
                    <Typography variant="body2"> {isNew ? "New Item" : "Edit an Item"} </Typography>
                    <Typography> {isNew ? "Create new item" : " Edit your item below"} </Typography>
                  </Box>
                  <Grid container spacing={2} columns={16}>
                    <Grid item xs={16}>
                      <InputText name="name" label=""  placeholder={"Buy tomatoes"} />
                    </Grid>
                    <Grid item xs={16}>
                      <TextArea name="description" label="" />
                    </Grid>
                    <Grid item xs={16}>
                      <InputText name="qty" label="" placeholder="Quantity" />
                    </Grid>
                    <Grid item xs={16}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox name="purchased" checked={values.purchased}/>}
                          label="Purchased"
                          onChange={() => setFieldValue("purchased", !values.purchased)}
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </Box>
              </DialogContent>
              <DialogActions
                sx={{
                  borderBottom: "5px solid #4D81B7",
                  paddingBottom: "21px",
                }}
              >
                <Button
                  onClick={() => handleOpenNewEdit(true)}
                  disabled={isSubmitting || !isValid}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  autoFocus
                  onClick={() => {handleSubmit()}}
                  disabled={isSubmitting || !isValid}
                >
                  Save Item
                </Button>
              </DialogActions>
            </BootstrapDialog>
          );
        }}
      </Formik>
    </div>
  );
});
export default ShoppingForm;

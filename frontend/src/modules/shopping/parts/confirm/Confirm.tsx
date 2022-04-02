import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ShoppingViewModel from "../../ViewModel";
import { observer } from "mobx-react";


interface ConfirmProps {
  viewModel: ShoppingViewModel
}
export const Confirm = observer(({ viewModel }: ConfirmProps) => {
  
  const { isConfirmOpen, closeDeleteConfirmation, deleteItem } = viewModel;
  
  return (
    <div>
      <Dialog
        open={isConfirmOpen}
        onClose={closeDeleteConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Item?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item? This can not be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            padding: "30px",
          }}
        >
          <Button onClick={closeDeleteConfirmation}>Cancel</Button>
          <Button onClick={deleteItem} autoFocus variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
});
export default Confirm;

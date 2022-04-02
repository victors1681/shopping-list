import { Button, Stack, styled, Typography } from "@mui/material";
import { observer } from "mobx-react";
import React from "react";
import ShoppingViewModel from "../../ViewModel";

const Wrapper = styled("div")`
  height: 290px;
  width: 614px;
  position: absolute;
  left: 333px;
  top: 174px;
  display: flex;
  justify-content: center;
  border: 1px solid #c6c6c6;
  box-sizing: border-box;
  border-radius: 5px;
`;

interface ShoppingFormProps {
  viewModel: ShoppingViewModel;
}

export const Empty: React.FC<ShoppingFormProps> =  observer(({
  viewModel,
}): JSX.Element => {
  const { handleOpenNewEdit} = viewModel;
  return (
    <Wrapper>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography variant="body1">Your shopping list is empty :(</Typography>
        <Button variant="contained" onClick={() => handleOpenNewEdit()}>Add your first item</Button>
      </Stack>
    </Wrapper>
  );
});

export default Empty;

import {
  Button,
  Checkbox,
  Stack,
  styled,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableMui from "@mui/material/Table";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import IconButton from "@mui/material/IconButton";
import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Confirm } from "../confirm";
import ShoppingViewModel from "../../ViewModel";
import { observer } from "mobx-react";
const Wrapper = styled("div")`
  width: 100%;
`;

const CustomTableBody = styled(TableBody)`
  display: grid;
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  paddingLeft: "10.5px",
  paddingRight: "10.5px",
}));

const EditIcon = styled(CreateOutlinedIcon)(({ theme }) => ({
  color: "#555F7C",
}));
const DeleteIcon = styled(DeleteOutlinedIcon)(({ theme }) => ({
  color: "#555F7C",
}));

const StyledTableCellText = styled(TableCell)(({ theme }) => ({
  width: "100%",
}));
const StyledTableCellIcons = styled(TableCell)(({ theme }) => ({
  width: "100%",
}));

interface StyleProps {
  isPurchased: boolean;
}

const CheckboxCustom = styled(Checkbox)(({ checked }) => ({
  svg: {
    color: checked ? "#4D81B7" : "#C6C6C6",
  },
}));

const NameText = styled(Typography)(({ isPurchased }: StyleProps) => ({
  width: "100%",
  textDecorationLine: isPurchased ? "line-through" : "none",
  color: isPurchased ? "#4D81B7" : "#000000",
}));
const DescriptionText = styled(Typography)(({ isPurchased }: StyleProps) => ({
  width: "100%",
  textDecorationLine: isPurchased ? "line-through" : "none",
}));

const StyledTableRow = styled(TableRow)(({ isPurchased }: StyleProps) => ({
  background: isPurchased ? "rgba(213, 223, 233, 0.17)" : "#FFFFFF",
  border: isPurchased ? "none" : "0.5px solid #D5DFE9",
  boxSizing: "border-box",
  borderRadius: "4px",
  height: "87px",
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
}));


interface ShoppingFormProps {
  viewModel: ShoppingViewModel;
}

interface NavTableProps {
  handleAddItem: (close?:boolean, shoppingId?: number) =>void;
}
const NavTable: React.FC<NavTableProps> = ({ handleAddItem }) => {
  return (
    <Stack
      sx={{ paddingBottom: "11px", paddingTop: "47px" }}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="h5">Your Items</Typography>
      <Button variant="contained" onClick={ () => handleAddItem(false)}>
        Add Item
      </Button>
    </Stack>
  );
};

export const Table: React.FC<ShoppingFormProps> = observer( ({
  viewModel,
}): JSX.Element => {
  const { list, handleOpenNewEdit, confirmDelete, checkSingleRow } = viewModel;
  return (
    <Wrapper>
      <Confirm viewModel={viewModel} />
      <NavTable handleAddItem={handleOpenNewEdit} />
      <TableMui
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        aria-label="customized table"
      >
        <CustomTableBody>
          {list.map((row) => (
            <StyledTableRow key={row.id} isPurchased={row.purchased}>
              <StyledTableCell align="right">
                <CheckboxCustom checked={row.purchased} onChange={() => {checkSingleRow(row.id, !row.purchased)}} />
              </StyledTableCell>
              <StyledTableCellText component="th" scope="row">
                <NameText variant="body2" isPurchased={row.purchased}>
                  {row.name}
                </NameText>
                <DescriptionText
                  variant="subtitle1"
                  isPurchased={row.purchased}
                >
                  {row.description}
                </DescriptionText>
              </StyledTableCellText>

              <StyledTableCellIcons align="right">
                <IconButton aria-label="edit" onClick={()=> handleOpenNewEdit(false, row.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={ () => confirmDelete(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCellIcons>
            </StyledTableRow>
          ))}
        </CustomTableBody>
      </TableMui>
    </Wrapper>
  );
});

export default Table;

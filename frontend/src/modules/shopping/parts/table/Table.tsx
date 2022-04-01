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
import {Confirm } from "../confirm";
import ShoppingViewModel from "../../ViewModel";
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

function createData(name: string, description: string, isPurchased: boolean) {
  return { name, description, isPurchased };
}

const rows = [
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", true),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
  createData("Frozen yoghurt", " Test Description", false),
];

interface ShoppingFormProps {
  viewModel: ShoppingViewModel;
}

interface NavTableProps {
  handleAddItem?: () => {};
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
      <Button variant="contained" onClick={handleAddItem}>
        Add Item
      </Button>
    </Stack>
  );
};

export const Table: React.FC<ShoppingFormProps> = ({
  viewModel,
}): JSX.Element => {
  return (
    <Wrapper>
      <Confirm/>
      <NavTable />
      <TableMui
        sx={{
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        aria-label="customized table"
      >
        <CustomTableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} isPurchased={row.isPurchased}>
              <StyledTableCell align="right">
                <CheckboxCustom checked={row.isPurchased} />
              </StyledTableCell>
              <StyledTableCellText component="th" scope="row">
                <NameText variant="body2" isPurchased={row.isPurchased}>
                  {row.name}
                </NameText>
                <DescriptionText
                  variant="subtitle1"
                  isPurchased={row.isPurchased}
                >
                  {row.description}
                </DescriptionText>
              </StyledTableCellText>

              <StyledTableCellIcons align="right">
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </StyledTableCellIcons>
            </StyledTableRow>
          ))}
        </CustomTableBody>
      </TableMui>
    </Wrapper>
  );
};

export default Table;

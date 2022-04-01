import {  Checkbox, styled, TableBody, TableRow, Typography } from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableMui from '@mui/material/Table';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import IconButton from '@mui/material/IconButton';
import React from "react";
import ShoppingViewModel from "../../ViewModel";
const Wrapper = styled("div")`
    width: 100%; 
`;

const CustomTableBody = styled(TableBody)`
  display: grid ;
`

const StyledTableCell = styled(TableCell)(({ theme }) => ({
paddingLeft: '10.5px',
paddingRight: '10.5px'
}));
const StyledTableCellText = styled(TableCell)(({ theme }) => ({
  width: '100%'
}));
const StyledTableCellIcons = styled(TableCell)(({ theme }) => ({
  width: '100%'
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  background: "#FFFFFF", 
  border: '0.5px solid #D5DFE9',
  boxSizing: 'border-box',
  borderRadius: '4px',
  height: '87px',
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'center'
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


interface ShoppingFormProps {
  viewModel: ShoppingViewModel;
}

export const Table: React.FC<ShoppingFormProps> = ({
  viewModel,
}): JSX.Element => {
  return (
    <Wrapper> 
      <TableMui sx={{ [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    } }} aria-label="customized table">
      <CustomTableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
             <StyledTableCell align="right"> <Checkbox defaultChecked /></StyledTableCell>
              <StyledTableCellText component="th" scope="row">
                
                <Typography variant="body2">{row.name}</Typography>
                <Typography variant="subtitle1">{row.name}</Typography>
              </StyledTableCellText>
              
              <StyledTableCellIcons align="right">
              <IconButton aria-label="delete">
        <CreateOutlinedIcon />
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

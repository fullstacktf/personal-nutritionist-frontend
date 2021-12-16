import { FC, useState, ChangeEvent } from "react";

import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TablePagination } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  titles: Array<any>;
  data: Array<any>;
}

interface Column {
  id: "name" | "specialties" | "contact" | "calendar";
  label: string;
  minWidth?: number;
}

interface Data {
  name: string;
  specialties: Array<string>;
  contact: string;
  calendar: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const StickyHeadTable: FC<Props> = ({ titles, data }) => {
  const columns: readonly Column[] = titles.map((title) => {
    return { id: title.id, label: title.label, minWidth: title.minWidth }; 
  });

  const rows: Data[] = data.map((item) => {
    return { name: item.name, specialties: item.specialties, contact: item.email, calendar: item.username };
  });
  console.log(data);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                    {columns.map((column) => (
                      <StyledTableCell key={column.id}>
                        {row[column.id]}
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

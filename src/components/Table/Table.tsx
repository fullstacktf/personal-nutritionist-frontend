import { FC, useState, ChangeEvent } from "react";

import { Avatar, IconButton, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TablePagination } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InsertInvitation } from "@mui/icons-material";

interface Props {
  name: string;
  titles: Array<any>;
  data: Array<any>;
}

interface Column {
  id: "name" | "specialties" | "contact" | "calendar";
  label: string;
  minWidth?: number;
  align: "left";
}

interface Data {
  name: any;
  specialties?: Array<string>;
  typeDiet?: string;
  intolerances?: Array<string>;
  contact: JSX.Element;
  calendar: JSX.Element;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    border: 0
  },
  [`&.${tableCellClasses.body}`]: {
    border: 0,
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "& td, & th": {
    border: 0,
  }
}));

export const StickyHeadTable: FC<Props> = ({ name, titles, data }) => {
  const columns: Column[] = titles.map((title) => {
    return { id: title.id, label: title.label, minWidth: title.minWidth, align: title.align }; 
  });

  const rows: Data[] = data.map((item) => {
    const specialties = item.specialties != null ? item.specialties.join(", ") : item.specialties;
    const intolerances = item.intolerances != null ? item.intolerances.join(", ") : item.intolerances;

    return {
      name: 
        <div style={{display: "flex", alignItems: "center" }}>
          <Avatar style={{ marginRight: "10px" }} variant="rounded">{item.name.charAt(0).toUpperCase()}</Avatar>
          {item.name}
        </div>,
      specialties: specialties,
      typeDiet: item.typeDiet,
      intolerances: intolerances,
      contact:
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div style={{ background: "#ffa726", borderRadius: "5px" }}>{item.email}</div>
          <div style={{ background: "#1de9b6", borderRadius: "5px" }}>{item.phone}</div>
        </div>,
      calendar: 
        <IconButton aria-label="fingerprint" color="secondary">
          <InsertInvitation />
        </IconButton>
    };
  });

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
    <StyledPaper>
      <h1>{name}</h1>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
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
                      <StyledTableCell key={column.id} align={column.align}>
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
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </StyledPaper>
  );
};

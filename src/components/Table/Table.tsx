import { CSSProperties, FC, useState, ChangeEvent } from "react";

import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TablePagination, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props {
  name: string;
  titles: Array<any>;
  data: Array<any>;
  create?: JSX.Element;
}

interface Column {
  id: "name" | "actions" | "specialties" | "email" | "phone" | "intolerances" | "typeDiet" | "typeMeal" | "alergens";
  label: string;
  minWidth?: number;
  align: "left";
}

interface Data {
  name: any;
  actions: JSX.Element;
  specialties?: Array<string>;
  email?: JSX.Element;
  phone?: JSX.Element;
  intolerances?: Array<string>;
  typeDiet?: string;
  typeMeal?: string;
  alergens?: string;
}

const TitleContainerStyle: CSSProperties = {
  padding: "30px 0 30px 30px"
};

const SeparatorStyle: CSSProperties = {
  borderBottom: "3px solid #CCC4C5",
  width:"100%",
  height:"1%"
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column"
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

export const StickyHeadTable: FC<Props> = ({ name, titles, data, create }) => {
  const columns: Column[] = titles.map((title) => {
    return { id: title.id, label: title.label, minWidth: title.minWidth, align: title.align }; 
  });
  let cont = 0;

  const rows: Data[] = data.map((item) => {
    let element: any = {};
    columns.forEach((title, index) => {
      const id = title.id;
      element[id] = item[index];
    });
    return (element);
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
      <div style={TitleContainerStyle}>
        <Typography variant="h4">{name}</Typography>
      </div>
      <div style={SeparatorStyle}></div>
      <TableContainer sx={{ minHeight: "350px" }}>
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
                cont += 1;
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={cont}>
                    {columns.map((column) => {
                      cont += 1;
                      return (
                        <StyledTableCell align={column.align} key={cont}>
                          {row[column.id]}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })
            }
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
        style={{ minHeight: "55px" }}
      />
    </StyledPaper>
  );
};

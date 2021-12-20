import { CSSProperties, FC, useState, ChangeEvent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Avatar, IconButton, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TablePagination, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InsertInvitation, AssignmentInd } from "@mui/icons-material";

interface Props {
  name: string;
  titles: Array<any>;
  data: Array<any>;
}

interface Column {
  id: "name" | "specialties" | "typeDiet" | "intolerances" | "email" | "phone" | "actions";
  label: string;
  minWidth?: number;
  align: "left";
}

interface Data {
  name: any;
  specialties?: Array<string>;
  typeDiet?: string;
  intolerances?: Array<string>;
  email: JSX.Element;
  phone: JSX.Element;
  actions: JSX.Element;
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

export const StickyHeadTable: FC<Props> = ({ name, titles, data }) => {
  const columns: Column[] = titles.map((title) => {
    return { id: title.id, label: title.label, minWidth: title.minWidth, align: title.align }; 
  });

  const rows: Data[] = data.map((user) => {
    const specialties = user.specialties != null ? user.specialties.join(", ") : user.specialties;
    const intolerances = user.intolerances != null ? user.intolerances.join(", ") : user.intolerances;
    const phone = user.phone === 0 ? "-" : user.phone;

    return {
      name: 
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar style={{ marginRight: "10px" }} variant="rounded" src={user.photo}>{user.name.charAt(0).toUpperCase()}</Avatar>
          {user.name}
        </div>,
      specialties: specialties,
      typeDiet: user.typeDiet,
      intolerances: intolerances,
      email:
        <div style={{ background: "#ffa726", borderRadius: "5px", padding: "5px 0 5px 0" }}>
          {user.email}
        </div>,
      phone:
        <div style={{ background: "#1de9b6", borderRadius: "5px", padding: "5px 0 5px 0" }}>
          {phone}
        </div>,
      actions:
        <div>
          <IconButton 
            aria-label="calendar" 
            color="secondary"
            onClick={() => handleUser(user._id)}
            component={Link} 
            to={`/calendar/event/create/${user._id}`}
          >
            <InsertInvitation />
          </IconButton>
          <IconButton aria-label="profile" color="secondary" onClick={() => handleUser(user._id)}>
            <AssignmentInd />
          </IconButton>
        </div>
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

  const handleUser = (id: any) => {
    axios.get(`https://api.nutriguide.es/users/${id}`)
      .then((res) => { console.log(res.data); });
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
        style={{ minHeight: "55px" }}
      />
    </StyledPaper>
  );
};

import React, { useState, useEffect } from "react";
import { useStoreState } from "easy-peasy";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  TablePagination,
} from "@material-ui/core";

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#eeeeee",
    },
    "&:nth-of-type(even)": {
      backgroundColor: "white",
    },
  },
}))(TableRow);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#191970",
    color: theme.palette.common.white,
    padding: theme.spacing(1),
  },
  body: {
    fontSize: 12,
    padding: theme.spacing(1),
  },
}))(TableCell);

const ViewUsers = () => {
  const classes = useStyles();

  const [page, setPage] = useState(0);
  const rowsPerPage = 15;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const { users } = useStoreState(state => state.user);

  useEffect(() => {}, [users]);

  return (
    <Container>
      {users.length ? (
        <div className={classes.root}>
          <Typography variant="h4" className={classes.title}>
            Users
          </Typography>
          <Card className={classes.card}>
            <TableContainer>
              <Table stickyHeader className={classes.table}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>FirstName</StyledTableCell>
                    <StyledTableCell>Last Name</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(user => (
                      <StyledTableRow key={user.id}>
                        <StyledTableCell>{user.firstName}</StyledTableCell>
                        <StyledTableCell>{user.lastName}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={users.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
            />
          </Card>
        </div>
      ) : (
        <div></div>
      )}
    </Container>
  );
};
const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
  },
  root: {
    padding: "50px 0px",
  },
  title: {
    padding: "10px 0px",
  },
  subtitle: {
    fontSize: 20,
    color: theme.palette.primary.main,
  },
}));

export default ViewUsers;

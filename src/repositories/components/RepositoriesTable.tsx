import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRepositoriesFetch } from "../hooks/useRepositoriesFetch";
import { RepositoriesTablePagination } from "./RepositoriesTablePagination";
import { TableRowLoader } from "../../shared/components/TableRowLoader";
import { useNotifications } from "@toolpad/core";
import { RepositoriesTableRow } from "./RepositoriesTableRow";

export const RepositoriesTable = () => {
  const {
    error,
    loading,
    results: {
      data,
      pagination: { hasNextPage, hasPreviousPage },
    },
    changePage,
  } = useRepositoriesFetch();
  const notifications = useNotifications();

  // Inform about data fetching issue
  if (!loading && error) {
    notifications.show("There was an error while fetching data", {
      severity: "error",
      autoHideDuration: 3000,
    });
  }

  return (
    <>
      <RepositoriesTablePagination
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        onPageChange={changePage}
      />
      <TableContainer component={Paper} data-testid="repositories-list:table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Repository name</TableCell>
              <TableCell>Star count</TableCell>
              <TableCell>Fork count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRowLoader colspan={3} />
            ) : (
              data.map((dItem) => <RepositoriesTableRow data={dItem} />)
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <RepositoriesTablePagination
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
        onPageChange={changePage}
      />
    </>
  );
};

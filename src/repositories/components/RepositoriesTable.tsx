import {
  Box,
  CircularProgress,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  LinkOutlined,
  RestaurantOutlined,
  StarOutline,
} from "@mui/icons-material";
import { useRepositoriesFetch } from "../hooks/useRepositoriesFetch";
import { RepositoriesTablePagination } from "./RepositoriesTablePagination";

const cellAlignment: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

export const RepositoriesTable = () => {
  const {
    loading,
    results: {
      data,
      pagination: { hasNextPage, hasPreviousPage },
    },
    changePage,
  } = useRepositoriesFetch();

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
            {loading && (
              <TableRow data-testid="repositories-list:table:loader">
                <TableCell colSpan={3} align="center">
                  <CircularProgress role="load-indicator" />
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              data.map((row) => (
                <TableRow
                  key={row.nameWithOwner}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  data-testid="repositories-list:table:row"
                >
                  <TableCell
                    scope="row"
                    data-testid="repositories-list:table:cell-name"
                  >
                    <a href={row.url} target="_blank" rel="noreferrer">
                      <Box sx={cellAlignment}>
                        <LinkOutlined /> {row.nameWithOwner}
                      </Box>
                    </a>
                  </TableCell>
                  <TableCell data-testid="repositories-list:table:cell-stargazer-count">
                    <Box sx={cellAlignment}>
                      <StarOutline />
                      {row.stargazerCount}
                    </Box>
                  </TableCell>
                  <TableCell data-testid="repositories-list:table:cell-fork-count">
                    <Box sx={cellAlignment}>
                      <RestaurantOutlined />
                      {row.forkCount}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
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

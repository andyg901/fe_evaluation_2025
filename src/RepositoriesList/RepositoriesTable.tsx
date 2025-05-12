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
import { Repository } from "../types";
import {
  LinkOutlined,
  RestaurantOutlined,
  StarOutline,
} from "@mui/icons-material";

interface RepositoriesTableProps {
  repos: Repository[];
}

const cellAlignment: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

export const RepositoriesTable = ({ repos }: RepositoriesTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Repository name</TableCell>
            <TableCell>Star count</TableCell>
            <TableCell>Fork count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!repos.length && (
            <TableRow>
              <TableCell colSpan={3} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}
          {repos.map((row) => (
            <TableRow
              key={row.nameWithOwner}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row">
                <a href={row.url} target="_blank">
                  <Box sx={cellAlignment}>
                    <LinkOutlined /> {row.nameWithOwner}
                  </Box>
                </a>
              </TableCell>
              <TableCell>
                <Box sx={cellAlignment}>
                  <StarOutline />
                  {row.stargazerCount}
                </Box>
              </TableCell>
              <TableCell>
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
  );
};

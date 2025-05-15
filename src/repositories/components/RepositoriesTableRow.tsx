import { Box, SxProps, TableCell, TableRow } from "@mui/material";
import { Repository } from "../../shared/types/repository";
import {
  LinkOutlined,
  RestaurantOutlined,
  StarOutline,
} from "@mui/icons-material";

interface RepositoriesTableRoProps {
  data: Repository;
}

const cellAlignment: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

export const RepositoriesTableRow = ({ data }: RepositoriesTableRoProps) => {
  return (
    <TableRow
      key={data.nameWithOwner}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      data-testid="repositories-list:table:row"
    >
      <TableCell scope="row" data-testid="repositories-list:table:cell-name">
        <a href={data.url} target="_blank" rel="noreferrer">
          <Box sx={cellAlignment}>
            <LinkOutlined /> {data.nameWithOwner}
          </Box>
        </a>
      </TableCell>
      <TableCell data-testid="repositories-list:table:cell-stargazer-count">
        <Box sx={cellAlignment}>
          <StarOutline />
          {data.stargazerCount}
        </Box>
      </TableCell>
      <TableCell data-testid="repositories-list:table:cell-fork-count">
        <Box sx={cellAlignment}>
          <RestaurantOutlined />
          {data.forkCount}
        </Box>
      </TableCell>
    </TableRow>
  );
};

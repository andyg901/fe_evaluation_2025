import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Pagination } from "../../shared/types/graphql";

interface IRepositoriesTablePagination
  extends Omit<Pagination, "endCursor" | "startCursor"> {
  onPageChange: (page: "prev" | "next") => void;
}

export const RepositoriesTablePagination = ({
  hasNextPage,
  hasPreviousPage,
  onPageChange,
}: IRepositoriesTablePagination) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      my={2}
    >
      <IconButton
        disabled={!hasPreviousPage}
        onClick={() => onPageChange("prev")}
      >
        <ChevronLeftOutlined />
      </IconButton>
      <IconButton disabled={!hasNextPage} onClick={() => onPageChange("next")}>
        <ChevronRightOutlined />
      </IconButton>
    </Box>
  );
};

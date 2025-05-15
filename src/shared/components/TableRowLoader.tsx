import { CircularProgress, TableCell, TableRow } from "@mui/material";

interface TableRowLoaderProps {
  colspan: number;
}

export const TableRowLoader = ({ colspan }: TableRowLoaderProps) => {
  return (
    <TableRow data-testid="table:loader">
      <TableCell colSpan={colspan} align="center">
        <CircularProgress role="load-indicator" />
      </TableCell>
    </TableRow>
  );
};

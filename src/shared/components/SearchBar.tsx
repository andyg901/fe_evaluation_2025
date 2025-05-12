import { SearchOutlined } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  helperText?: string;
}

export const SearchBar = ({
  helperText,
  searchQuery,
  setSearchQuery,
}: SearchBarProps) => {
  return (
    <Grid offset={2} size={8}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchOutlined sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="search-input"
          label="Search for repository"
          variant="standard"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          helperText={helperText}
          fullWidth
          data-testid="repositories-list:search-input"
        />
      </Box>
    </Grid>
  );
};

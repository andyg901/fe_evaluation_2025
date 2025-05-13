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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <SearchOutlined sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="search-input"
          label="Type to start searching..."
          variant="standard"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          helperText={helperText}
          fullWidth
          role="search-input"
          slotProps={{
            htmlInput: { "data-testid": "search-input" },
            formHelperText: { role: "search-input:helper-text" },
            inputLabel: { role: "search-input:label-text" },
          }}
        />
      </Box>
    </Grid>
  );
};

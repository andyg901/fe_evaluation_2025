import { SearchOutlined } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(AppContext);

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
          helperText={!searchQuery && 'Displaying results for "topic:react"'}
          fullWidth
          data-testid="repositories-list:search-input"
        />
      </Box>
    </Grid>
  );
};

import { SearchOutlined } from "@mui/icons-material";
import { Box, Grid, TextField } from "@mui/material";

export const SearchBar = () => {
  return (
    <Grid offset={2} size={8}>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <SearchOutlined sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search for repository"
          variant="standard"
        />
      </Box>
    </Grid>
  );
};

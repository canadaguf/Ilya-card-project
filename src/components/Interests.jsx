import { Box, Typography } from "@mui/material";

export default function Interests() {
  return (
    <Box id="interests" p={2} mb={4} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Интересы
      </Typography>
      <Typography variant="body1">
        Some interests about myself like running, etc...
      </Typography>
    </Box>
  );
}
import { Box, Typography, Link as MuiLink, useTheme } from "@mui/material";
import { tokens } from "../theme";

export default function Info() {
  const theme = useTheme(); // Access the current theme
  const colors = tokens(theme.palette.mode); // Get the theme tokens for the current mode

  return (
    <Box className="info" p={1} textAlign="center" mb={0}>
      <Typography variant="h2" component="h1">
        Ионов Илья
      </Typography>
      <MuiLink
        href="https://ilya-ionov.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: colors.primary[100], // Use primary color based on the current theme
          textDecoration: "none", // Add text decoration if needed
          '&:hover': {
            textDecoration: 'underline', // Optional: underline on hover
          }
        }}
      >
        https://ilya-ionov.netlify.app
      </MuiLink>
    </Box>
  );
}

import { Box, Link as MuiLink, Icon } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <Box component="footer" display="flex" justifyContent="center" gap={2} mt={4} p={2}>
      <MuiLink href="https://t.me/ilyaiono" target="_blank" rel="noopener noreferrer" sx={{ color: "inherit" }}>
        <TelegramIcon fontSize="large" />
      </MuiLink>
      <MuiLink href="https://github.com/canadaguf" target="_blank" rel="noopener noreferrer" sx={{ color: "inherit" }}>
        <GitHubIcon fontSize="large" />
      </MuiLink>
    </Box>
  );
}

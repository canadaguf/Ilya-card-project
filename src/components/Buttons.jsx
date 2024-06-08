import { Box, Button, Icon } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Buttons() {
  return (
    <Box className="buttons" display="flex" gap={2} mt={4} justifyContent="center">
      <Button
        href="mailto:ilyaiono@gmail.com"
        startIcon={<EmailIcon />}
        variant="contained"
        color="primary"
        sx={{ minWidth: "85px" }}
      >
        Email
      </Button>
      <Button
        href="tel:+79384668931"
        startIcon={<PhoneIcon />}
        variant="contained"
        color="secondary"
        sx={{ minWidth: "85px" }}
      >
        Phone
      </Button>
    </Box>
  );
}

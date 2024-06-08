import { Box, Typography } from "@mui/material";
import ilyaPhoto from '../img/GSH29041.jpg';

export default function Photo() {
  return (
    <Box id="ctn-image" textAlign="center" mb={4}>
      <img src={ilyaPhoto} alt="Ilya" style={{ width: "100%", maxWidth: "300px", borderRadius: "10%" }} />
      <Typography id="attribution" variant="caption" display="block" mt={0}>
        Корпоративная эстафета 25.05.24
      </Typography>
    </Box>
  );
}
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Footer from '../../components/Footer';
import Header from "../../components/Header";
import SchoolMap from "../map/Map";


const Education = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Образование" subtitle="Где я только не учился..." />
      </Box>

      {/* CONTENT */}
      <Box className="ctn" mt={1}>
        <Box className="ctn-mid-section" mt={0}>
          <Typography variant="h1" gutterBottom>
            Карта учебных заведений
          </Typography>
          <SchoolMap />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};
export default Education;

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Photo from '../../components/Photo';
import Info from '../../components/Info';
import About from '../../components/About';
import Interests from '../../components/Interests';
import Footer from '../../components/Footer';
import Header from "../../components/Header";

const Homepage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Домашняя страница" subtitle="Немного обо всём и ни о чём" />
      </Box>

      {/* CONTENT */}
      <Box className="ctn" mt={1}>
        <Photo />
        <Info />
        <About />
        <Footer />
      </Box>
    </Box>
  );
};
export default Homepage;
import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, Card, CardContent } from "@mui/material";
import { tokens } from "../../theme";
import Footer from '../../components/Footer';
import Header from "../../components/Header";

const Experience = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from the JSON file in the public directory
    fetch('/jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.error('Error loading job data:', error));
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Опыт работы" subtitle="Кем работал и что делал" />
      </Box>

      {/* CONTENT */}
      <Box className="ctn" mt={1}>
          {/* Display job experiences */}
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            {jobs.map((job, index) => (
              <Card 
                key={index} 
                style={{ backgroundColor: colors.primary[50], width: '100%', maxWidth: '600px' }}
                elevation={3}
              >
                <CardContent>
                  <Typography variant="h5" component="div">
                    {job.position}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.duration}
                  </Typography>
                  <Typography variant="body1" mt={2}>
                    {job.description}
                  </Typography>
                  {job.website && (
                    <Typography variant="body1" mt={1}>
                      <a href={job.website} target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.secondary.main, textDecoration: 'none' }}>
                        Открыть сайт
                      </a>
                    </Typography>
                  )}
                </CardContent>
              </Card>
            ))}
          </Box>

          <Footer />
        </Box>
    </Box>
  );
}

export default Experience;

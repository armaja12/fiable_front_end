import React from 'react';
import { Container, Typography } from '@mui/material';
import GridVisualizer from './components/GridVisualizer/GridVisualizer';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        5x5 Grid Visualizer
      </Typography>
      <GridVisualizer input="2,3 NORTH" />
    </Container>
  );
};

export default App;

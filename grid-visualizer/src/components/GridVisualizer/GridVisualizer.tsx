import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import parseInput from '../../utils/parseInput';

type GridVisualizerProps = {
  input: string;
};

const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

const GridVisualizer: React.FC<GridVisualizerProps> = ({ input }) => {
  const { x, y, direction } = parseInput(input);

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Grid container spacing={1} columns={5}>
        {Array.from(Array(5)).map((_, rowIndex) => (
          <Grid container key={rowIndex} justifyContent="center" spacing={1}>
            {Array.from(Array(5)).map((_, colIndex) => (
              <Grid item key={colIndex}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    backgroundColor: rowIndex === 4 - y && colIndex === x ? 'primary.main' : 'grey.300',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {rowIndex === 4 - y && colIndex === x && (
                    <Typography>{direction.charAt(0)}</Typography>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridVisualizer;

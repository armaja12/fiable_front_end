type ParsedInput = {
    x: number;
    y: number;
    direction: string;
  };
  
  const parseInput = (input: string): ParsedInput => {
    const [coordinates, direction] = input.split(' ');
    const [x, y] = coordinates.split(',').map(Number);
    return { x, y, direction };
  };
  
  export default parseInput;
  
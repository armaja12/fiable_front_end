import { useState } from 'react';

export const useGrid = (initialInput: string) => {
  const [input, setInput] = useState(initialInput);
  const handleChange = (newInput: string) => {
    setInput(newInput);
  };
  return { input, handleChange };
};

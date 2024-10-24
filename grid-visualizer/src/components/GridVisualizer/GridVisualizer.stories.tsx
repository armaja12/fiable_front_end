import { StoryFn, Meta } from '@storybook/react';
import GridVisualizer from './GridVisualizer';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Components/GridVisualizer',  
  component: GridVisualizer,
} as Meta<typeof GridVisualizer>;

const Template: StoryFn<typeof GridVisualizer> = (args: JSX.IntrinsicAttributes & { input: string; }) => <GridVisualizer {...args} />;

export const Default = Template.bind({});
Default.args = {
  input: '1,1 NORTH',
};

export const EdgeCase = Template.bind({});
EdgeCase.args = {
  input: '4,4 WEST',
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  input: '6,6 NORTH', 
};

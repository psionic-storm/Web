import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from '../elements/Button/Button';

export default {
  title: 'elements/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <Button {...args} />;

export const Primary = Template.bind({});
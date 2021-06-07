import React from 'react';
import { Story, Meta } from '@storybook/react';
import Index from 'Pages/';

export default {
  title: 'pages/Index',
  page: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <Index {...args}></Index>;

export const Base = Template.bind({});

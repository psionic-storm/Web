import React from 'react';
import { Story, Meta } from '@storybook/react';
import Header from 'Components/Header/Header';

export default {
  title: 'components/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <Header {...args}></Header>;

export const Base = Template.bind({});
import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignIn from 'Pages/sign-in';

export default {
  title: 'pages/SignIn',
  component: SignIn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <SignIn {...args}></SignIn>;

export const Base = Template.bind({});

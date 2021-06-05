import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SignInPage } from 'Pages/sign-in';

export default {
  title: 'pages/SignIn',
  component: SignIn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <SignInPage {...args}></SignInPage>;

export const Base = Template.bind({});

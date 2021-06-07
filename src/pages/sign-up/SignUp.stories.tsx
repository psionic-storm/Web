import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignUpPage from 'Pages/sign-up';

export default {
  title: 'Pages/SignUp',
  page: SignUpPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <SignUpPage {...args}></SignUpPage>;

export const Base = Template.bind({});

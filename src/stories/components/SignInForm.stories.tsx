import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignInForm from 'Components/SignInForm/SignInForm';

export default {
  title: 'components/SignInForm',
  component: SignInForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <SignInForm {...args}></SignInForm>;

export const Base = Template.bind({});
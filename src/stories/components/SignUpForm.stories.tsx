import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignUpForm from 'Components/SignUpForm/SignUpForm';

export default {
  title: 'components/SignUpForm',
  component: SignUpForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <SignUpForm {...args}></SignUpForm>;

export const Base = Template.bind({});
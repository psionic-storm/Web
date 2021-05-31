import React from 'react';
import { Story, Meta } from '@storybook/react';
import SignUp from 'Pages/sign-up';

export default {
  title: 'Pages/SignUp',
  component: SignUp,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <SignUp {...args}></SignUp>;

export const Base = Template.bind({});

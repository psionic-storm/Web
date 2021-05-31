import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button from 'Elements/Button/Button';

export default {
  title: 'elements/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <Button {...args}></Button>;

export const Base = Template.bind({});
Base.args = {
  children: '버튼',
};

export const Width300 = Template.bind({});
Width300.args = {
  children: '버튼',
  width: 300,
};

export const Height50  = Template.bind({});
Height50.args = {
  children: '버튼',
  height: 50,
};
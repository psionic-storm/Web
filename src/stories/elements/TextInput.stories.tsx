import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextInput from 'Elements/TextInput/TextInput';

export default {
  title: 'elements/TextInpu',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <TextInput {...args} />;

export const Base = Template.bind({});
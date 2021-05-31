import React from 'react';
import { Story, Meta } from '@storybook/react';
import TextInput from 'Elements/TextInput/TextInput';

export default {
  title: 'elements/TextInput',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => <TextInput {...args} />;

export const Base = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: '라벨',
};

export const WithPlaceholder = Template.bind({});
Template.bind({});
WithPlaceholder.args = {
  placeholder: 'placeholder',
};

export const WithLabelAndPlaceholder = Template.bind({});
Template.bind({});
WithLabelAndPlaceholder.args = {
  label: '라벨',
  placeholder: 'placeholder',
};


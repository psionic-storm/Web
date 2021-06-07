import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import SignUpForm from 'Components/SignUpForm/SignUpForm';

export default {
  title: 'components/SignUpForm',
  component: SignUpForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => {
  return (
    <Container>
      <SignUpForm {...args} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Base = Template.bind({});
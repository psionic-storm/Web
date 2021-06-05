import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';
import SignInForm from 'Components/SignInForm/SignInForm';

export default {
  title: 'components/SignInForm',
  component: SignInForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = args => {
  return (
    <Container>
      <SignInForm {...args} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Base = Template.bind({});
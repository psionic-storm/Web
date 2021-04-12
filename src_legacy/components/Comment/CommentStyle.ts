import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  border: 2px solid ${PALETTE.GRAY[2]};
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
`;

export const CommentWrapper = styled.div`
  display: flex;
`;
export const CommentInfo = styled.div``;
export const Commenter = styled.div`
  font-weight: bold;
`;
export const Comment = styled.div``;

import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';
import ButtonEl from 'Elements/Button/Button';

export const Container = styled.div`
  width: 800px;
  border: 2px solid ${PALETTE.GRAY[2]};
  border-radius: 10px;
  margin: 16px 0 0 0;
  padding: 20px;
  position: relative;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const PostInfo = styled.div`
  margin-left: 6px;
`;

export const WriterInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const WriterName = styled.div`
  padding-right: 8px;
  border-right: 2px solid ${PALETTE.GRAY[3]};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export const SalonOrSpaceName = styled.div`
  padding: 0 8px;
  border-right: 2px solid ${PALETTE.GRAY[3]};
  color: ${PALETTE.GRAY[5]};
  font-size: 14px;
  cursor: pointer;
`;

export const BookTitle = styled.div`
  padding: 0 8px;
  color: ${PALETTE.GRAY[5]};
  font-size: 14px;
  cursor: pointer;
`;

export const CreatedDate = styled.div`
  color: ${PALETTE.GRAY[5]};
  font-size: 14px;
  margin-top: 4px;
`;

export const Post = styled.div`
  padding: 6px;
`;

export const PostTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const PostPage = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Button = styled(ButtonEl)`
  padding: 4px 8px;
  margin: 0 4px;
  &:hover {
    background-color: ${PALETTE.GRAY[2]};
  }
`;

export const PostContent = styled.div`
  color: ${PALETTE.GRAY[5]};
  font-size: 16px;
  margin-top: 6px;
  line-height: 22px;
`;

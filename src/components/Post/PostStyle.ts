import styled from 'styled-components';
import PALETTE from 'Styles/color-variables';

export const Container = styled.div`
  width: 800px;
  border: 2px solid ${PALETTE.GRAY[3]};
  border-radius: 10px;
  margin: 5px 0;
  padding: 20px;
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
`;

export const SalonOrSpaceName = styled.div`
  padding: 0 8px;
  border-right: 2px solid ${PALETTE.GRAY[3]};
  color: ${PALETTE.GRAY[5]};
  font-size: 14px;
`;

export const BookTitle = styled.div`
  padding: 0 8px;
  color: ${PALETTE.GRAY[5]};
  font-size: 14px;
`;

export const CreatedDate = styled.div`
  color: ${PALETTE.GRAY[5]};
  font-size: 14px;
  margin-top: 4px;
`;

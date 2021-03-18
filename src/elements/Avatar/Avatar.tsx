import React from 'react';
import * as S from './AvatarStyle';
import PALETTE from 'Styles/color-variables';

interface AvatarProps {
  color?: string;
  height?: string;
  width?: string;
}

function Avatar({
  color = PALETTE.GRAY[4],
  height = '36',
  width = '36',
}: AvatarProps) {
  return (
    <S.Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        viewBox="0 0 24 24"
        width={width}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
          fill={color}
        />
      </svg>
    </S.Container>
  );
}

export default Avatar;

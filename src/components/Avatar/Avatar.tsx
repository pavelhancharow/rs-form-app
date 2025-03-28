import { ImgHTMLAttributes, memo } from 'react';
import AvatarUI from './Avatar.styles.ts';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  width: number;
  height: number;
}

function Avatar({ width, height, ...props }: AvatarProps) {
  return (
    <AvatarUI width={width} height={height}>
      <img {...props} alt={props.alt} />
    </AvatarUI>
  );
}

export default memo(Avatar);

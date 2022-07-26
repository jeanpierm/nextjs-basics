import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export interface ProfilePictureProps {
  alt: string;
  height: number;
  width: number;
}

export default function ProfilePicture({
  alt,
  height,
  width,
}: ProfilePictureProps) {
  return (
    <div>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={height}
        width={width}
        objectFit="cover"
        alt={alt}
      />
    </div>
  );
}

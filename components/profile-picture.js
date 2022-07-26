import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function ProfilePicture({ alt }) {
  return (
    <div>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={108}
        width={108}
        objectFit="cover"
        alt={alt}
      />
    </div>
  );
}

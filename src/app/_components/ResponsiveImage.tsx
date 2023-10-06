import Image from 'next/image';
import styles from './ResponsiveImage.module.css';

export interface ResponsiveImageProps {
    src: string;
    alt: string;
}; 

export default function ResponsiveImage(props: ResponsiveImageProps) {
  return (
    <div className={styles.container}>
      <Image 
        src={props.src} 
        alt={props.alt}
        layout="fill"
      />
    </div>
  );
}

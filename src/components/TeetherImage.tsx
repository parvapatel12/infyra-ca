import React from 'react';

interface TeetherImageProps {
  type: 'rattle-green' | 'rattle-blue' | 'crocodile-grey' | 'crab-yellow';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TeetherImage: React.FC<TeetherImageProps> = ({ type, className = '', size = 'md' }) => {
  let sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-45 h-45 sm:w-52 sm:h-52',
    lg: 'w-64 h-64 sm:w-80 sm:h-80',
  }[size];

  let imagePath = '';
  if (type === 'rattle-green') {
    imagePath = '/assets/RattleTeetherGreen1.png';
  } else if (type === 'rattle-blue') {
    imagePath = '/assets/RattleTeetherBlue1.png';
  } else if (type === 'crocodile-grey') {
    imagePath = '/assets/CrocodileTeether1.png';
  } else if (type === 'crab-yellow') {
    imagePath = '/assets/CrabTeether1.png';
  }

  if (type === 'crocodile-grey' && size === 'md') {
    sizeClasses = 'w-30 h-30 sm:w-48 sm:h-48';
  }
  if (type === 'crab-yellow' && size === 'md') {
    sizeClasses = 'w-48 h-48 sm:w-55 sm:h-55';
  }

  return (
    <div className={`relative flex items-center justify-center p-2 rounded-2xl ${sizeClasses} ${className}`}>
      {imagePath ? (
        <img src={imagePath} alt={`${type} teether`} className={`${sizeClasses} object-contain drop-shadow-md`} />
      ) : null}
    </div>
  );
};

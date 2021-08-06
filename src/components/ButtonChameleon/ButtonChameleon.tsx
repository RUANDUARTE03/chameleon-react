import React from 'react';
import Styles from './buttonChameleon.module.scss';

interface ButtonChameleonProps {
  label: string;
  className?: string;
  onClick: () => void;
  backgroundTransparent?: boolean;
  version: 'v1' | 'v2' | 'v3';
}

export default function ButtonChameleon({
  label,
  className,
  onClick,
  backgroundTransparent = true,
  version = 'v1',
}: ButtonChameleonProps) {
  return (
    <button
      type="button"
      className={`
        ${Styles.btnChameleon}
        ${className}
        ${
          backgroundTransparent
            ? Styles.backgroundTransparent
            : ''
        }
        ${
          version === 'v1'
            ? Styles.versionV1
            : version === 'v2'
            ? Styles.versionV2
            : Styles.versionV3
        }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

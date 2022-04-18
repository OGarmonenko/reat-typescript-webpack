import { ReactElement } from 'react';

export enum HeaderColor {
  ERROR = '#d1001f',
  WARNING = '#ffd700',
}

export enum TypeModal {
  ERROR = 'Error',
  WARNING = 'Warning',
  INFO = 'Info',
}
export interface Modal_Props {
  headerColor?: string;
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

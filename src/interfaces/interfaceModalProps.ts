import { ReactElement } from 'react';
import { IUserInfo_Props } from '@interfaces/IUserInfoProps';

export enum HeaderColor {
  ERROR = '#d1001f',
  WARNING = '#ffd700',
}

export enum TypeModal {
  ERROR = 'Error',
  WARNING = 'Warning',
  INFO = 'Info',
  INFO_USER = 'Information about User',
}
export interface Modal_Props {
  header: ReactElement;
  content: ReactElement;
  footer?: ReactElement;
}

export interface configModal_Props {
  type: string | null;
  visible: boolean;
  data?: {
    message?: string | null;
    //    selectedRecord?: Record_Props | null;
    userInfo?: IUserInfo_Props | null;
  };
}

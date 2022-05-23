import { IUserInfo_Props } from '@interfaces/IUserInfoProps';

export interface Record_Props {
  id: number;
  item: string;
  date: number;
  userInfo: IUserInfo_Props;
}

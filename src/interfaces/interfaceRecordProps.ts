import { IUserInfo_Props } from '@interfaces/IUserInfoProps';

export interface Record_Props {
  _id?: string;
  id: number;
  item: string;
  date: number | string;
  userInfo?: IUserInfo_Props;
}

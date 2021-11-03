import { Dispatch, SetStateAction } from 'react';
import { CSSProperties } from 'styled-components';

export interface IButton {
  message: string;
  fontColor: string;
  backgroundColor: string;
  customStyle?: CSSProperties;
  click?: () => void | Promise<void>;
}

export interface IModal {
  children: React.ReactNode;
  width?: string;
  height?: string;
  set: Dispatch<SetStateAction<boolean>>;
}

export type TNav = '종합' | '주간' | '주간기록';

export type TProperty =
  | '날짜'
  | '프로필'
  | '이름'
  | '아이디'
  | '기여도'
  | 'Bio'
  | '날짜'
  | '순위';

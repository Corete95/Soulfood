import { atom, useRecoilState } from 'recoil';

export const sideBarOpenAtom = atom({
  key: 'sideBarOpenAtom',
  default: false,
});

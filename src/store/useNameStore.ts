import { ChangeEvent } from 'react';

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type NameState = {
  fullName: string;
  onChangeFullName: (e: ChangeEvent<HTMLInputElement>) => void;
  preferredName: string;
  onChangePreferredName: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useNameStore = create<NameState>()(
  devtools(
    persist(
      (set) => ({
        fullName: '',
        preferredName: '',
        onChangeFullName: (e) => set({ fullName: e.target.value }),
        onChangePreferredName: (e) => set({ preferredName: e.target.value }),
      }),
      {
        name: 'name-storage',
        skipHydration: true,
      },
    ),
  ),
);

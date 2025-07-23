import { create } from "zustand";

type User = {
  uuid: string;
  email: string | null;
};

type UserStore = {
  user: User;
  updateUser: (uuid: string, email: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    uuid: "",
    email: "",
  },
  updateUser: (uuid: string, email: string) =>
    set(() => ({
      user: {
        uuid,
        email,
      },
    })),
}));

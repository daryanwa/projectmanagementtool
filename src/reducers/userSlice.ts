import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  password: string;
}

interface UsersState {
  registeredUsers: User[];
}

const initialState: UsersState = {
  registeredUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<User>) => {
      const userExist = state.registeredUsers.some(
        (user) => user.email === action.payload.email
      );
      if (!userExist) {
        state.registeredUsers.push(action.payload);
      }
    },
    // validateUser: (
    //   state,
    //   action: PayloadAction<{ email: string; password: string }>
    // ) => {
    //   const userExist = state.registeredUsers.some(
    //     (user) =>
    //       user.email === action.payload.email &&
    //       user.password === action.payload.password
    //   );
    //   return userExist;
    // },
  },
});

export const { registerUser } = usersSlice.actions;
export default usersSlice.reducer;

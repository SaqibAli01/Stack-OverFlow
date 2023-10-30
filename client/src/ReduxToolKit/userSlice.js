import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRegister: {},
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.userRegister = action.payload;
    },
    signIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { signUp, signIn } = userSlice.actions;

export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     registerStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     registerSuccess: (state, action) => {
//       state.loading = false;
//       state.user = action.payload;
//     },
//     registerFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { registerStart, registerSuccess, registerFailure } =
//   userSlice.actions;

// export default userSlice.reducer;

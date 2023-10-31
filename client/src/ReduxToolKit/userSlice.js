import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRegister: {},
  user: {},
  authUser: {},
  askQuestion: {},
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
    auth: (state, action) => {
      state.authUser = action.payload;
    },
    AskQuestions: (state, action) => {
      state.askQuestion = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.userRegister = null;
      state.authUser = null;
    },
  },
});

export const { signUp, signIn, logout, auth, AskQuestions } = userSlice.actions;

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

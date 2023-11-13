import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRegister: {},
  user: {},
  authUser: {},
  askQuestion: {},
  getQuestion: [],
  askAns: {},
  getAns: [],
  userComment: [],
  singUserAns: [],
  singUserQues: [],
  allUser: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.userRegister = action.payload;
    },
    // signIn: (state, action) => {
    //   state.user = action.payload;
    // },
    signIn: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },

    getSingleUserAnswers: (state, action) => {
      state.singUserAns = action.payload;
      // state.singUserAns = [...state.singUserAns, ...action.payload];
    },

    getSingleUserQe: (state, action) => {
      state.singUserQues = action.payload;
      // state.singUserAns = [...state.singUserAns, ...action.payload];
    },
    getAllUsers: (state, action) => {
      state.allUser = action.payload;
    },

    auth: (state, action) => {
      state.authUser = action.payload;
    },

    AskQuestions: (state, action) => {
      state.askQuestion = action.payload;
    },

    AskAnswers: (state, action) => {
      state.askAns = action.payload;
    },

    getQuestions: (state, action) => {
      state.getQuestion = action.payload;
    },

    getAnswers: (state, action) => {
      state.getAns = action.payload;
    },

    deleteAnswerRedux: (state, action) => {
      const answerIdToDelete = action.payload;
      console.log("🚀 ~ Redux answerIdToDelete:", answerIdToDelete);

      const updatedAnswer = state.getAns.filter((comment) => {
        return comment._id !== answerIdToDelete;
      });

      return { ...state, getAns: updatedAnswer };
    },

    // getQuestions: (state, action) => {
    //   state.getQuestion = [...state.getQuestion, ...action.payload];
    // },

    allComments: (state, action) => {
      return { ...state, userComment: action.payload };
    },
    deleteCommentRedux: (state, action) => {
      const commentIdToDelete = action.payload;
      const updatedComments = state.userComment.filter((comment) => {
        return comment._id !== commentIdToDelete;
      });
      return { ...state, userComment: updatedComments };
    },

    logout: (state) => {
      state.user = null;
      state.userRegister = null;
      state.authUser = null;
    },
  },
});

export const {
  signUp,
  signIn,
  logout,
  auth,
  AskQuestions,
  getQuestions,
  AskAnswers,
  getAnswers,
  allComments,
  getSingleUserAnswers,
  getSingleUserQe,
  getAllUsers,
  deleteCommentRedux,
  deleteAnswerRedux,
} = userSlice.actions;

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

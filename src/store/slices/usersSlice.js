import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// User Action
export const getUsersData = createAsyncThunk(
  "users/getData",
  async (args, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/sd"
      );
      return data;
    } catch (error) {
        console.log(error.response, "Error msg")
      rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getUsersData.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.data = [];
      state.isSuccess = false;
    },
    [getUsersData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getUsersData.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload;
      state.isSuccess = false;
    },
  },
});

export default usersSlice;

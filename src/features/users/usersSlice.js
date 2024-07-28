import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
      //   Immer lets us update state in two ways: either mutating the existing state value, or returning a new result.
    });
  },
});
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  console.log(data.users);
  return data.users;

  // fetch("https://dummyjson.com/products/")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json.products);
  //       // if(data.length!==json.products.length)
  //       setData(json.products);
  //     });
});

export default usersSlice.reducer;

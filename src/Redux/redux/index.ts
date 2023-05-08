import { createSlice } from '@reduxjs/toolkit';
import { IUser } from './interface';

const initialState: IUser = {
    user:{
    username:"" ,
    email:"",
    password:"",
    img:''
  }

};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user:action.payload
      };
    },
  }
});

export const { setUser} =
userSlice.actions;
export default userSlice.reducer;

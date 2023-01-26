import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
	name: 'userName',
    initialState: "My Friend!",
    reducers: {
        changeUserName: (state, action) =>{
            const inputUserName = action.payload
            return inputUserName
        }
    }
})

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/userName.slice'
import 'bootstrap/dist/css/bootstrap.min.css';

export default configureStore({
  reducer: {
        userName: userNameSlice,
        
	}
})
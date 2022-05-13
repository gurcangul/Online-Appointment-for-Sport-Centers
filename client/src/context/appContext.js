import React, { useReducer, useContext } from 'react'
import reducer from '../context/reducer'
import { 
  CLEAR_ALERT, 
  DISPLAY_ALERT, 
  LOGIN_USER_BEGIN, 
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,

  REGISTER_USER_BEGIN, 
  REGISTER_USER_ERROR, 
  REGISTER_USER_SUCCESS,

  LOGOUT_USER,

  CREATE_RESERVATION_BEGIN, 
  CREATE_RESERVATION_SUCCESS, 
  CREATE_RESERVATION_ERROR,

  DELETE_RESERVATION_BEGIN,
  DELETE_RESERVATION_SUCCESS,
  DELETE_RESERVATION_ERROR
} from './actions'

import axios from 'axios'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token:token,
  productName:'',
  productCategory:'',
  productAmount:'',
  amountUnit:'',
  company:'',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const displayAlert = () => {
      dispatch({
          type:DISPLAY_ALERT,
        })
        clearAlert()
  }

  const clearAlert= () =>{
      setTimeout(()=>{
          dispatch({
              type: CLEAR_ALERT,
          })
      },3000)
  }

const addUserToLocalStorage=({user,token})=>{
  console.log("sdsdsdsd");
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}

const removeUserFromLocalStorage=()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

//REGISTER
  const  registerUser = async (currentUser)=>{
    dispatch({type: REGISTER_USER_BEGIN})
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser)
      const { user, token} = response.data
      dispatch({
        type:REGISTER_USER_SUCCESS, 
        payload:{user, token}
      })
      addUserToLocalStorage({user,token})
    }catch (error) {
      dispatch({
        type:REGISTER_USER_ERROR, 
        payload:{msg:error.response.data.msg}
      })
    }
    clearAlert();
}

//LOGIN
  const loginUser = async(currentUser)=>{
    dispatch({type:LOGIN_USER_BEGIN})
    try {
      const {data} = await axios.post('/api/v1/auth/login', currentUser)

      const {user, token} = data
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {user, token}
      })
    addUserToLocalStorage({user, token})

    } catch (error) {
        dispatch({
        type:LOGIN_USER_ERROR, 
        payload:{msg:error.response.data.msg}
      })
    }
  }

//LOGOUT
const logoutUser = async()=>{
  dispatch({type:LOGOUT_USER})
  removeUserFromLocalStorage()
}


//CREATE RESERVATION
const  createReservation = async (currentUser)=>{
  dispatch({type: CREATE_RESERVATION_BEGIN})
  try {
    const response = await axios.post('/api/v1/auth/companies', currentUser)
    const { user, token} = response.data
    dispatch({
      type:CREATE_RESERVATION_SUCCESS, 
      payload:{user, token}
    })
    addUserToLocalStorage({user,token})
  }catch (error) {
    dispatch({
      type:CREATE_RESERVATION_ERROR, 
      payload:{msg:error.response.data.msg}
    })
  }
  clearAlert();
}

//DELETE RESERVATION
const  deleteReservation = async (currentUser)=>{
  dispatch({type: DELETE_RESERVATION_BEGIN})
  try {
    const response = await axios.post('/api/v1/auth/companies', currentUser)
    const { user, token} = response.data
    dispatch({
      type:DELETE_RESERVATION_SUCCESS, 
      payload:{user, token}
    })
    addUserToLocalStorage({user, token})
  }catch (error) {
    dispatch({
      type:DELETE_RESERVATION_ERROR, 
      payload:{msg:error.response.data.msg}
    })
  }
  clearAlert();
}

  return (
    <AppContext.Provider
      value={{
        ...state, displayAlert, 
        registerUser, 
        loginUser, 
        logoutUser, 
        createReservation, 
        deleteReservation
      }}>{children}
    </AppContext.Provider>
  )
}
export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
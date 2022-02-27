import { FETCH_ALL, CREATE, UPDATE, DELETE, NOTE } from '../constants/actionTypes';

import * as api from '../api/';

export const getAppointments = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAppointments();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAppointment = (appointment) => async (dispatch) => {
  try {
    const { data } = await api.createAppointment(appointment);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateAppointment  = (id, appointment ) => async (dispatch) => {
  try {
    const { data } = await api.updateAppointment(id, appointment);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const noteAppointment = (id) => async (dispatch) => {
  try {
    const { data } = await api.noteAppointment(id);

    dispatch({ type: NOTE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteAppointment = (id) => async (dispatch) => {
  try {
    await api.deleteAppointment(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

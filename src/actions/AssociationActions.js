import firebase from 'firebase';
import { ASSOCIATION_FETCH_SUCCESS } from './types';

export const associationFetch = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/associations/')
      .on('value', snapshot => {
        const listAssos = [];
        snapshot.forEach(key => {
          listAssos.push(key.val());
        });
        dispatch({ type: ASSOCIATION_FETCH_SUCCESS, payload: listAssos });
      });
  };
};

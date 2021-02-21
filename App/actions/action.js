import {ADD_SESS, DEL_SESS} from './types';

export const addSess = (sess) => (
  {
    type: ADD_SESS,
    data: sess,

  }
)

export const delSess = (sess) => (
  {
    type: DEL_SESS,
    data: sess,
  }
)
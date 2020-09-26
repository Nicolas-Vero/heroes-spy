import axios from 'axios';
import { useState } from 'react';
import { getData } from '../configs/Global';


/*
* Desc: Return true if the pro is signed in, otherwise, it returns a status 401
* Params:
* access-token  | header | string | (req)
* token-name    | header | string | (req)
* client        | header | string | (req)
* uid           | header | string | (req)
* expiry        | header | string | (req)
* */
export const ShopRequest = async () => {
    const headers = await getData();

    header = JSON.parse(headers)
 
    return axios({
      method: 'GET',
      url: `http://heroespy.herokuapp.com/api/v1/shops`,
      headers: header
    }) 
  };

  export const Sign_out = async () => {
    const headers = await getData();

    header = JSON.parse(headers)
 
    return axios({
      method: 'DELETE',
      url: `https://heroespy.herokuapp.com/api/v1/auth/sign_out`,
      headers: header
    })
   
  };

  export const Info = async () => {
    const headers = await getData();

    header = JSON.parse(headers)
 
    return header
   
  };
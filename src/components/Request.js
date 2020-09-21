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
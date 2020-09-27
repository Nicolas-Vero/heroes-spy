import axios from 'axios';
import { useState } from 'react';
import { getData } from '../configs/Global';

/**
 * 
 */
export const ShopRequest = async () => {
  const headers = await getData();

  header = JSON.parse(headers)

  return axios({
    method: 'GET',
    url: `http://heroespy.herokuapp.com/api/v1/shops`,
    headers: header
  })
};

export const ShopSearchRequest = async (term) => {
  const headers = await getData();

  header = JSON.parse(headers)

  return axios({
    method: 'GET',
    url: `http://heroespy.herokuapp.com/api/v1/shops`,
    headers: header,
    params: {
      name: term
    }
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
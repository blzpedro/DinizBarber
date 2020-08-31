import axios from 'axios';

const getBearer = (token = '') => {
    const bearer = token ? `Bearer ${token}` : '';
    return bearer;
};

export function api(token) {
  console.log(token)
  return axios.create({
      baseURL: 'https://dinizapi.herokuapp.com/api/v1',
      headers: {
          'Authorization': getBearer(token),
          'Content-Type': 'application/json-patch+json',
      },
  });
}

export function handleRequestError(error) {
    if (error.response) {
      console.group(`[${error.response.status}]`, `${error.response.data.title}`);
      console.log(error.response.data.detail);
      console.log(error.response);
      console.groupEnd();
    } else {
      console.log(error);
    }
  }
  
  export function handleRequestSuccess(response) {
    console.group(`Successful Request @ ${Date.now()}`);
    console.log('response', response);
    console.groupEnd();
    return response;
  }
import 'whatwg-fetch';

export function getUsers() {
  return myGet('users');
}

function myGet(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}

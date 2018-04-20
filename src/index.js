import './index.css';

import {getUsers, deleteUser} from './api/userApi';

// Populate table of users via API call.
getUsers().then(result => {
  let usersBody = '';
  result.forEach(user => {
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lasName}</td>
      <td>${user.email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = glogal.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from DOM collection
  // getElementsByClassName only returns an 'array like' object
  Array.from(deleteLinks, link => {
    link.onClick = function(event) {
      const element = event.target;
      event.prevenDefault();
      deleteUser(element.attributes['data-id'].value);
      const row = element.parentNode.panentNode;
      row.parentNode.removeChild(row);
    };
  });
});

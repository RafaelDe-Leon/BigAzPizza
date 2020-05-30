import axios from 'axios';

// const xhrHeader = {
//   headers: {
//     xhrFields: {
//       withCredentials: true
//     }
//   }
// };

export default {
  // Gets all users
  getUsers: function() {
    return axios.get('/api/user');
  },
  // Gets the users with the given id
  getUser: function() {
    return axios.get('/api/user/info');
  },

  updateUser: function(user) {
    return axios.put('/api/user/update', user);
  },
  // deleteUser: function(pizza) {
  //   return axios.delete('/api/user/delete', user);
  // },

  // Pizzas
  // postPizza: function(pizza) {
  //   return axios.post('/api/pizza-router');
  // },
  // Gets all pizzas
  getPizzas: function() {
    return axios.get('/api/pizza');
  },
  // Gets the pizza with the given id
  getPizza: function() {
    return axios.get('/api/pizza/info');
  },
  updatePizza: function(pizza) {
    return axios.put('/api/pizza-router/update', pizza);
  },
  deletePizza: function(pizza) {
    return axios.delete('/api/pizza-router/delete', pizza);
  }
  // loginUser: function(user) {
  //   return axios.post('/api/user/', user, xhrHeader);
  // },
  // signup: function(user) {
  //   return axios.post('/api/user/signup', user, xhrHeader);
  // },
  // authenticateUser: function() {
  //   return axios.post('/api/user/authenticate/', xhrHeader);
  // },

  // Admin Users
  // getAllUsers: function() {
  //   return axios.get('/api/user/findAllUsers');
  // },
  // getMonthlyUsers: function() {
  //   return axios.get('/api/user/findMonthlyUsers');
  // },
  // getPickUps: function() {
  //   return axios.get('/api/user/findPickUps');
  // },
  // viewCustomerDetail: function(id) {
  //   return axios.get('/api/user/viewCustomerInfo/' + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete('/api/books/' + id);
  // }
};

// session storage
//function login(username, password) {
//window.localStorage.setItem(username, token)
// }

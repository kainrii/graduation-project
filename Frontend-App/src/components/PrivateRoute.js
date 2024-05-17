// import React from 'react';
// import jwt from 'jsonwebtoken';
// import { Route, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, roles, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           // not logged in so redirect to login page with the return url
//           return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         }

//         // decode the token to get user's role
//         const decodedToken = jwt.decode(token);
//         const userRole = decodedToken.role;

//         // check if route is restricted by role
//         if (roles && roles.indexOf(userRole) === -1) {
//           // role not authorised so redirect to home page
//           return <Redirect to={{ pathname: '/'}} />
//         }

//         // authorised so return component
//         return <Component {...props} />
//       }}
//     />
//   );
// }
// export default PrivateRoute;

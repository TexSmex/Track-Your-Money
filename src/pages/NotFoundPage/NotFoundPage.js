 import React from 'react';
 import { Link } from 'react-router-dom';

 const NotFoundPage = () => (
   <div className='notfound'>
   <h1>404-Page Not Found</h1>
   <div><Link to='/Track-Your-Money/'>Please click here to be redirected to the Dasheboard</Link></div>
   </div>
  );

  export default NotFoundPage;
import React from 'react'
import { UserContext } from '../../Context/UserContext'

import {Navigate} from 'react-router-dom'
import User from '../User/User'

function ProtectedRoute({children}) {
    const {login} = React.useContext(UserContext)
  return login? children: <Navigate to='/login'></Navigate>
}

export default ProtectedRoute
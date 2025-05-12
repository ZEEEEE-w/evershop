import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ element, requireAuth }) {
    const { isLogin } = useSelector((state) => state.auth)
    if (requireAuth && !isLogin) {
        return <Navigate to='/login' />
    }
        return element
}


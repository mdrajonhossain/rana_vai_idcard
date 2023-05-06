import { Navigate } from 'react-router-dom';

const PrivateRouteadmin = ({children})=> {
	
    const login = localStorage.getItem('login');
    // const admin = false;
    if (!login || login === null) {
        return <Navigate to="/admin" />
    }
    return children;
}


export default PrivateRouteadmin;
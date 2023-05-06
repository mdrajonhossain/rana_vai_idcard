import { Navigate } from 'react-router-dom';

const Publicroute = ({ children }) => {

    const login = localStorage.getItem('login');
    // const admin = false;
    if (login) {
        return <Navigate to="/" />
    }
    return children;
}


export default Publicroute;
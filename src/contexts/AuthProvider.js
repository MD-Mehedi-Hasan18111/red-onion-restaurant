import React, { createContext } from 'react';
import useCart from '../hooks/useCart';
import useDeliveryInfo from '../hooks/useDeliveryInfo';
import useFirebase from '../hooks/useFirebase';

export const Context = createContext();

const AuthProvider = ({ children }) => {

    const [cart, setCart] = useCart();
    const [user, googleSignIn, logOut] = useFirebase();
    const [userInfo, setUserInfo] = useDeliveryInfo();

    return (
        <Context.Provider value={{ carts: [cart, setCart], firebases: [user, googleSignIn, logOut], delivery: [userInfo, setUserInfo] }}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;
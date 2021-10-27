
import React from 'react';
import Card from './Card';
import Home from './Home';
import {CartProvider} from 'react-use-cart';

const Provider = () => {
    return (
        <div>
             <CartProvider>
           <Home></Home>
           <Card></Card>
         </CartProvider>
            
        </div>
    );
};

export default Provider;
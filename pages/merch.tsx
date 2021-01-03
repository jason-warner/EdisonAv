import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/pages/merch.module.css';
import CartItems from '../components/Cart/CartItems';
// import Merchandise from '../components/Merchandise';
// import Items from '../components/Items';
import { useState } from 'react';
import { NextPage } from 'next'
import Cart from '../components/Cart/Cart'
import CartSummary from '../components/Cart/CartSummary'
import Products from '../components/Cart/Products'
const Schedule: NextPage = () => {
    const
        [addToCart, cartEmpty] = useState(true),
        [shopCart, showCart] = useState(false),
        [clickedItem, itemClicked] = useState(false),
        [myArr, updateMyArr] = useState([]);
    const showCartClick = () => {
        showCart(!shopCart)
    }
    const checkout = ` ${shopCart && styles.checkout}`;

    return (
        <div className={styles.merch + checkout}>
            <Navbar
                context={null}
                audio={null}
            />
            <button onClick={() => showCartClick()} className={styles.cart}>
                {!addToCart ?
                    <img src='/shopping-cart-full.svg' alt="cart" />
                    : <img src='/shopping-cart-empty.svg' alt="cart" />}
            </button>


            <main className={styles.main}>
                {shopCart &&
                    <div className={styles.shopCart}>
                        <h1>Cart</h1>
                        <Cart>
                            <CartItems myArr={myArr} clickedItem={clickedItem} />
                            <CartSummary />
                        </Cart>
                    </div>
                }
                {/* {clickedItem && console.log(myArr)} */}
                <ul className={styles.categories}>
                    <li>
                        <a>Hats</a>
                    </li>
                    <li>
                        <a>tShirts</a>
                    </li>
                    <li>
                        <a>Stickers</a>
                    </li>
                    <li>
                        <a>Bandanas</a>
                    </li>
                </ul>
                <Cart>
                    <Products
                        cartEmpty={cartEmpty}
                        updateMyArr={updateMyArr}
                        itemClicked={itemClicked}
                    />
                </Cart>
            </main>
        </div>
    ); 
}

export default Schedule;


// import StripeCheckout from 'react-stripe-checkout';
// import {useState} from 'react';


// const [product] = useState({
//     name: "Edi T",
//     price: "$1,000,000"
// });

// const handleToken: StripeCheckout['props']['token'] = (token) => {
//     console.log({token})
// }


{/* <h1>{product.name}</h1>
<h3>{product.price}</h3>
<StripeCheckout 
    stripeKey={"pk_test_51HofFKJOyEUwTUQ0DrNoquCUD2blo1pG5OihOX4deNieNynzRm7bl1dpSJX8sfRB2KzaZiPyKS3J9iT33NdaeqzW00xueue6Lz"}
    token={handleToken}
    billingAddress={}
    shippingAddress={}
    amount={product.price}
    name={product.name}
/> */}
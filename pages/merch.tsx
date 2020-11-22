import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/pages/merch.module.css';
import Merchandise from './merchandise';
import { useState } from 'react';
const Schedule = () => {
const [cartClicked, setCart] = useState(null);
const handleClick = () => {
    setCart(true);
}

    return (
        <div className={styles.merch}>
            <Navbar context={null} audio={null} />
                <button className={styles.cart}>
                    {cartClicked ? 
                        <img src='/shopping-cart-full.svg' alt="cart" /> 
                        : <img src='/shopping-cart-empty.svg' alt="cart" />}
                </button>

            
            <main className={styles.main}>
                <ul className={styles.grid}>
                    {Merchandise.map((item, index) => {
                        return (
                            <li key={index}>
                                <img src={item.img} />
                                <h2>{item.title}</h2>
                                <p>{item.price}</p>
                                <button onClick={() => handleClick()} >Add to cart</button>
                            </li>
                        );
                    })}
                </ul>
            </main>
        </div>
    );
}

export default Schedule;


// import StripeCheckout from 'react-stripe-checkout';
// import { useState } from 'react';


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
import React, { ReactNode } from 'react'
// import { CartProvider } from 'use-shopping-cart'
import { CartProvider } from 'use-shopping-cart'
import getStripe from '../../pages/api/checkout_sessions/utils/get-stripejs'
import * as config from './config'

const Cart = ({ children }: { children: ReactNode }) => (
  <CartProvider
    mode="checkout-session"
    stripe={getStripe()}
    currency={config.CURRENCY}
  >
    <>{children}</>
  </CartProvider>
)

export default Cart

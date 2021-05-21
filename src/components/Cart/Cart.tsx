import CartItem from '../CartItem/CartItem';
//Styles
import { Wrapper } from './Cart.styles';
//Types
import { CartItemType } from '../../App';

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart = ({cartItems, addToCart, removeFromCart}: Props) => {
    return (
        <div>
         <Wrapper>
             <h2>Seu Carinho:</h2>
             {cartItems.length == 0 ? <p>O carrinho está Vazio.</p> : null}
             {cartItems.map(item => (
                 <CartItem 
                 key={item.id}
                 item={item}
                 addToCart={addToCart}
                 removeFromCart={removeFromCart}
                 />
             ))}
         </Wrapper>
        </div>
    )
}

export default Cart;

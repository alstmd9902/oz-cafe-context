/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const cartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  /* 질문:
   * addToCart(removeFromCart 도 동일)를 쓰는 건 알겠는데,
   * 왜 그냥 addToCart()만 부르는 게 아니라
   * options, quantity, modalMenu.id를
   * 굳이 괄호 안에 넣어서 같이 보내야 하는지 모르겠습니다.
   * 왜 OrderModal에서 만들어서 넘겨줘야 하는 건지 이해가 안됩니당 ...
   */

  //장바구니 추가하는 함수
  const addToCart = (options, quantity, id) => {
    setCart([...cart, { options, quantity, id }]);
  };

  //삭제 하는 함수
  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}

export const addItemToCart = (cartItems, cartItemToAdd) => {
  // Check if cartItemToAdd already exists in items array
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // If item already exists just increase its quantity property
  //* We are returning new array because modifying the existing one won't trigger DOM rerender from react
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // If its the first time we are adding the item give it 'quantity' property and set it to 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

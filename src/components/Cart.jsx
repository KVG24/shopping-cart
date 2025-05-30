import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

export default function Cart() {
    const { itemsInCart, setItemsInCart } = useOutletContext();

    function deleteItemFromCart(itemId) {
        const newArray = itemsInCart.filter((item) => item.id !== itemId);
        setItemsInCart(newArray);
    }

    return (
        <>
            <h1>Shopping Cart</h1>
            <Container>
                {itemsInCart && itemsInCart.length > 0 ? (
                    itemsInCart.map((item) => (
                        <ItemInCart
                            key={item.id}
                            img={item.image}
                            title={item.title}
                            price={item.price}
                            quantity={item.quantity}
                            deleteItem={() => deleteItemFromCart(item.id)}
                        />
                    ))
                ) : (
                    <Message>No items in cart</Message>
                )}
            </Container>
        </>
    );
}

function ItemInCart({ img, title, price, quantity, deleteItem }) {
    return (
        <StyledItemCard>
            <ImageContainer>
                <img src={img} alt={title} />
            </ImageContainer>
            <Wrapper>
                {quantity > 1 ? (
                    <>
                        <h3>
                            {quantity} x {title}
                        </h3>
                        <Price>${price * quantity}</Price>
                    </>
                ) : (
                    <>
                        <h3>{title}</h3>
                        <Price>${price}</Price>
                    </>
                )}
                <button type="button" onClick={deleteItem}>
                    Delete
                </button>
            </Wrapper>
        </StyledItemCard>
    );
}

const colors = { accent: "#a9a3e7" };

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
    padding: 16px;
    justify-content: center;
`;

const StyledItemCard = styled.div`
    border: 5px solid ${colors.accent};
    border-radius: 5px;
    background-color: #fff;
    color: #222222;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    place-items: center;
`;

const Price = styled.p`
    font-weight: 700;
    font-size: 1.5rem;
    background-color: ${colors.accent};
    border-radius: 5px;
    padding: 0.3rem;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    place-items: center;
`;

const Message = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    font-size: 2rem;
`;

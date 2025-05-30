import { useOutletContext } from "react-router-dom";
import styled from "styled-components";

export default function Cart() {
    const { itemsInCart } = useOutletContext();

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
                        />
                    ))
                ) : (
                    <p>No items in cart</p>
                )}
            </Container>
        </>
    );
}

function ItemInCart({ img, title, price }) {
    return (
        <>
            <StyledItemCard>
                <ImageContainer>
                    <img src={img} alt={title} />
                </ImageContainer>
                <Wrapper>
                    <h3>{title}</h3>
                    <Price>${price}</Price>
                </Wrapper>
            </StyledItemCard>
        </>
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
    flex-direction: column;
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

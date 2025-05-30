import { useState } from "react";
import NavigationBar from "./NavigationBar";
import ItemCard from "./ItemCard";
import useFakeStoreAPI from "./hooks/useFakeStoreAPI";
import styled from "styled-components";

export default function Catalogue() {
    const { items, error, loading } = useFakeStoreAPI();
    const [itemsInCart, setItemsInCart] = useState([]);

    function handleAddToCart(itemId) {
        const selectedItem = items.find((item) => item.id == itemId);
        setItemsInCart((prevItems) => [...prevItems, selectedItem]);
    }

    if (loading) return <Message>Loading...</Message>;
    if (error) return <Message>A network error was encountered</Message>;

    return (
        <>
            <NavigationBar itemCount={itemsInCart.length} />
            <h1>Catalogue</h1>
            <Container>
                {items && items.length > 0 ? (
                    items.map((item) => (
                        <ItemCard
                            key={item.id}
                            img={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            addToCartClick={() => handleAddToCart(item.id)}
                        />
                    ))
                ) : (
                    <Message>No items available</Message>
                )}
            </Container>
        </>
    );
}

const Message = styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
    font-size: 2rem;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
    padding: 16px;
    justify-content: center;
`;

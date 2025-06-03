import ItemCard from "./ItemCard";
import useFakeStoreAPI from "./hooks/useFakeStoreAPI";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

export default function Catalogue() {
    const { items, error, loading } = useFakeStoreAPI();
    const { setItemsInCart } = useOutletContext();

    function handleAddToCart(itemId, quantity) {
        const selectedItem = items.find((item) => item.id == itemId);

        const itemWithQuantity = { ...selectedItem, quantity };

        setItemsInCart((prevItems) => {
            const isExistingItem = prevItems.find((item) => item.id === itemId);
            if (isExistingItem) {
                return prevItems.map((item) =>
                    item.id === itemId
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, itemWithQuantity];
            }
        });
    }

    if (loading) return <Message>Loading...</Message>;
    if (error) return <Message>A network error was encountered</Message>;

    return (
        <>
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
                            addToCartClick={(quantity) =>
                                handleAddToCart(item.id, quantity)
                            }
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
    transform: translate(-50%, -50%);
    font-size: 2rem;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
    padding: 16px;
    justify-content: center;

    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        padding: 1rem;
    }
`;

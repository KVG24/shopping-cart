import NavigationBar from "./NavigationBar";
import ItemCard from "./ItemCard";
import useFakeStoreAPI from "./hooks/useFakeStoreAPI";
import styled from "styled-components";

export default function Catalogue() {
    const { items, error, loading } = useFakeStoreAPI();

    if (loading) return <Message>Loading...</Message>;
    if (error) return <Message>A network error was encountered</Message>;

    return (
        <>
            <NavigationBar />
            <h1>Catalogue</h1>
            {items && items.length > 0 ? (
                items.map((item) => (
                    <ItemCard
                        key={item.id}
                        img={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        rating={item.rating}
                    />
                ))
            ) : (
                <Message>No items available</Message>
            )}
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

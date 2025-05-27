import { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import ItemCard from "./ItemCard";

export default function Catalogue() {
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setItems(json));
    }, []);

    return (
        <>
            <NavigationBar />
            <h1>Catalogue</h1>
            {items ? (
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
                <p>Loading...</p>
            )}
        </>
    );
}

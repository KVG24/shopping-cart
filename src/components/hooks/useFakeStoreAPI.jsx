import { useState, useEffect } from "react";

export default function useFakeStoreAPI() {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network error");
                }
                return response.json();
            })
            .then((response) => setItems(response))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { items, error, loading };
}

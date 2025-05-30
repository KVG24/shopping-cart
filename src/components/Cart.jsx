import NavigationBar from "./NavigationBar";

export default function Cart(items) {
    return (
        <>
            <NavigationBar />
            <h1>Shopping Cart</h1>
            {items && items.length > 0 ? (
                items.map((item) => (
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
        </>
    );
}

function ItemInCart(img, title, price) {
    return (
        <>
            <img src={img} />
            <h3>{title}</h3>
            <p>{price}</p>
        </>
    );
}

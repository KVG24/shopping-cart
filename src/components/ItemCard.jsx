export default function ItemCard({ img, title, description, price, rating }) {
    return (
        <>
            <div className="item-card">
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p>⭐{rating.rate}</p>
                <p>Reviews: {rating.count}</p>
            </div>
        </>
    );
}

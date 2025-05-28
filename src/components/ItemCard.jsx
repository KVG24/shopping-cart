import styled from "styled-components";

export default function ItemCard({ img, title, description, price, rating }) {
    return (
        <>
            <StyledItemCard>
                <img src={img} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <p>⭐{rating.rate}</p>
                <p>Reviews: {rating.count}</p>
            </StyledItemCard>
        </>
    );
}

const StyledItemCard = styled.div`
    max-width: 400px;
`;

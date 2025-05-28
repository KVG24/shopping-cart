import styled from "styled-components";

export default function ItemCard({ img, title, price, rating }) {
    return (
        <>
            <StyledItemCard>
                <ImageContainer>
                    <img src={img} alt={title} />
                </ImageContainer>
                <Wrapper>
                    <h3>{title}</h3>
                    <Price>${price}</Price>
                    <p>
                        Reviews: {rating.count} | ⭐{rating.rate}
                    </p>
                    <Input>
                        <MinusBtn>-</MinusBtn>
                        <input type="text" />
                        <PlusBtn>+</PlusBtn>
                    </Input>
                    <button type="button">Add to Cart</button>
                </Wrapper>
            </StyledItemCard>
        </>
    );
}

const colors = { accent: "#a9a3e7" };

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

const Input = styled.div`
    display: flex;
    height: 30px;
`;

const PlusBtn = styled.button`
    border-radius: 0 10px 10px 0;
    background-color: #464646;
    color: white;
    padding: 0 0.5rem;
`;

const MinusBtn = styled(PlusBtn)`
    border-radius: 10px 0 0 10px;
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

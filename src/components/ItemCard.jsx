import styled from "styled-components";
import { useState } from "react";

export default function ItemCard({
    img,
    title,
    price,
    rating,
    addToCartClick,
}) {
    const [quantity, setQuantity] = useState(1);

    function increaseQuantity() {
        setQuantity((prev) => prev + 1);
    }

    function decreaseQuantity() {
        if (quantity == 1) return;
        setQuantity((prev) => prev - 1);
    }

    function handleQuantityManual(e) {
        setQuantity(Number(e.target.value));
    }

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
                    <InputContainer>
                        <ControlBtn $minus onClick={decreaseQuantity}>
                            -
                        </ControlBtn>
                        <StyledInput
                            value={quantity}
                            onChange={handleQuantityManual}
                            type="text"
                            // restrict the user from entering anything other than numbers
                            // could've change input type to 'number' but there will be additional arrows for fine tuning which I already made myself
                            onKeyDown={(e) => {
                                const allowedKeys = [
                                    "Backspace",
                                    "Delete",
                                    "ArrowLeft",
                                    "ArrowRight",
                                    "Tab",
                                    "Home",
                                    "End",
                                ];

                                if (
                                    !/[0-9]/.test(e.key) &&
                                    !allowedKeys.includes(e.key)
                                ) {
                                    e.preventDefault();
                                }
                            }}
                        />
                        <ControlBtn $plus onClick={increaseQuantity}>
                            +
                        </ControlBtn>
                    </InputContainer>
                    <button
                        type="button"
                        onClick={() => addToCartClick(quantity)}
                    >
                        Add to Cart
                    </button>
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

const InputContainer = styled.div`
    display: flex;
    height: 30px;
`;

const StyledInput = styled.input`
    font-weight: 500;
    font-size: 1rem;
`;

const ControlBtn = styled.button`
    background-color: #464646;
    color: white;
    padding: 0 0.5rem;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    line-height: 1;
    display: flex;

    border-radius: ${({ $plus, $minus }) =>
        $plus ? "0 10px 10px 0" : $minus ? "10px 0 0 10px" : "0"};
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

import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styled from "styled-components";

export default function NavigationBar({ itemCount = 0 }) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/catalogue">Catalogue</Link>
                    </li>
                    <li>
                        <CartLink to="/cart" $count={itemCount}>
                            <ShoppingCart />
                            {itemCount > 0 && (
                                <CountBubble>{itemCount}</CountBubble>
                            )}
                        </CartLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

const CartLink = styled(Link)`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        padding: 0.5rem 0 0.5rem 0;
    }
`;

const CountBubble = styled.span`
    position: relative;
    top: -10px;
    background: #7266df;
    color: white;
    font-size: 0.7rem;
    border-radius: 50%;
    padding: 2px 6px;
`;

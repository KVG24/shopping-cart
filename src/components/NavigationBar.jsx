import { Link } from "react-router-dom";

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
                        <Link to="/cart">
                            {itemCount === 0 ? "Cart" : `Cart (${itemCount})`}
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

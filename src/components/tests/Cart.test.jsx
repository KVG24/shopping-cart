import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Cart from "../Cart";

// Mocks context outside react-router
import { createContext, useContext } from "react";

const MockOutletContext = createContext(null);

function MockOutletContextProvider({ value, children }) {
    return (
        <MockOutletContext.Provider value={value}>
            {children}
        </MockOutletContext.Provider>
    );
}

vi.mock("react-router-dom", async () => {
    const mod = await vi.importActual("react-router-dom");
    return {
        ...mod,
        useOutletContext: () => useContext(MockOutletContext),
    };
});

describe("Cart", () => {
    const mockContext = {
        itemsInCart: [
            {
                id: 1,
                title: "Item 1",
                price: 10,
                quantity: 2,
                image: "img1.jpg",
            },
            {
                id: 2,
                title: "Item 2",
                price: 5,
                quantity: 1,
                image: "img2.jpg",
            },
        ],
        setItemsInCart: vi.fn(),
    };

    it("renders cart items", () => {
        render(<Cart />, {
            wrapper: ({ children }) => (
                <MockOutletContextProvider value={mockContext}>
                    {children}
                </MockOutletContextProvider>
            ),
        });

        expect(screen.getByText(/2 x Item 1/)).toBeInTheDocument();
        expect(screen.getByText("2 X $10")).toBeInTheDocument();
        expect(screen.getAllByRole("button", { name: "Delete" })).toHaveLength(
            2
        );
    });

    it("shows 'No items in cart' if empty", () => {
        render(<Cart />, {
            wrapper: ({ children }) => (
                <MockOutletContextProvider
                    value={{ itemsInCart: [], setItemsInCart: vi.fn() }}
                >
                    {children}
                </MockOutletContextProvider>
            ),
        });

        expect(screen.getByText(/No items in cart/i)).toBeInTheDocument();
    });
});

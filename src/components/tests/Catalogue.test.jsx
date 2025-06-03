import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Catalogue from "../Catalogue";
import React from "react";
import useFakeStoreAPI from "../hooks/useFakeStoreAPI";

vi.mock("../hooks/useFakeStoreAPI", () => ({
    default: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useOutletContext: () => ({
            setItemsInCart: vi.fn(),
        }),
    };
});

describe("Catalogue", () => {
    it("displays loading state", () => {
        useFakeStoreAPI.mockReturnValue({
            loading: true,
            error: null,
            items: [],
        });

        render(<Catalogue />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it("displays error message", () => {
        useFakeStoreAPI.mockReturnValue({
            loading: false,
            error: true,
            items: [],
        });

        render(<Catalogue />);
        expect(screen.getByText(/network error/i)).toBeInTheDocument();
    });

    it("displays items", () => {
        useFakeStoreAPI.mockReturnValue({
            loading: false,
            error: null,
            items: [
                {
                    id: 1,
                    title: "Test Product",
                    image: "img.jpg",
                    price: 49.99,
                    rating: { rate: 4.5, count: 100 },
                },
            ],
        });

        render(<Catalogue />);
        expect(screen.getByText("Test Product")).toBeInTheDocument();
        expect(screen.getByText("$49.99")).toBeInTheDocument();
    });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ItemCard from "../ItemCard";

describe("ItemCard", () => {
    const mockItem = {
        img: "image.jpg",
        title: "Test Item",
        price: 9.99,
        rating: { count: 100, rate: 4.5 },
    };

    const addToCartClick = vi.fn();

    it("renders item data correctly", () => {
        render(<ItemCard {...mockItem} addToCartClick={addToCartClick} />);

        expect(screen.getByText("Test Item")).toBeInTheDocument();
        expect(screen.getByText("$9.99")).toBeInTheDocument();
        expect(screen.getByText(/Reviews: 100/)).toBeInTheDocument();
        expect(screen.getByAltText("Test Item")).toHaveAttribute(
            "src",
            "image.jpg"
        );
    });

    it("increases and decreases quantity", async () => {
        render(<ItemCard {...mockItem} addToCartClick={addToCartClick} />);
        const input = screen.getByRole("textbox");

        expect(input).toHaveValue("1");

        await userEvent.click(screen.getByText("+"));
        expect(input).toHaveValue("2");

        await userEvent.click(screen.getByText("-"));
        expect(input).toHaveValue("1");

        await userEvent.click(screen.getByText("-"));
        expect(input).toHaveValue("1"); // should not go below 1
    });

    it("calls addToCartClick with correct quantity", async () => {
        render(<ItemCard {...mockItem} addToCartClick={addToCartClick} />);
        const button = screen.getByRole("button", { name: /add to cart/i });

        await userEvent.click(button);
        expect(addToCartClick).toHaveBeenCalledWith(1);
    });
});

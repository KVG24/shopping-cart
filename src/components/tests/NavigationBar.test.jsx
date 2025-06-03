import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import NavigationBar from "../NavigationBar";

describe("NavigationBar", () => {
    const renderWithRouter = (itemCount) =>
        render(
            <MemoryRouter>
                <NavigationBar itemCount={itemCount} />
            </MemoryRouter>
        );

    it("renders nav links", () => {
        renderWithRouter(3);

        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/catalogue/i)).toBeInTheDocument();
    });

    it("displays correct cart count", () => {
        renderWithRouter(5);
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("hides cart count if zero", () => {
        renderWithRouter(0);
        expect(screen.queryByText("0")).not.toBeInTheDocument();
    });
});

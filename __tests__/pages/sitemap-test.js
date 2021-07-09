/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from '@testing-library/react';
import Sitemap from '../../pages/sitemap'

describe("Sitemap page", () => {
    it("should render", () => {
        render(<Sitemap />);
        const main = screen.getByRole("main");
        expect(main).toBeInTheDocument();
    });
});
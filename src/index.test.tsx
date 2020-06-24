import '@testing-library/jest-dom'

import React from "react";
import { render, screen } from "@testing-library/react";

import Component from "./index";


describe("@anae/react-template", () => {
    test("Hello World !", () => {
        render(<Component />);

        expect(screen.getByText("Hello World !")).toBeInTheDocument();
    })
})
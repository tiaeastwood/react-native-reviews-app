import React from "react";
import renderer from "react-test-renderer";
import Home from "../screens/Home";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("Home", () => {
	test("renders the home page", async () => {
		render(<Home />);
		expect(screen.getByText("Zelda: Breath of the Wild")).toBeTruthy();
		expect(screen.getByText("Persona 5 Royal")).toBeTruthy();
		expect(screen.getByText("Dragon Quest Treasures")).toBeTruthy();

		expect(screen.queryByText("Mario")).toBeFalsy();
	});
});

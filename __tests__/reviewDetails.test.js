import React from "react";
import ReviewDetails from "../screens/ReviewDetails";
import { render } from "@testing-library/react-native";

const params = {
	body: "test review",
	key: "1",
	rating: 1,
	title: "Test Game",
};

const getParam = jest.fn().mockImplementation((key) => params[key]);

describe("Review details", () => {
	test("params are passed to render the game review data", async () => {
		render(<ReviewDetails navigation={{ params, getParam }} />);
		expect(getParam).toHaveBeenCalled();
		expect(getParam).toHaveBeenCalledWith("title");
		expect(getParam).toHaveBeenCalledWith("body");
		expect(getParam).toHaveBeenCalledWith("rating");
		expect(getParam).not.toHaveBeenCalledWith("key");

		expect(getParam("title")).toBe("Test Game");
		expect(getParam("body")).toBe("test review");
		expect(getParam("rating")).toBe(1);
	});
});

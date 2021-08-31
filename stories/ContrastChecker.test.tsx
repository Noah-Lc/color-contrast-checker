import React from "react";

import { render, waitFor, screen, act } from "@testing-library/react";
import { ContrastChecker } from "./ContrastChecker";

import "@testing-library/jest-dom/extend-expect";

const mockData = { 
    name: "test"
    Hex: '#178DB3',
    Rgb: '023-141-179',
    Cmyk: '087-021-000-030',
    DarkRatio: 'pass',
    LightRatio: 'fail'
}; 

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    }),
) as jest.Mock;

it("renders element with crashing", async () => {
    await act( async () => render(<ContrastChecker color="@sddf4" name="test"></ContrastChecker>));
    expect(screen.getByTitle("error")).toHaveTextContent('Insert a correct hex color!');
});

it("renders element without crashing", async () => {
    await act( async () => render(<ContrastChecker color={mockData.Hex} name={mockData.name}></ContrastChecker>));
});

it("renders the correct centent", async () => {
    await act( async () => render(<ContrastChecker color={mockData.Hex} name={mockData.name}></ContrastChecker>));
    expect(screen.getByTitle("nameColor")).toHaveTextContent(mockData.name);
    expect(screen.getByTitle("hexColor")).toHaveTextContent(mockData.Hex);
});

it("renders the correct colors", async () => {
    await act( async () => render(<ContrastChecker color={mockData.Hex} name={mockData.name}></ContrastChecker>));
    
    await waitFor(() => screen.getByTitle('rgbColor'));
    await waitFor(() => screen.getByTitle('cmykColor'));
    await waitFor(() => screen.getByTitle('darkRatio'));
    await waitFor(() => screen.getByTitle('lightRatio'));

    expect(screen.getByTitle("rgbColor")).toHaveTextContent(mockData.Rgb);
    expect(screen.getByTitle("cmykColor")).toHaveTextContent(mockData.Cmyk);
    expect(screen.getByTitle("darkRatio")).toHaveTextContent(mockData.DarkRatio);
    expect(screen.getByTitle("lightRatio")).toHaveTextContent(mockData.LightRatio);
});

it("renders with correct way", async () => {
    render(<ContrastChecker color={mockData.Hex} name={mockData.name}></ContrastChecker>);

    expect(screen.getByTitle("loading")).toBeTruthy()

    await waitFor(() => screen.getByTitle('rgbColor'));
    await waitFor(() => screen.getByTitle('cmykColor'));
    await waitFor(() => screen.getByTitle('darkRatio'));
    await waitFor(() => screen.getByTitle('lightRatio'));

    expect(screen.queryByTitle("loading")).toBeNull();
});
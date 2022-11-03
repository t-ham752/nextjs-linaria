/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./Button.stories";
// ______________________________________________________
//
const { Default } = composeStories(stories);

describe("atoms/Button", () => {
  test("Default", () => {
    render(<Default />);
    expect(screen.getByRole("button")).toHaveTextContent("exe");
    expect(screen.getByRole("button")).toHaveAttribute("font-size", "32px");
    expect(
      screen.getByRole("button", { name: "Open modal" })
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Open modal")).toBeInTheDocument();
    expect(screen.getByRole("button")).toMatchSnapshot();
  });
});

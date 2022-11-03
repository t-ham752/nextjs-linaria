---
to: <%= abs_path %>/<%= component_name %>.test.tsx
---
/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";

import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./<%= component_name %>.stories";
// ______________________________________________________
//

const { Default } = composeStories(stories);

describe("<%= path %>", () => {
  test("Default", () => {
    render(<Default />);
    expect(screen).toBeTruthy();
  });
});

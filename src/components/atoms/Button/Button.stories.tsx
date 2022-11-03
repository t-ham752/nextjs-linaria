import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "./";

import { screen, userEvent } from "@storybook/testing-library";

export default { component: Button } as ComponentMeta<typeof Button>;

export const Default: ComponentStoryObj<typeof Button> = {
  args: { children: "exe", ariaLabel: "Open modal" },
};

Default.play = async () => {
  const button = screen.getByRole("button");

  await userEvent.click(button);

  // このテストはいつ走らせるのか
};

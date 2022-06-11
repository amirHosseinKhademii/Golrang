import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, TButton } from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args: TButton) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Subscribe",
  colorType: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Subscribe",
  colorType: "secondary",
};

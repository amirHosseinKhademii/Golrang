import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text, TText } from "../Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args: TText) => (
  <Text {...args} />
);

export const Stitle = Template.bind({});
Stitle.args = {
  children: "100$",
  classType: "stitle",
};

export const Sprice = Template.bind({});
Sprice.args = {
  children: "360$",
  classType: "sprice",
};

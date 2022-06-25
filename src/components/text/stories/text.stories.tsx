import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ElementType } from "react";

import { Text, TText } from "../Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = <T extends ElementType>(
  args: TText<T>
) => <Text {...args} />;

export const Stitle = Template.bind({});
Stitle.args = {
  children: "100$",
  classType: "stitle",
  as: "a",
  href: "#",
};

export const Sprice = Template.bind({});
Sprice.args = {
  children: "360$",
  classType: "sprice",
};

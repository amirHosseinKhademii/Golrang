import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Span, TSpan } from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Span",
  component: Span,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Span>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Span> = (args: TSpan) => (
  <Span {...args} />
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
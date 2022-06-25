import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";

export default {
  title: "Containers/HeadingSection",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = () => <Heading />;

export const Default = Template.bind({});

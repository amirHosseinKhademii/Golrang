import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TopSection } from "./TopSection";

export default {
  title: "Containers/TopSection",
  component: TopSection,
} as ComponentMeta<typeof TopSection>;

const Template: ComponentStory<typeof TopSection> = () => <TopSection />;

export const Default = Template.bind({});

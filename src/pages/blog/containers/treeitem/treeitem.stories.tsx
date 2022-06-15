import { ComponentStory, ComponentMeta } from "@storybook/react";
import  TreeItem  from "./TreeItem";

export default {
  title: "Containers/TreeItem",
  component: TreeItem,
} as ComponentMeta<typeof TreeItem>;

const Template: ComponentStory<typeof TreeItem> = () => <TreeItem />;

export const Default = Template.bind({});

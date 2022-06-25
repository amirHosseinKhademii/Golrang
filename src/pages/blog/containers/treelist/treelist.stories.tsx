import { ComponentStory, ComponentMeta } from "@storybook/react";
import TreeList from "./TreeList";
import TreeItem from "../treeitem/TreeItem";

export default {
  title: "Containers/TreeList",
  component: TreeList,
  argTypes: {
    numberOfChildren: {
        type: 'number',
        defaultValue: 4
    }
  }
} as ComponentMeta<typeof TreeList>;

// const Template: ComponentStory<typeof TreeList> = ({numberOfChildren, ...args}) => {
//     [...Array(numberOfChildren).keys()].map(() => {
//         return <TreeItem />
//     })
// };

const Template: ComponentStory<typeof TreeList> = () => <TreeList />;

export const Default = Template.bind({});

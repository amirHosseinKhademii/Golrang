import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header, {THeader} from "../Header";

export default {
    title: 'Components/Header',
    component: Header,
  } as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: THeader) => <Header {...args} />;

export const Black = Template.bind({});
Black.args = {
    children: "This is our heading section",
    size: 'xl',
    color: 'black'
};

export const Gray = Template.bind({});
Gray.args = {
    children: "This is our heading section",
    size: 'xl',
    color: 'gray'
};

export const XXLarge = Template.bind({});
XXLarge.args = {
    children: "This is our heading section",
    size: '2xl',
    color: 'black'
};

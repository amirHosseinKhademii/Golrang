import { ComponentMeta, ComponentStory } from "@storybook/react";
import Title from "../Title";

export default {
    title: 'Components/Title',
    component: Title,
  } as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Black = Template.bind({});
Black.args = {
    children: "Tailwind CSS v3.1: You wanna get nuts? Come on, let's get nuts!",
    size: 'base',
    color: 'black'
};

export const Gray = Template.bind({});
Gray.args = {
    children: "Headless UI v1.6, Tailwind UI team management, Tailwind Play improvements, and more",
    size: 'base',
    color: 'gray'
};

export const Large = Template.bind({});
Large.args = {
    children: "Headless UI v1.5: The One With Comboboxes",
    size: 'lg',
    color: 'black'
};


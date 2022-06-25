import { ComponentMeta, ComponentStory } from "@storybook/react";
import SubHeader, {TSubHeader} from "../SubHeader";

export default {
    title: 'Components/SubHeader',
    component: SubHeader,
  } as ComponentMeta<typeof SubHeader>;

const Template: ComponentStory<typeof SubHeader> = (args: TSubHeader) => <SubHeader {...args} />;

export const Black = Template.bind({});
Black.args = {
    children: "This is sub heading content",
    size: 'lg',
    color: 'black'
};

export const Gray = Template.bind({});
Gray.args = {
    children: "This is sub heading content",
    size: 'lg',
    color: 'gray'
};

export const Small = Template.bind({});
Small.args = {
    children: "This is sub heading content",
    size: 'sm',
    color: 'black'
};

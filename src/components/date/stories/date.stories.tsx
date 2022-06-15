import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Date, TDate } from "../Date";

export default {
    title: 'Components/Date',
    component: Date
} as ComponentMeta<typeof Date>

const Template: ComponentStory<typeof Date> = (args: TDate) => (
    <Date {...args} />
);

export const Active = Template.bind({});
Active.args = {
  children: "June 7, 2022",
  colorType: "active",
};

export const Deactive = Template.bind({});
Deactive.args = {
  children: "August 12, 2021",
  colorType: "deactive",
};
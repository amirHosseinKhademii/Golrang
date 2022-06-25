import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dropdown, TDropdown } from "../Dropdown";




export default {
    title: "Components/Dropdown",
    component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = ({ children, ...rest }: TDropdown) => (
    <Dropdown  >{children}</Dropdown>
);

const options = ["Option 1", "Option 2", "Option 3"];


export const Default = Template.bind({});
Default.args = {
    children: options.map((option, index) => <option key={index} value={index}>{option}</option>),
}
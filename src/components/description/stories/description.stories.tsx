import { ComponentMeta, ComponentStory } from "@storybook/react";
import Description, {TDescription} from "../Description";

export default {
    title: 'Components/Description',
    component: Description,
  } as ComponentMeta<typeof Description>;

const Template: ComponentStory<typeof Description> = (args: TDescription) => <Description {...args} />;

export const Black = Template.bind({});
Black.args = {
    children: "It’s been a while since I’ve written about what we’ve been working on so I have a lot to share! Too much honestly — my main motivator for even getting this update out is that we’ve got even more stuff coming next week, and I feel like I’m not allowed to share that stuff until I share all of the stuff we’ve already shipped.",
    size: 'base',
    color: 'black'
};

export const Gray = Template.bind({});
Gray.args = {
    children: "It’s been a while since I’ve written about what we’ve been working on so I have a lot to share! Too much honestly — my main motivator for even getting this update out is that we’ve got even more stuff coming next week, and I feel like I’m not allowed to share that stuff until I share all of the stuff we’ve already shipped.",
    size: 'base',
    color: 'gray'
};

export const Small = Template.bind({});
Small.args = {
    children: "It’s been a while since I’ve written about what we’ve been working on so I have a lot to share! Too much honestly — my main motivator for even getting this update out is that we’ve got even more stuff coming next week, and I feel like I’m not allowed to share that stuff until I share all of the stuff we’ve already shipped.",
    size: 'sm',
    color: 'black'
};


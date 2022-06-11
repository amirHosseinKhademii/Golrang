import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BlogFormContainer } from "../components/BlogForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/BlogForm",
  component: BlogFormContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BlogFormContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogFormContainer> = (args) => (
  <BlogFormContainer />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

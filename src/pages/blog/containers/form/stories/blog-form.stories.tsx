import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BlogForm } from "../components/BlogForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/BlogForm",
  component: BlogForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BlogForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogForm> = () => <BlogForm />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

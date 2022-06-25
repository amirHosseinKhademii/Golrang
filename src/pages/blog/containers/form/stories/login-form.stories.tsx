import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginForm } from "../components/LoginForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Containers/LoginForm",
  component: LoginForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

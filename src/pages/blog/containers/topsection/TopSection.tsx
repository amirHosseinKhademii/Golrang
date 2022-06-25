import { BlogForm } from "../form/components/BlogForm";
import { Heading } from "../heading/Heading";

export const TopSection = () => {
  return (
    <div className="flex flex-col justify-center">
      <Heading />
      <BlogForm />
    </div>
  );
};

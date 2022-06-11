import { Button } from "components/button/Button";
import { Input } from "components/input/Input";

export const BlogForm = () => {
  return (
    <div className="flex items-center space-x-4">
      <Input name="Test" />
      <Button colorType="primary">Subscribe</Button>
    </div>
  );
};

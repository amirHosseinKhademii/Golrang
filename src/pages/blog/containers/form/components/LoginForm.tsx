import { Button } from "components/button/Button";
import { Input } from "components/input/Input";

export const LoginForm = () => {
  return (
    <div className="flex items-center space-x-4">
      <Input name="Test"  label="userNmae"/>
      <Input name="Test"  label="PassWord"/>
      <Button colorType="primary">Login</Button>
      <Button colorType="secondary">Cancel</Button>
    </div>
  );
};

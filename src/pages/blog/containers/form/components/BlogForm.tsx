import { Button } from "components/button/Button";
import { Input } from "components/input/Input";
import React from "react";

export const BlogFormContainer = () => {
  return (
    <div className="flex items-center space-x-4">
      <Input name="Test" />
      <Button golrang="primary">Subscribe</Button>
    </div>
  );
};

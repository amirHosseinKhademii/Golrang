import Header from "components/header/Header";
import SubHeader from "components/subheader/SubHeader";

export const Heading = () => {
  return (
    <div className="flex items-center space-x-4 flex-col mb-4">
      <Header size="2xl" color="black">Welcome to my story book</Header>
      <SubHeader size="lg" color="gray">Developed by Ehsan Safari</SubHeader>
    </div>
  );
};

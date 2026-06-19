import { Button } from "@heroui/react";

const HeroPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to the Hero Page</h1>
      <Button>Hero Button</Button>
      <Button variant="solid">Hero Button</Button>
      <Button variant="outline">Hero Button</Button>
      <Button variant="ghost">Hero Button</Button>
      <Button variant="light">Hero Button</Button>
      <Button variant="primary">Hero Button</Button>
      <Button variant="secondary">Hero Button</Button>
      <Button variant="tertiary">Hero Button</Button>
      <Button variant="danger">Hero Button</Button>
    </div>
  );
};

export default HeroPage;

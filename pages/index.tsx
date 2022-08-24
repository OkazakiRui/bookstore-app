import { Button, Input } from "@mantine/core";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then(console.log);
  });
  return (
    <div>
      <h1>book store</h1>
      <div>
        <Input className="flex gap-2" placeholder="your name" />
        <Button>Start</Button>
      </div>
    </div>
  );
};

export default Home;

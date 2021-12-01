import { Box, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import React from "react";
import { LabeledInput, MySelect } from "components";

const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
  { value: "three", label: "Three" },
];

const Home: NextPage = () => {
  return (
    <>
      <Stack spacing={4}>
        <Box>
          <LabeledInput label="Email" placeholder="hoge@example.com" />
        </Box>
        <Box>
          <MySelect instanceId="my-select" options={options} />
        </Box>
      </Stack>
    </>
  );
};

export default Home;

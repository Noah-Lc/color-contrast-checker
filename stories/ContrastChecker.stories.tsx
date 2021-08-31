import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from 'storybook-addon-mock';


import { ContrastChecker } from "./ContrastChecker";

export default {
  title: "Components/Contrast Checker",
  component: ContrastChecker,
  decorators: [withMock],
} as ComponentMeta<typeof ContrastChecker>;

const Template: ComponentStory<typeof ContrastChecker> = (args) => <ContrastChecker {...args} />;

export const RatioChecker = Template.bind({});
RatioChecker.parameters = {
  mockData: [
      {
          url: '/api/Checker',
          method: 'POST',
          status: 200,
          response: {
            name: "test",
            Hex: '#178DB3',
            Rgb: '023-141-179',
            Cmyk: '087-021-000-030',
            DarkRatio: 'pass',
            LightRatio: 'fail'
          },
      },
  ],
};
RatioChecker.args = {
  color: "#275165",
  name: "Test Color"
};

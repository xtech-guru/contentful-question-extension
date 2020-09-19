import { FieldExtensionSDK } from "contentful-ui-extensions-sdk";
import { Question } from "./App";

let fieldValue: Question = {
  type: "single-choice",
  choices: [],
};

// @ts-ignore
export const contentfulSdkMock: FieldExtensionSDK = {
  window: {
    updateHeight: jest.fn(),
    startAutoResizer: jest.fn(),
    stopAutoResizer: jest.fn(),
  },
  // @ts-ignore
  field: {
    getValue() {
      return fieldValue;
    },
    setValue(value: Question) {
      fieldValue = value;
      return Promise.resolve(value);
    },
  },
};

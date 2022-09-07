import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "提交",
      },
    });

    // 默认的文本
    expect(wrapper.text()).toBe("提交");

    // 默认的颜色
    expect(
      wrapper
        .classes()
        .map((val) => val.replace("\b", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  // 自定义颜色
  test("color", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "提交",
      },
      props: {
        color: "red",
      },
    });
    expect(
      wrapper
        .classes()
        .map((val) => val.replace("\b", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});

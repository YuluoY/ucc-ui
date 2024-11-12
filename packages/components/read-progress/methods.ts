import { h, render } from "vue";
import type { UReadProgressProps } from "./types";
import { UReadProgress } from ".";

const UReadProgressFn = (props: UReadProgressProps) => {
  render(h(UReadProgress, props), document.body)
}

export default UReadProgressFn;
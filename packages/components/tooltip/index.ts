import { withInstall } from "@ucc-ui/utils";
import Tooltip from "./src/Tooltip.vue";
import { CTooltipContainerId } from "./types/const";
import { h, render } from "vue";

export const UTooltip = withInstall(Tooltip, _ => {
  return render(h('div', {id: CTooltipContainerId}), document.body);
});
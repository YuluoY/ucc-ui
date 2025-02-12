import { withInstall, type SFCWithInstall } from "../../utils";
import Tooltip from "./src/Tooltip.vue";
import { CTooltipContainerId } from "./types/const";
import { h, render } from "vue";

export const UTooltip: SFCWithInstall<typeof Tooltip> = withInstall(Tooltip, _ => {
  return render(h('div', {id: CTooltipContainerId}), document.body);
});
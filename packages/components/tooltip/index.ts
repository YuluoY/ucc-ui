import { withInstall } from "@ucc-ui/utils";
import Tooltip from "./src/Tooltip.vue";
import { CTooltipContainerId } from "./types/const";

export const UTooltip = withInstall(Tooltip, _ => {
  const tooltipContainer = document.createElement("div");
  tooltipContainer.setAttribute('id', CTooltipContainerId)
  document.body.appendChild(tooltipContainer);
});
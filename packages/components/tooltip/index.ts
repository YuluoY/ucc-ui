import { withInstall } from "@ucc-ui/utils";
import Tooltip from "./src/Tooltip.vue";
import type { App } from "vue";
import { CTooltipContainerId } from "./types/const";

export const UTooltip = withInstall(Tooltip, (app: App) => {
  const tooltipContainer = document.createElement("div");
  tooltipContainer.setAttribute('id', CTooltipContainerId)
  document.body.appendChild(tooltipContainer);
});
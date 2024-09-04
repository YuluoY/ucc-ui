import { withInstall } from "@ucc-ui/utils";
import Message from "./src/Message.vue";

export const UMessage = withInstall(Message, (app) => {
  app.config.globalProperties.$message = () => {
    // TODO
  };
});
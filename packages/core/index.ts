import components from "./components";
import { makeInstaller } from "@ucc-ui/utils";
import "@ucc-ui/theme/index.css";

const install = makeInstaller(components);

export * from "@ucc-ui/components";
export default install;
import components from "./components";
import { makeInstaller } from "../utils/index";
import "../theme/index.css";

const install = makeInstaller(components);

export * from "../components";
export default install;
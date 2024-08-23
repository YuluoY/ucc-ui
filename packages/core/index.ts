import components from "./components";
import { makeInstaller } from "../utils/index";
import "../theme/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

const install = makeInstaller(components);

export * from "../components";
export default install;
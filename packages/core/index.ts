import components from "./components";
import { makeInstaller } from "../utils/index";
import "../theme/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab);

const install = makeInstaller(components);

export * from "../components";
export * from '../locale'
export default install;
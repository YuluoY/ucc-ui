import { withInstall, type SFCWithInstall } from "../../utils";
import CodeEditor from "./src/CodeEditor.vue";

export const UCodeEditor: SFCWithInstall<typeof CodeEditor> = withInstall<typeof CodeEditor>(CodeEditor);
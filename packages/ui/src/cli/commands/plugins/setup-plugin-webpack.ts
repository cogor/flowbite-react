import { pluginName, pluginPath } from "../../consts";
import { addPluginToConfig } from "../../utils/add-plugin-to-config";
import { joinNormalizedPath } from "../../utils/normalize-path";

export async function setupPluginWebpack(configPath: string) {
  await addPluginToConfig({
    configKey: "plugins",
    configPath,
    pluginImportPath: joinNormalizedPath(pluginPath, "webpack"),
    pluginName,
  });
}

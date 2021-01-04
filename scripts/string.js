/**
 * 导出字符串插件
 */

import { createFilter } from "@rollup/pluginutils";

export default function string(options = {}) {
  options.include || (options.include = ["**/*.css", "**/*.html"]);
  const filter = createFilter(options.include, options.exclude);

  return {
    transform(code, id) {
      if (filter(id)) {
        return {
          code: `export default ${JSON.stringify(code)};`,
          map: { mappings: "" }
        };
      }
    }
  };
}

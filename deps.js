import {
  fileURLToPath,
  pathToFileURL,
} from "https://deno.land/std@0.71.0/node/fs.ts";
import {
  resolve,
  isAbsolute,
  dirname,
  relative,
  sep,
} from "https://deno.land/std@0.71.0/node/path.ts";
// import * as url from "https://deno.land/std@0.71.0/node/url.ts";
import * as mozilla from "https://dev.jspm.io/source-map";
import colorette from "https://dev.jspm.io/colorette";
const { cyan, gray, green, yellow, magenta } = colorette;
import lineColum from "https://dev.jspm.io/line-column";

export {
  fileURLToPath,
  pathToFileURL,
  resolve,
  isAbsolute,
  dirname,
  relative,
  sep,
  cyan,
  gray,
  green,
  yellow,
  magenta,
  colorette,
  lineColum,
  mozilla,
};

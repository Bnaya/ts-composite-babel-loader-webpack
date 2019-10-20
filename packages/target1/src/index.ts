// main field is "index"
// we have index.ts in the / of the packages
// No outdir is set.
// works on the IDE with out any build
// When the packages will get publish we can ship the d.ts and .js files,
// And it will just work
// But forces us to have specific layout for the package
import { common } from "@workspace/common";
import { utils } from "@workspace/utils";

// main field is "dist/index"
// Not good for developer experience, for IDE to work, building the package required
// But allows us more "clean" dist/src separation
// Setting "types": "src/index", will ""fix"" it. but that's not good when we want to publish
// To make webpack build work without .js files, we've added "typescriptSource": "src/index.ts" &
// mainFields: ['typescriptSource', 'browser', 'module', 'main']
import { withdist } from "@workspace/withdist";

common()
utils();
withdist()

// something with type
const a: string = "asd";

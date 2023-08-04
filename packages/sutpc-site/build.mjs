#!/usr/bin/env zx
import "zx/globals";
import { zip } from "zip-a-folder";
import { loadFile, writeFile } from "magicast";

import packageJson from "./package.json" assert { type: "json" };
const currentVersion = packageJson.version;

const version = await question(
  `请输入需要发布的版本号? (当前版本号为 ${currentVersion})`
);

await $`rm -rf dist`;

const updateVersion = async () => {
  const constantPath = "./src/constant.js";
  const constants = await loadFile(constantPath);
  constants.exports.VERSION = version;
  await writeFile(constants, constantPath);

  await Promise.all(
    ["./src/manifest.json", "./package.json"].map(async (path) => {
      const jsonData = await fs.readJSON(path);
      await fs.writeJson(path, { ...jsonData, version }, { spaces: "\t" });
    })
  );
};

await updateVersion();

await $`cp -r ./src ./sutpc-sites-f2e`;
await $`cp -r ./src ./sutpc-sites-user`;

const newPath = "./sutpc-sites-user/constant.js";
const constants = await loadFile(newPath);
constants.exports.isF2E = false;
await writeFile(constants, newPath);

await zip(`./dist/`, `./dist/aomi-sites-f2e-${version}.zip`);

await $`rm -rf ./sutpc-sites-f2e ./sutpc-sites-user`;

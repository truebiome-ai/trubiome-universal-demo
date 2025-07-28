// brands/index.js

import biocidin from "./biocidin.js";
import universal from "./universal.js";

const brandMap = {
  biocidin,
  universal,
};

export default function getBrandConfig(name = "universal") {
  return brandMap[name] || brandMap["universal"];
}

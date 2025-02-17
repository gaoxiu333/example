
import _ from "lodash";

// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈
// 哈哈


function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element
}
document.body.appendChild(component())
// 周りのライト

window.onload = function () {
  const light_element = document.getElementById("light");
  const section1_height = document.getElementById("section1").clientHeight;
  console.log("高さ", section1_height);
  for (a = 0; a < Math.floor(section1_height / 15) - 1; a++) {
    const new_element = document.createElement("div");
    const grandchild_element_1 = document.createElement("div");
    const grandchild_element_2 = document.createElement("div");
    const grandchild_element_3 = document.createElement("div");
    new_element.className = "around-light-child";
    grandchild_element_1.className = "around-light-grandchild-1";
    grandchild_element_2.className = "around-light-grandchild-2";
    grandchild_element_3.className = "around-light-grandchild-3";
    console.log("id", light_element);
    console.log("divdiv", new_element);
    light_element.appendChild(new_element);
    new_element.appendChild(grandchild_element_1);
    new_element.appendChild(grandchild_element_2);
    new_element.appendChild(grandchild_element_3);
  }
};

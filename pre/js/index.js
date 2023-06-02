// 周りのライト

const anivarlist = [];

let d = 0;

window.onload = function () {
  //セクションの高さ取得
  const light_element = document.getElementById("light");
  const section1_height = document.getElementById("section1").clientHeight;
  console.log("高さ", section1_height);

  //要素の追加
  for (a = 0; a < Math.floor(section1_height / 15) - 1; a++) {
    const new_element = document.createElement("div");
    const grandchild_element_1 = document.createElement("div");
    const grandchild_element_2 = document.createElement("div");
    const grandchild_element_3 = document.createElement("div");
    console.log("1", grandchild_element_2);
    console.log(a, new_element);
    new_element.classList.add("around-light-child");
    grandchild_element_1.classList.add("around-light-grandchild-1");
    grandchild_element_3.classList.add("around-light-grandchild-3");
    console.log("2", grandchild_element_2.style.cssText);

    if (a % 4 == 0) {
      grandchild_element_2.classList.add("around-light-grandchild-2n");
    } else {
      grandchild_element_2.classList.add("around-light-grandchild-2");
    }
    anivarlist.push(grandchild_element_2);

    light_element.appendChild(new_element);
    new_element.appendChild(grandchild_element_1);
    new_element.appendChild(grandchild_element_2);
    new_element.appendChild(grandchild_element_3);
  }

  console.log("aniba-", anivarlist);

  const change_list = () => {
    console.log("着火");
    for (a = 0; a < Math.floor(section1_height / 15) - 1 - 1; a++) {
      if (a % 4 == d) {
        // console.log("a=", a, "d=", d);
        // console.log("リスト", anivarlist);
        anivarlist[a].classList.remove("around-light-grandchild-2n");
        anivarlist[a].classList.add("around-light-grandchild-2");
        anivarlist[a + 1].classList.remove("around-light-grandchild-2");
        anivarlist[a + 1].classList.add("around-light-grandchild-2n");
      }
      // if (d == 3) {
      //   anivarlist[0].classList.remove("around-light-grandchild-2");
      //   anivarlist[0].classList.add("around-light-grandchild-2n");
      // }
    }
    d += 1;
    if (d == 4) {
      d = 0;
    }
    console.log(d);
  };
  setInterval(change_list, 500);
};

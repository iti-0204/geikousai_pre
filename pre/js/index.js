// 周りのライト

const light_fun = (id1, id2, section) => {
  const anivarlist_l = [];
  const anivarlist_r = [];

  let d = 0;
  //セクションの高さ取得
  const light_element_l = document.getElementById(id1);
  const light_element_r = document.getElementById(id2);
  const section1_height = document.getElementById(section).clientHeight;

  //要素の追加
  for (a = 0; a < Math.floor(section1_height / 15); a++) {
    const new_element_l = document.createElement("div");
    const new_element_r = document.createElement("div");
    const grandchild_element_1_l = document.createElement("div");
    const grandchild_element_2_l = document.createElement("div");
    const grandchild_element_3_l = document.createElement("div");
    const grandchild_element_1_r = document.createElement("div");
    const grandchild_element_2_r = document.createElement("div");
    const grandchild_element_3_r = document.createElement("div");

    new_element_l.classList.add("around-light-child");
    grandchild_element_1_l.classList.add("around-light-grandchild-1");
    grandchild_element_3_l.classList.add("around-light-grandchild-3");
    new_element_r.classList.add("around-light-child");
    grandchild_element_1_r.classList.add("around-light-grandchild-1");
    grandchild_element_3_r.classList.add("around-light-grandchild-3");

    if (a % 4 == 0) {
      grandchild_element_2_l.classList.add("around-light-grandchild-2n");
      grandchild_element_2_r.classList.add("around-light-grandchild-2n");
    } else {
      grandchild_element_2_l.classList.add("around-light-grandchild-2");
      grandchild_element_2_r.classList.add("around-light-grandchild-2");
    }
    anivarlist_l.push(grandchild_element_2_l);
    anivarlist_r.push(grandchild_element_2_r);

    light_element_l.appendChild(new_element_l);
    new_element_l.appendChild(grandchild_element_1_l);
    new_element_l.appendChild(grandchild_element_2_l);
    new_element_l.appendChild(grandchild_element_3_l);

    light_element_r.appendChild(new_element_r);
    new_element_r.appendChild(grandchild_element_1_r);
    new_element_r.appendChild(grandchild_element_2_r);
    new_element_r.appendChild(grandchild_element_3_r);
    console.log("左", light_element_l);
    console.log("右", light_element_r);
  }

  const change_list = () => {
    for (a = 0; a < Math.floor(section1_height / 15) - 1; a++) {
      if (a % 4 == d) {
        anivarlist_l[a].classList.remove("around-light-grandchild-2n");
        anivarlist_l[a].classList.add("around-light-grandchild-2");
        anivarlist_l[a + 1].classList.remove("around-light-grandchild-2");
        anivarlist_l[a + 1].classList.remove("around-light-grandchild-3");
        anivarlist_l[a + 1].classList.add("around-light-grandchild-2n");

        anivarlist_r[a].classList.remove("around-light-grandchild-2n");
        anivarlist_r[a].classList.add("around-light-grandchild-2");
        anivarlist_r[a + 1].classList.remove("around-light-grandchild-2");
        anivarlist_r[a + 1].classList.remove("around-light-grandchild-3");
        anivarlist_r[a + 1].classList.add("around-light-grandchild-2n");
      }
    }
    d += 1;
    if (d == 4) {
      d = 0;
      anivarlist_l[0].classList.remove("around-light-grandchild-2");
      anivarlist_l[0].classList.add("around-light-grandchild-2n");
      anivarlist_l[anivarlist_l.length - 1].classList.remove(
        "around-light-grandchild-2n"
      );
      anivarlist_l[anivarlist_l.length - 1].classList.add(
        "around-light-grandchild-2"
      );
      anivarlist_r[0].classList.remove("around-light-grandchild-2");
      anivarlist_r[0].classList.add("around-light-grandchild-2n");
      anivarlist_r[anivarlist_r.length - 1].classList.remove(
        "around-light-grandchild-2n"
      );
      anivarlist_r[anivarlist_r.length - 1].classList.add(
        "around-light-grandchild-2"
      );
    }
  };
  setInterval(change_list, 200);
};

window.onload = function () {
  light_fun("light-left-1", "light-right-1", "section1");
  light_fun("light-left-2", "light-right-2", "section2");
};

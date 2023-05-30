var state = 0;
var qElem = document.getElementById("q");
var dElem = document.getElementById("department");

function qView(){
    $(".chart-top").css({"display": "none"})
    $(".question").css({
        "display": "block",
        "visibility": "visible",
        "opacity": "1",
    })
    $(".answer-container").css({"display": "flex"})
    // $(".wave-box").css({"display": "none"})
    // $(".wave").css({"display": "none"})
    qElem.textContent = "作品を作りたい?"
}

function qSet(newState, q){
    state = newState;
    qElem.textContent = q;
    state = newState;
}

function yourDepartment(department){
    console.log("a");
    $(".depa-view").css({"display": "block"})
    $(".question").css({"visibility": "collapse", "opacity": "0"})
    dElem.textContent = department;
}

$("#start-button").on("click", qView);
$("#yes").on("click", function(){
    switch(state){
        case 0: qSet(2, "pcでがっつり制作したい!!"); break;
        case 1: qSet(3, "運動するのは好き!!"); break;
        case 2: qSet(5, "新しいことを学ぶのは好きだ。"); break;
        case 3: yourDepartment("体育祭"); break;
        case 4: qSet(7, "お酒は好き？"); break;
        case 5: qSet(9, "プログラミングをしたい"); break;
        case 6: qSet(11, "家具が好き!!"); break;
        case 7: yourDepartment("バー"); break;
        case 8: yourDepartment("ディレクション"); break;
        case 9: yourDepartment("Web"); break;
        case 10: yourDepartment("PA"); break;
        case 11: yourDepartment("インテリア"); break;
    }
});
$("#no").on("click", function(){
    switch(state){
        case 0: qSet(1, "目立ちたい!!"); break;
        case 1: qSet(4, "芸工祭当日に活動したい!"); break;
        case 2: qSet(6, "スペースデザイン(空間デザイン)に興味がある"); break;
        case 3: yourDepartment("ステージ"); break;
        case 4: qSet(8, "インドア派？？？"); break;
        case 5: qSet(10, "音楽が好き！"); break;
        case 6: yourDepartment("カフェ"); break;
        case 7: yourDepartment("ブース"); break;
        case 8: yourDepartment("グラフィック"); break;
        case 9: yourDepartment("ムービー"); break;
        case 10: yourDepartment("エクステリア"); break;
        case 11: yourDepartment("ワークショップ"); break;
    }
});
$("#retry-button").on("click", function(){
    state = 0;
    $(".chart-top").css({"display": "block"})
    $(".question").css({"display": "none"})
    $(".depa-view").css({"display": "none"})
})
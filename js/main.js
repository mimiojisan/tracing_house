const button = document.getElementById("menu-trigger");
const header = document.getElementById("header");
const mask = document.getElementById("mask");
const navilink = document.querySelectorAll("#navi a");


// ボタンが押されたらクラスを追加する
button.addEventListener('click', function (){
    if ( header.classList.contains("header") == true ) {
    header.classList.remove("header");
    } else {
    header.classList.add("header");
    };
 });

//  maskの部分をクリックしたらメニューを閉じる
mask.addEventListener('click', function() {
    header.classList.remove("header");
})

// リンクをクリックしたらメニューを閉じる
navilink.forEach(function(link){
    link.addEventListener('click', function() {
        header.classList.remove("header");
    });
});


const topPage = document.getElementById("return-top");
const original_opacity = topPage.style.opacity;
const original_transition = topPage.style.transition;

// topに戻るボタンを非表示にする
topPage.style.opacity = "0";

// 一定数スクロールされるとtopに戻るボタンを表示する
window.addEventListener("scroll", function() {
     if (window.scrollY > 700) {
        topPage.style.opacity = original_opacity;
        topPage.style.transition = original_transition;
    } else {
        topPage.style.opacity = "0";
        topPage.style.transition = original_transition;
    };
});

// topに戻るボタンが押されたらクラスを追加する
const html = document.documentElement;
topPage.addEventListener('click', () => {
  html.classList.add("to-top");
});
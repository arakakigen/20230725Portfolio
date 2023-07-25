//ハンバーガーメニューをopen・closeする関数
function toggle_open(ElementId1,ElementId2){

    var toggle_btn = document.getElementById(ElementId1);
    var background = document.getElementById(ElementId2);
    toggle_btn.classList.toggle("open");
    background.classList.toggle("background");
}
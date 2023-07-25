
//サーバーにデータを送信・取得する関数
function http(categoryId){

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
   if(this.readyState == 4 && this.status == 200){
      var myobj = JSON.parse(this.responseText);
      product_sort(categoryId,myobj);
      toggle_open('left','background');
    }
};

xmlhttp.open("GET","./php/decode.php",true);
xmlhttp.send();

}

//取得したデータのカテゴリをユーザーが選択したカテゴリに絞り込む関数
function product_sort(categoryId,myobj){

   uid = document.getElementById("uid");
   id = document.getElementsByClassName("demo1");
   uid.innerHTML = "";  //カテゴリを複数回選択した場合にデータが混合しないようにからの文字列で一度書き換える

    for(var i=0;i<myobj.length;i++){

      if(myobj[i].category == categoryId){ 

          var template = tag(myobj[i].name,myobj[i].nedan,myobj[i].src);
          uid.innerHTML += template; //tag関数からの戻り値をHTMLに出力

      }
    }
}

//引数で取得したデータとテンプレートリテラルを組み合わせる関数
function tag(name,nedan,src){

  var template = `<li>
  <p><img src="${src}" id="demo1"  width="300" height="300" class="shopping"></img></p>
  <p class="shopping" id="demo1">${name}</p>
  <p class="shopping" id="demo1">${nedan}</p>
  <a href="javascript:void(0)" id="shopbutton">買い物かごに入れる</a>
  </li>`
 return template;
  
}



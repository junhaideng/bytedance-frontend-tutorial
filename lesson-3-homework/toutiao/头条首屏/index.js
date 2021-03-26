(function(){
  // 简单实现鼠标进入 头条产品时候的菜单
let item_more = document.querySelector("li.item.more>a")
console.log(item_more)

let layer = document.querySelector("li.item.more>div");
console.log(layer)

function show(){
  layer.style.visibility = "visible";
}

function hidden(){
  layer.style.visibility = "hidden";
}

item_more.addEventListener("mouseenter", show)
layer.addEventListener("mouseleave", hidden)
}())
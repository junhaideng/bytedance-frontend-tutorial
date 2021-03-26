console.log("load app.js");
document.querySelector("#clear").addEventListener("click", clear);

// 添加TODO
function handleAddTODO() {
  const list = document.querySelector("div.tasksBoard > ul");

  console.log("add todo");
  let input = document.querySelector("input[name=task]");
  if (input.value.trim() === "") {
    return;
  }

  const tmpl = `<li class="task">
  <button class="delete" onclick="handleDeleteTODO(event)">x</button>
  <input type="checkbox" onclick="handleCheck(event)"> <span>${input.value}</span>
</li>`;

  list.insertAdjacentHTML("beforeend", tmpl);
  input.value = "";
}

// 删除TODO
function handleDeleteTODO(event) {
  // 删除按钮元素的父元素，也就是li元素
  event.target.parentNode.remove();
}

// 删除所有的todo
function clear() {
  const list = document.querySelector("div.tasksBoard > ul");

  let children = list.childNodes;

  // 删除ul下面的子元素
  // 注意始终删除第一个
  // 因为删除一个子元素之后，子元素的个数会改变，children会改变
  for (let i = children.length - 1; i >= 0; i--) {
    list.removeChild(children[i]);
  }
}

//
function handleCheck(event) {
  let span = event.target.nextElementSibling;
  if (span.className == "checked") {
    span.className = "";
  } else {
    span.className = "checked";
  }
}

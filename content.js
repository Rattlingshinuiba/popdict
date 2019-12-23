
window.onload = function() {
  //
  document.body.insertAdjacentHTML('beforeend', `<progress id="progress4page" value="0" max="100"></progress>`)
  const window_height = document.documentElement.clientHeight;
  const doc_height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  window.addEventListener("scroll", () => {
    // refer to https://javascript.info/size-and-scroll-window
    let current_position = window.pageYOffset;
    let progress = Math.ceil(
      (current_position / (doc_height - window_height)) * 100
    );
    let bar = document.querySelector("#progress4page");
    if (bar) {
      bar.value = progress;
      bar.style.opacity = `${progress}%`;
    }
  });
};

function create_bubble(e) {
  //选中文本
  var word = document
    .getSelection()
    .toString()
    .trim();

  let urls = {
    韦氏: `http://www.learnersdictionary.com/definition/${word}`,
    Vocabulary: `https://www.vocabulary.com/dictionary/${word}`,
    URBAN: `https://www.urbandictionary.com/define.php?term=${word}`,
    词源: `https://www.etymonline.com/word/${word}`,
    剑桥: `https://dictionary.cambridge.org/search/english-chinese-simplified/direct/?q=${word}`
  };

  //得到单词坐标
  pos = position_cursor(e);
  console.log(pos);
  //造个container,容纳btns;
  var box = document.createElement("div");
  box.id = "_container";
  box.style.top = `${pos.y - 10}px`;
  box.style.left = `${pos.x - 10}px`;
  //造小容器容纳每个<a>;
  for (const [name, url] of Object.entries(urls)) {
    box.insertAdjacentHTML(
      "beforeend",
      `
    <a href="${url}" id="dict_link" target="_blank">${name}</button>
        `
    );
  }

  document.body.append(box);

  box.addEventListener("mouseleave", function() {
    //如果查询按钮被点击,那么该按钮已无用处,所以隐藏
    document.body.removeChild(box);
  });
}

function position_cursor(e) {
  var x = e.pageX;
  var y = e.pageY;
  return { x: x, y: y };
}

window.addEventListener("dblclick", function(e) {
  setTimeout(create_bubble(e), 800);
});

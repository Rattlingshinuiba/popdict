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

  var bubble = document.createElement("div");
  bubble.setAttribute("class", "bublle4dict");
  bubble.style.top = `${pos.y-10}px`;
  bubble.style.left = `${pos.x-10}px`;

  //造个container,容纳btns;
  var box = document.createElement("ul");
  box.setAttribute("id", "_container");
  //造小容器容纳每个<a>;
  for (const [name, url] of Object.entries(urls)) {
    box.insertAdjacentHTML(
      "beforeend",
      `
        <li class='_btns'>
    <a href="${url}" target="_blank">${name}</a>
</li>
        `
    );
  }

  bubble.appendChild(box);
  document.body.append(bubble);

  bubble.addEventListener("mouseleave", function() {
    //如果查询按钮被点击,那么该按钮已无用处,所以隐藏
    document.body.removeChild(bubble);
  });
}

function position_cursor(e) {
  var x = e.pageX;
  var y = e.pageY;
  return { x: x, y: y };
}

window.addEventListener("dblclick", function(e) {
  setTimeout(create_bubble(e), 800);
}); //当鼠标单击后,会出现bubble;

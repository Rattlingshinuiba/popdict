/*function test(e) {
    bubble = create_bubble();
    document.body.append(bubble);
    var text = document.getSelection().toString().trim();
    var text_base_node = document.getSelection().baseNode;
    console.log(text);
    
    newSpan = document.createElement('span'); //新建一个span tag用来wrap around text.
    newSpan.appendChild( document.createTextNode(text) );// Append "Lorem Ipsum" text to new span:
    console.log(newSpan);

    var d = document.createDocumentFragment();
    var div = document.createElement("div"); //创建一个div tag;
    document.body.appendChild(div);
    div.id = "heel";
    div.innerText = "你好呀" + text;
    console.log(div);
  }
document.onmouseup = test;*/
  

function create_bubble(e) {
    //选中文本
    var word = document.getSelection().toString().trim();

    pos = get_cursor_pos(e);
    console.log(pos);
    var bubble = document.createElement('div');
    bubble.setAttribute('class', 'bublle_for_dict');
    bubble.style.top = `${pos.y-10}px`;
    bubble.style.left = `${pos.x-10}px`;

    //造个container,容纳btns;
    var box = document.createElement('ul');
    box.setAttribute('id', '_container')
    //造小容器容纳每个<a>;
    var box_mw = document.createElement('li');
    var box_voca = document.createElement('li');
    var box_urban = document.createElement('li');
    var box_ety = document.createElement('li');
    var box_cam = document.createElement('li');
    //在bubble中加入child <a> 按钮;
    var btn_mw = document.createElement('a');
    btn_mw.textContent="MW";
    btn_mw.setAttribute('href', `http://www.learnersdictionary.com/definition/${word}`);
    btn_mw.setAttribute('target', "_blank");
    btn_mw.setAttribute('class', '_btns')
    //在bubble中加入child <a> 按钮;
    var btn_voca = document.createElement('a');
    btn_voca.textContent="Voca";
    btn_voca.setAttribute('href', `https://www.vocabulary.com/dictionary/${word}`);
    btn_voca.setAttribute('target', "_blank");
    btn_voca.setAttribute('class', '_btns')
    //
    var btn_urban = document.createElement('a');
    btn_urban.textContent="Urban";
    btn_urban.setAttribute('href', `https://www.urbandictionary.com/define.php?term=${word}`);
    btn_urban.setAttribute('target', "_blank");
    btn_urban.setAttribute('class', '_btns')
    //
    var btn_ety = document.createElement('a');
    btn_ety.textContent = "Ety";
    btn_ety.setAttribute('href', `https://www.etymonline.com/word/${word}`);
    btn_ety.setAttribute('target', "_blank");
    btn_ety.setAttribute('class', '_btns')
    //cam buttom
    var btn_cam = document.createElement('a');
    btn_cam.textContent = "Cam";
    btn_cam.setAttribute('href', `https://dictionary.cambridge.org/search/english-chinese-simplified/direct/?q=${word}`);
    btn_cam.setAttribute('target', "_blank");
    btn_cam.setAttribute('class', '_btns')
    //
    //var mw_btn = document.createElement('a');
    //mw_btn.setAttribute('class', 'btn_for_MW');
    //mw_btn.textContent = "韦氏"
    box_mw.appendChild(btn_mw);
    box_voca.appendChild(btn_voca);
    box_urban.appendChild(btn_urban);
    box_ety.appendChild(btn_ety);
    box_cam.appendChild(btn_cam);
    //
    box.appendChild(box_mw);
    box.appendChild(box_voca);
    box.appendChild(box_urban);
    box.appendChild(box_ety);
    box.appendChild(box_cam);
    //
    bubble.appendChild(box);
    //bubble.addEventListener("click", function () {
    //    window.open(`http://www.learnersdictionary.com/definition/${word}`, '_blank')
   // });
    //bubble.appendChild(mw_btn);

    /*var speakButton = document.createElement('button');
    speakButton.setAttribute('class', 'wdAddButton'); // 悬浮单词后, 出现的按钮们;
    speakButton.textContent = 'Audio';
    speakButton.style.marginBottom = "4px";
    speakButton.addEventListener("click", function () {
        bubble_handle_tts(current_lexeme);
    });
    bubbleDOM.appendChild(speakButton);*/

    bubble.addEventListener('mouseleave', function (e) {
        //
    });
    bubble.addEventListener('mouseenter', function (e) {
    //
});

    document.body.append(bubble);

   bubble.addEventListener("mouseleave", function () { //如果查询按钮被点击,那么该按钮已无用处,所以隐藏
      document.body.removeChild(bubble);
 }); 
}

function get_cursor_pos(e) {
    var x = e.pageX;
    var y = e.pageY;
    return {x: x,
    y: y}
}


window.addEventListener("dblclick", function(e) {setTimeout(create_bubble(e), 800)}); //当鼠标单击后,会出现bubble;


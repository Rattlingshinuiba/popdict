'use strict';
// bypass FT
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details){
    console.debug(details.requestHeaders);
    var is_there_refer = false;
    var requestHeaders = details.requestHeaders;
    requestHeaders = requestHeaders.map(
      function(header) {
        if (header.name === "Referer") {
        header.value = 'https://www.facebook.com/';
        console.debug("该网站从facebook打开");
        is_there_refer = true;
      };
        if (header.name === "User-Agent") {
          header.value = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
        };
        if (header.name === "Cookie") {
          header.value = ""
        };
      return header;
    }
    );
    if (!is_there_refer) {
      requestHeaders.push(
        {
          name: 'Referer',
          value: 'https://www.facebook.com/'
        }
      );
      console.debug("没有设置referer,新设置为facebook")
    };
    
    return { requestHeaders: requestHeaders }
},

{
  urls: ['*://*.ftchinese.com/story/*', '*://*.ft.com/*'],
  types: ['main_frame']
},

['blocking', 'requestHeaders', 'extraHeaders']
 // extraHeaders才能使之生效
);

// bypass medium
 chrome.webRequest.onBeforeSendHeaders.addListener(
 function(details){
  var is_there_refer = false;
  var requestHeaders = details.requestHeaders;
  requestHeaders = requestHeaders.map(
  function(header) {
      if (header.name === "Referer") {
      header.value = 'https://twitter.com/';
      console.debug("该网站从twitter打开");
      is_there_refer = true;
    };
    return header;
  }
  );
  if (!is_there_refer) {
    requestHeaders.push(
      {
        name: 'Referer',
        value: 'https://twitter.com/'
      }
    );
    console.debug("没有设置referer,新设置为twitter")
  };
  
  return { requestHeaders: requestHeaders }

 },
 //
 {urls: ['*://*.medium.com/*'],
 types: ['main_frame']
},
//
 ['blocking', 'requestHeaders', 'extraHeaders']
 )

  //查词用韦氏
chrome.contextMenus.create({
  title: 'A_韦氏学习者词典',
  contexts: ['selection'],
  onclick: sele => {
    var word = sele.selectionText;
    chrome.tabs.create({url: `http://www.learnersdictionary.com/definition/${word}`})
  }
});



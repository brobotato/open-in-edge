// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.s

// A generic onclick callback function.
function genericOnClick(info, tab) {
  var newURL = "microsoft-edge:" + info.linkUrl;
  chrome.tabs.create({ url: newURL });
  setTimeout(function(){
    chrome.tabs.getSelected(function(tab) {
    chrome.tabs.remove(tab.id, function() { });
    }
  );}, 500);
}

chrome.contextMenus.onClicked.addListener(genericOnClick);

var context = "link";
var title = "Open in Edge";
var id = chrome.contextMenus.create({"title": title, "contexts":[context], "id": "OpenInEdge"});

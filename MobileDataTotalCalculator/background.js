// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
      file: 'jquery-3.5.1.min.js'
  }, function() {
      // Guaranteed to execute only after the previous script returns
      chrome.tabs.executeScript({
          file: 'work.js'
      });
  });
});
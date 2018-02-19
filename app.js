console.log('Hello World!');

// setInterval(function() {
//   chrome.tabs.query({
//     active: true, 
//     lastFocusedWindow: true
//   }, function(tabs) {
//     console.log('chrome.tabs.query');
//     console.log(tabs[0].url);
//     console.log('tabs: ', tabs)
//   })  
// }, 5000);

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//   console.log('onUpdated');
//   console.log('tabId: ', tabId);
//   console.log('changeInfo: ', changeInfo);
//   console.log('tab: ', tab);
// })


chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.query({
    active: true, 
    currentWindow: true
  }, function(tab) {
    // console.log('chrome.tabs.query');
    // console.log(tab);
    // if (tab[0].url.indexOf('netflix')) {
    //   console.log('YOU\'RE IN NETFLIX!');
    // }
  })  
})

// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // console.log('updated!')
  // console.log('tabId: ', tabId);
  // console.log('changeInfo: ', changeInfo);
  // console.log('tab: ', tab);
// });
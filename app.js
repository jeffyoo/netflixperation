console.log('Hello World!');

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
    if (tab[0].url !== undefined && tab[0].status === 'complete') {
      if (tab[0].url.indexOf('netflix') !== -1) {
        console.log('You are in Netflix.com');
        console.log(tab[0].url);


        chrome.tabs.executeScript(null, {
          file: "getPagesSource.js"
        })


      } else {
        console.log('Not Netflix');
        console.log(tab[0].url);
      }
    }
  })  
})
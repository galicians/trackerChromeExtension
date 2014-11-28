$(function() {
  $('#addAmount').click(function () {
      chrome.storage.sync.get('total', function (items) {
        var newTotal = 0;
        if(items.total) {
            newTotal += parseInt(items.total);
        }
        var amount
      }
  });
});
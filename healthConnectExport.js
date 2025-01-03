var jsonData = JSON.parse(aggregatedhealthdata);
var entries = [];
var regex = /^(\w+Record)_(\w+)$/;

if (jsonData) {
  jsonData.forEach(function(data) {
    var lines = [];
    var timestamp = new Date(data.startTime || Date.now()).getTime();
    var excludedFields = ['startTime', 'endTime'];

    Object.keys(data).forEach(function(key) {
      var value = data[key];
      if (excludedFields.indexOf(key) === -1 && value !== null && value !== undefined) {
        var match = key.match(regex);
        if (match) {
          var recordType = match[1];
          var measurement = match[2];
          lines.push('healthConnect,recordType=' + recordType + ' ' + measurement + '=' + value + ' ' + timestamp);
        }
      }
    });
    
    entries.push(lines.join('\n'));
  });
} 		

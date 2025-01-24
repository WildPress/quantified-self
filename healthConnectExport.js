var jsonData = JSON.parse(aggregatedhealthdata)
var entries = [];

if (jsonData) {
  jsonData.forEach(function(data) {
    var lines = [];
    var timestamp = new Date(data.startTime || Date.now()).getTime();
    var excludedFields = ['startTime', 'endTime'];

    Object.keys(data).forEach(function(key) {
      var value = data[key];
      if (excludedFields.indexOf(key) === -1 && value !== null && value !== undefined) {
        lines.push('healthConnect ' + key + '=' + value + ' ' + timestamp);
      }
    });

    entries.push(lines.join('\n'));
  });
}

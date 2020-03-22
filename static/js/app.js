var tableData = data;

var button = d3.select("#filter-btn");

button.on('click', function(){
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');
    var date = inputValue.toString();
    console.log(date);
    var filteredData = tableData.filter(item => item.datetime === date);
    console.log(filteredData);
    var tbody = d3.select('#ufo-table>tbody');
    tbody.html('');
    
    Object.values(filteredData).forEach((item) => {
        var tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    });
});

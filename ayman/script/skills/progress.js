var dataJson = [
    {
        "name": "Web development",
        "width": "60%"
    }, {
        "name": "Blueprint",
        "width": "75%"
    }, {
        "name": "PHP",
        "width": "85%"
    },{
        "name": "C++/C#",
        "width": "65%"
    }, {
        "name": "Python",
        "width": "55%"
    },
    {
        "name": "Flutter",
        "width": "50%"
    }
];

var raw_html = "";
var raw_progress = "";

dataJson.forEach(function(item){
    raw_progress += `<p class="txt-color">${item.name}</p>
    <div class="progress mb-5 p-0">
      <div class="filled-progress-bar" style="width: ${item.width}">${item.width}</div>
    </div>`
    createRow(raw_progress)
})

function createRow(data) {
    raw_html += "<div class=\"col-lg-6 col-sm-10 col-md-6\">".concat(data, "</div>");
    raw_progress = "";
}
document.getElementById('progress-data').innerHTML = raw_html;

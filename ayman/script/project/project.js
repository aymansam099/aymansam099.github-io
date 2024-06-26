var dataJson = [
  {
    "img": "https://cdn-icons-png.flaticon.com/128/644/644667.png",
    "title": "Application Gestion agricole pour aider les agriculteurs  a suivre leurs betails",
    "paragraph": "HTML-CSS-PHP",
    "url": ""
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/5806/5806364.png",
    "title": "First person shoote Game",
    "paragraph": "Blueprint,Unreal Engine",
    "url": ""
  },
  {
    "img": "https://cdn-icons-png.flaticon.com/128/1021/1021264.png",
    "title": "Endless Runner",
    "paragraph": "Blueprint,Unreal Engine",
    "url": ""
  }
];

var raw_html = "";
dataJson.forEach(function (item) {
  raw_html += `<div
    class="col-lg-5"
    style="min-height: fit-content; cursor: pointer;
    "
    >
    <div
      style="padding: 12px; height: 200px;"
      class="project-card progress mb-5 align-items-center">
      <div class="mt-3 ms-3 row">
    
        <h2 style="color: txt-color; font-size: medium"><b>${item.title}</b></h2>
        <p style="color: txt-color; font-size: small">
        ${item.paragraph}
        </p>
        <a
        rel="noopener"
        href="${item.url}"
        target="_blank"
        title="${item.title}">
        <button type="button" class="btn btn-secondary">
          View
        </button></a>
      </div>
    </div>
    </div>`;
})
document.getElementById('project-container').innerHTML = raw_html;
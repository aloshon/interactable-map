let stateDetails = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'path') {
		console.log(e.target);
		console.log(e.target.dataset);
		console.log(e.target.fill);
    let content = e.target.dataset.name;
    document.getElementById("details-box").innerHTML = content;
    document.getElementById("details-box").style.opacity = "100%";
  }
  else {
    document.getElementById("details-box").style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  stateDetails.style.top = (y + 20) + 'px';
  stateDetails.style.left = (x) + 'px';
};
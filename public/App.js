"use strict";

/*For now hardcoded information in MAP - Later will move it JSON file*/
var studentInfo = [{
  name: 'AJAY MAHESH VISHWAKARMA',
  imageurl: "images/Ajay.jpg",
  intro: "Software Development Engineer with 10+ years of experience. I am having Bachelor of Science degree in the area of Computer Science. Now pursuing Advanced Certification later willing to complete my Master of Science degree.",
  githuburl: "https://github.com/ajayvkm/FullStack.git"
}];
var studentData = studentInfo.map(function (_ref) {
  var name = _ref.name,
      imageurl = _ref.imageurl,
      intro = _ref.intro,
      githuburl = _ref.githuburl;
  return React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, name)), React.createElement("tr", null, React.createElement("td", null, React.createElement("img", {
    src: imageurl,
    align: "center"
  }))), React.createElement("tr", null, React.createElement("td", null, intro)), React.createElement("tr", null, React.createElement("td", null, React.createElement("a", {
    href: githuburl
  }, "VIEW MY GITHUB REPO ")))));
});
ReactDOM.render(studentData, document.getElementById('contents'));
let myTitle = new Vue({
  el: "#typed",
  data: {
    options: {
      strings: ['Developer', 'Tawan Boonma'],
      typeSpeed: 60,
      backDelay: 1500,
      backSpeed: 50,
      loop: true,
    }
  },
  methods: {
    typingEffect: function() {
      return new Typed(this.$el, this.options);
    }
  }
});

let myProjects = new Vue({
  el: "#projects",
  data: {
    languageAccepted: [{
      language: "python",
      displayName: "Python",
      imgUrl: "assets/images/tools-logo/python.png"
    }, {
      language: "php",
      displayName: "PHP",
      imgUrl: "assets/images/tools-logo/php.png"
    }],
    myRepos: []
  },
  methods: {
    test1: function() {
      console.log("HelloWorld");
    }
  }
})

// Get Github Repos
const keywordSelector = 'portfolio-displayed';
function getMyRepos()
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    // Display Spotlight Repository in GitHub.
    if (this.readyState == 4 && this.status == 200) {
      let myRepos = JSON.parse(this.responseText);
      for (let repo in myRepos) {
        let topic = myRepos[repo].topics;
        if (topic.includes(keywordSelector)) {
          console.log(myRepos[repo]);
          myProjects.languageAccepted.forEach((lang) => {
            if (topic.includes(lang.language)) {
              myProjects.myRepos.push({
                "title": myRepos[repo].name,
                "desc": myRepos[repo].description,
                "imgUrl": lang.imgUrl,
                "siteUrl": myRepos[repo].homepage,
                "repoUrl": myRepos[repo].html_url
              })
            }
          })
        }
      }
    }
  };
  xmlHttp.open("GET", "https://api.github.com/users/tboonma/repos?&per_page=100&sort=pushed");
  xmlHttp.send();
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
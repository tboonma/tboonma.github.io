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
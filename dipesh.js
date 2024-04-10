var typed = new Typed("#typeWriter",{
    strings:["","Web Desiginer","Web Developer","Graphic Desiginer","Youtuber","Freelancer","Logo Desiginer","Cyber Security","Social Media Manager","Student"],
    typedSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
      navlist =nav.querySelector("li"),
      totalNavList = navlist.length;
      for(let i=0; i<totalNavList; i++)
      {
        
        const a = navList[i].querySelector("a");  
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
        })
      }

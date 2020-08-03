const projects__data={navID:"nav-projects",page_loc_text:"Projects",template:'<div id="project_page" class="page full-page-height"><div class="proj_page-head flex"><div class="proj_page-title">Projects</div></div><div class="proj_page-body"><div class="proj_page-cont flex row wrap justify-center"></div></div></div>',data:{projects:{1:{title:"Fractal Generator",author:"Ankur Parihar",url:"/projects/fractal-generator",img:"/media/projects/Sierpinski_triangle.webp",description:"The project was assigned during the course 'Fractals and Applications'. This is a program to generate fractal from given IFS (Iterated Function System) rules.",tags:["ies-301","fractal","generator"],created:"Feb 2019",updated:"2 Feb 2019",explorable:!0},2:{title:"Raymond's Algorithm",author:"Ankur Parihar",url:"/projects/DME-raymond",img:"/media/projects/raymond.webp",description:"The project was assigned during the course 'Operating Systems (CSN-232)'. It is an implementation of raymond's algorihm. Raymond's algorithm is a tree based message passing algorithm for mutual exclusion of critical section among concurrent processes.",tags:["csn-232","kerry","raymond","algorithm","implementation","simulation"],created:"12 April 2018",updated:"4 August 2020",explorable:!0},3:{title:"Git DDB",author:"Ankur Parihar",url:"https://github.com/ankurparihar/git-ddb-docs",img:"/media/projects/git-ddb.webp",description:"Github based distributed database",tags:["web, webd","github","distributed","database"],created:"March 2019",updated:"8 March 2019",explorable:!0},4:{title:"Alpino",author:"Ankur Parihar",url:"/projects/Alpino",img:"/media/projects/alpino.webp",description:"A 3-D web media player made for Microsoft Code.Fun.Do. This is primarily a 3D interactive media player but we can place any html content.",tags:["alpino","3d","webd","web"],created:"Feb 2017",updated:"7 Feb 2017",explorable:!0},5:{title:"BicastR",author:"Ankur Parihar",url:"/projects/BicastR",img:"/media/projects/bicastr.webp",description:"BicastR can displays large image or video which doesn't fit on display on multiple displays which put together re-creates the entire media and provides a rich viewing experience. It creates the effect of a larger display using smaller displays.",tags:["bicastr","split","multi","display","web"],created:"Oct 2018",updated:"9 July 2020",explorable:!0},6:{title:"Time-Table Generator",author:"Ankur Parihar",url:"/projects/time-table",img:"/media/projects/time-table.webp",description:"This is a fun project I created during spare time. Time-Table generator creates dynamic time-tables with options like copy-paste, spanning etc.",tags:["time","table","time-table","generator","web","webd"],created:"July 2019",updated:"29 July 2019",explorable:!0}}},apply:(t,e)=>{t.innerHTML=projects__data.template;var a=t.querySelector(".proj_page-cont");for(var r in projects__data.data.projects){var i=projects__data.data.projects[r],s=document.createElement("div");s.setAttribute("class","proj_card card elevation-5"),s.innerHTML='\n\t\t\t\t<div class="card__media">\n\t\t\t\t\t<div class="card__media__background" style="background: url('+i.img+') center center / cover no-repeat"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="card__title">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class="proj_card-head">'+i.title+'</div>\n\t\t\t\t\t\t<div class="proj_card-date">'+i.created+'</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="card__actions">\n\t\t\t\t\t<a href="'+i.url+'" target="_blank" class="btn btn--flat '+(i.explorable?"":"btn--disabled")+'">\n\t\t\t\t\t\t<div class="btn__content btn-explore">Explore</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="btn btn--flat">\n\t\t\t\t\t\t<div class="btn__content btn-share">Share</div>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t',a.appendChild(s)}projects__data.onStaticLoad(t,e)},onStaticLoad:(t,e)=>{t.querySelectorAll("a").forEach(t=>{t.addEventListener("click",e=>{showRippleEffect(e,t)})})}};spa.register("/projects",projects__data);
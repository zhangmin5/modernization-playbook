(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"+vHr":function(e,t,a){"use strict";a.r(t),a.d(t,"Title",(function(){return s})),a.d(t,"_frontmatter",(function(){return p})),a.d(t,"default",(function(){return g}));var i=a("wx14"),n=a("zLVn"),o=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),function(){return Object(o.b)("span",null,"Refactoring Java EE Applications",Object(o.b)("br",null)," ",Object(o.b)("h2",null,"A phased approach to refactoring a Monolith in to Micro Services"))}),p={},b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=b("PageDescription"),l=b("AnchorLinks"),d=b("AnchorLink"),m={Title:s,_frontmatter:p},h=r.a;function g(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)(h,Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"A phased approach to refactoring a Monolith in to Micro Services")),Object(o.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(d,{mdxType:"AnchorLink"},"Introduction"),Object(o.b)(d,{mdxType:"AnchorLink"},"How the Application was Modernized"),Object(o.b)(d,{mdxType:"AnchorLink"},"Move the monolith to WebSphere Liberty with minimal changes"),Object(o.b)(d,{mdxType:"AnchorLink"},"Separate the frontend from the monolith"),Object(o.b)(d,{mdxType:"AnchorLink"},"Move the backend monolith to OpenLiberty"),Object(o.b)(d,{mdxType:"AnchorLink"},"Refactor the Catalog service to Quarkus"),Object(o.b)(d,{mdxType:"AnchorLink"},"Summary")),Object(o.b)("h2",null,"Introduction"),Object(o.b)("p",null,"This document descibes the phases that were performed to modernize the ",Object(o.b)("strong",{parentName:"p"},"Customer Order Services")," application taking the legacy JEE6 application, removing older technologies, updating the frontend and strangling a microservice. Niklas describes the process in the video below:"),Object(o.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(o.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/lw95LLqa37g",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(o.b)("h2",null,"How the Application was Modernized"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"Customer Order Services")," application is a simple store-front shopping application, built during the early days of the Web 2.0 movement. Users interact directly with a browser-based interface and manage their cart to submit orders.  This application is built using the traditional ",Object(o.b)("a",{parentName:"p",href:"http://www.tonymarston.net/php-mysql/3-tier-architecture.html"},"3-Tier Architecture")," model, with an HTTP server, an application server, and a supporting database."),Object(o.b)("p",null,"There are several components of the overall application architecture:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Starting with the database, the application leverages two SQL-based databases running on ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/analytics/us/en/technology/db2/"},"IBM DB2"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The application exposes its data model through an ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Enterprise_JavaBeans"},"Enterprise JavaBean")," layer, named ",Object(o.b)("strong",{parentName:"p"},"CustomerOrderServices"),".  This components leverages the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Java_Persistence/What_is_JPA%3F"},"Java Persistence API")," to exposed the backend data model to calling services with minimal coding effort."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This build of the application uses JavaEE6 features for EJBs and JPA."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The next tier of the application, named ",Object(o.b)("strong",{parentName:"p"},"CustomerOrderServicesWeb"),", exposes the necessary business APIs via REST-based web services.  This component leverages the ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_API_for_RESTful_Web_Services"},"JAX-RS")," libraries for creating Java-based REST services with minimal coding effort."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This build of the application is using ",Object(o.b)("strong",{parentName:"li"},"JAX-RS 1.1")," version of the respective capability."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The application’s user interface is exposed through the ",Object(o.b)("strong",{parentName:"p"},"CustomerOrderServicesWeb")," component as well, in the form of a ",Object(o.b)("a",{parentName:"p",href:"#tbd"},"Dojo Toolkit"),"-based JavaScript application.  Delivering the user interface and business APIs in the same component is one major inhibitor our migration strategy will help to alleviate in the long-term.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Finally, there is an additional integration testing component, named ",Object(o.b)("strong",{parentName:"p"},"CustomerOrderServicesTest")," that is built to quickly validate an application’s build and deployment to a given application server.  This test component contains both ",Object(o.b)("strong",{parentName:"p"},"JPA")," and ",Object(o.b)("strong",{parentName:"p"},"JAX-RS"),"-based tests."),Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABbUlEQVQoz3VR0UoCQRT1H/qD6LGiT+kD6k3xJS0JCiqCngM/wN6il5QosYLoRXRXjUK2yPWlsjJTKt1xl8R1d+Y0M5uhWQNn75577p45M+tjADo3JRh7CZD4Ecj+IUgiifbpOchByuPxpNQtpQAxT10XlNIhOI4j4RMDzskx7IAf9lIY3dACuuEQ7NUVyW3OZRX6TgxycYPBxRiDyzeRhpziLFVDxF/E+uI1h4bNiIbtDQ1byxrWwprsC303di8NHGc0Yd+UG1JEE8DYLDA+B0z6gZkgMBUApgNenZj39GBU5oE7HFCa9Xq974TMxVuLocQ3L1cA/cHD7R3llUGveH2hVxvyBkfSDSWklKHz2Ubr4wVG85WjBtKqwyQNtI0679dgcLTeq7DMJv8QI0aD3CciPz49I53OQFFzyCoqVDWPy6sicrmCfM/nL5DJKtD18s8R//op0lA8BPkNcR+iWpYFQghM05S9/vx/x/4CFL1ANlXox8EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 1",title:"Step 1",src:"/modernization-playbook/static/597bf706e9e167ceea8d3ef42de2144f/3cbba/step1.png",srcSet:["/modernization-playbook/static/597bf706e9e167ceea8d3ef42de2144f/7fc1e/step1.png 288w","/modernization-playbook/static/597bf706e9e167ceea8d3ef42de2144f/a5df1/step1.png 576w","/modernization-playbook/static/597bf706e9e167ceea8d3ef42de2144f/3cbba/step1.png 1152w","/modernization-playbook/static/597bf706e9e167ceea8d3ef42de2144f/cc5f9/step1.png 1176w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)("h3",null,"Move the monolith to WebSphere Liberty with minimal changes"),Object(o.b)("p",null,"The first phase of the modernization is to move the existing JEE6 application from traditional WebSphere ND to a WebSphere Liberty container using IBM Cloud Transformation Advisor"),Object(o.b)("p",null,"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVQoz3VRy04CMRTlS/wBdavfYqKJBkSNgGh0xUcYEzVsDMYHceMCjSZuXClPTWApDggOMCDCkAmTMI/22HaE8NCbnNx7T9vTc1sXBaC/5tAKR6BGLtE+uYB6GkXn+gbq2RXrzxkfFevawyP4fmLbIISMwLIsARdhG6z7OxheD8xgAEbAh57fB2NvF70t1rNa8F43jPAxeFBCMByUUtjsEiHIWsRum1hayWNts4DVDQmBbQmhkITgjgQv6zm/uJzHwWFFCFjWpMO+KBMkOIoBUwvArAeYdgPzfmDO54BzM25nfX1f+IE9alCImabpOKTERkejKNWAT8UBr4sVwjJFeYj7aosXnHA34pAXmqaiVilCqZWgVD/QUMpoNmQ06mXRc1TlAlrfdeFoXIhnLvY7MiDLFTw9x5FMpZFIppBiOZvNIZ15YXVG5Hgiibf8+2DEvz6FC7v6t4xHn9N1nU2gidztdgcH/xv7ByKDP+ru9HYtAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 3",title:"Step 3",src:"/modernization-playbook/static/b2aa533ef4d8a8ddfd97f54437bee080/3cbba/step3.png",srcSet:["/modernization-playbook/static/b2aa533ef4d8a8ddfd97f54437bee080/7fc1e/step3.png 288w","/modernization-playbook/static/b2aa533ef4d8a8ddfd97f54437bee080/a5df1/step3.png 576w","/modernization-playbook/static/b2aa533ef4d8a8ddfd97f54437bee080/3cbba/step3.png 1152w","/modernization-playbook/static/b2aa533ef4d8a8ddfd97f54437bee080/728e0/step3.png 1175w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"This phase has it’s own section in this playbook titled ",Object(o.b)("a",{parentName:"p",href:"https://ibm-cloud-architecture.github.io/modernization-playbook/applications/liberty"},"Runtime Modernization")),Object(o.b)("h3",null,"Separate the frontend from the monolith"),Object(o.b)("p",null,"Once the monolith is containerized the application owners may choose to separate the frontend application code (DOJO based) from the monolith’s EAR file in to a separately deployable component. With the front and backend separated they can be developed, tested and deployed independently."),Object(o.b)("p",null,"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYUlEQVQoz22RTy8DQRiH+6G4cxZXd45c6+hTSDhQSWkESculEXGk+kdCQ0ibCIsu2y6yaxfp7sw+ZmeVKpM8eed9Z+Y3v3cmJYGP+hnOYgY3s4a7vIq7ksPb2sbNruMuZXXuLGTwd/eJ1H4pBFLKX4RhqEnFgrLZJNjcJCgUCPJ5wkKeoFgk3NkmVLmub2wgDg/RI4oYHEJdkgiKkNcuPPjw6CfR9MCK515Cr/78rrSk0IcHiV3GMaX8kduLGJ4SjM4IRqYFY2nBxJxkfFbqWszQpCA9LxM38re7SDnudruJQyKB7cD5NVwaCTcWXJlw/QiNO7gwknXDio/LP+8XE4tqh1JGvPkOtmXw1LnDbt8q7nm2TZW36Fi3utaxbnBe2smnyP9Fv1qGVsvk4KBEuVzl6KhCpVLl5LROtXas5jUdS6UyjUbzu8XBlnvvmOq33E+v5vs+ruvieZ7m5wP+b/sTt6tRqtIiQ3UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 4",title:"Step 4",src:"/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/3cbba/step4.png",srcSet:["/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/7fc1e/step4.png 288w","/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/a5df1/step4.png 576w","/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/3cbba/step4.png 1152w","/modernization-playbook/static/bbf72d27ab8e0881acb7c1aaefa44aba/1f4d1/step4.png 1177w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"A more detailed description of the steps that were taken in this phase can be found ",Object(o.b)("a",{parentName:"p",href:"refactor/frontend"},"here")),Object(o.b)("h3",null,"Move the backend monolith to OpenLiberty"),Object(o.b)("p",null,"In this phase the JEE6 EJB code is modernized to use MicroProfile and is then able to run on the latest open source version of Liberty (OpenLiberty)"),Object(o.b)("p",null,"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVQoz32RyUpDMRSG+1C6VFBw5wu41JWiIIgP4Cv4AKK2DnUWNy6c6KgWERFtoehC0Dqg9N701k459zO5VbFOgS/JOUn+/CcJCVDL5VGRKKXoGmpxldLSOt7WNqWVzc9YhaOU9+P4Zr9ojYi00Gg0AkJWUGdzVKZmqETmqYTnDPNU1zeoLkSpzJo4smDWp6nt7BI03+d70+aSQFCbrmpUXQ3qHTsv1sBptObKBpGf7iy+ucSKhswWlvd82gc0XcNC55CmZ1TomxB6x4WOQU33iNDWrxmblKYbaXVnxer1etMhvqbwDOkLyOTgOAuneTi/hrOrZmzzdj13Y4/L/w5FjHrVw3MLhgfDPZ56pKyeAoLYUHIKvHovwfP9Jmh5Lxlub+84OIiRSKSIx5MkkikymRNS6UMzT5vxiFgswcVl9rPE7yXbcq1o6EP549u/YvNKKYrFIo7j4LpukPvLoRV+A+uKUbkfQOYgAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 5",title:"Step 5",src:"/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/3cbba/step5.png",srcSet:["/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/7fc1e/step5.png 288w","/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/a5df1/step5.png 576w","/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/3cbba/step5.png 1152w","/modernization-playbook/static/5eb7225ea119887931ae4298adc87b29/3b10e/step5.png 1179w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"A more detailed description of the steps that were taken in this phase can be found ",Object(o.b)("a",{parentName:"p",href:"refactor/backend"},"here")),Object(o.b)("h3",null,"Refactor the Catalog service to Quarkus"),Object(o.b)("p",null,"In this phase the backend application was analyzed and the Catalog service was identified as a candidate to be extracted in to it’s own Micro Service. The code was strangled from the monolith and deployed using Quarkus"),Object(o.b)("p",null,"  ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVQoz4WSSy9DQRTHu7YT8RVsxMp38Q0spNYSNj6FHaFCSwXxWFiwQKIlQpsgHi2it6je0vtoy9yZ+zP3VkXiNckvc86cOf+cc2YiCpA3t4iJaURsFjE1G+7e4goinkRMzuBNxxHjMbz1DZTvo5T6hud5IZFAEMOAuQQsLGiSkJyHtTVYXmrawXkiDlub/LaklB+C0sP14K6mdetQ1BS0fd9o+oFt6vitC4/a/6m6AF9XHohG9BVWj3za+iWdg4qeEUXvqKJ7WNERVbQPKKIxRdeQpG8s7EcnN/m6hBAhEXyJ6cBeXpODzB2cFOHwBlIfZ7mST7YAV6VA6J8KA+fttYZdMXCei7yUDeq2qYdSo1ou0LCfEA2bUvGaauXhM7kp5H+xVatlPaNKhVR6n6PjDOn0AecXlzyVTbZ3djk9O+elaulYllz++scHaVUXCvq/fIMWrutiWRaO44QESX89zDvCW1O4gIT6wwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Step 6",title:"Step 6",src:"/modernization-playbook/static/9a99a03daad9bb7c77020ede59477836/3cbba/step6.png",srcSet:["/modernization-playbook/static/9a99a03daad9bb7c77020ede59477836/7fc1e/step6.png 288w","/modernization-playbook/static/9a99a03daad9bb7c77020ede59477836/a5df1/step6.png 576w","/modernization-playbook/static/9a99a03daad9bb7c77020ede59477836/3cbba/step6.png 1152w","/modernization-playbook/static/9a99a03daad9bb7c77020ede59477836/9930d/step6.png 1184w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"A more detailed description of the steps that were taken in this phase can be found ",Object(o.b)("a",{parentName:"p",href:"refactor/catalog"},"here")),Object(o.b)("h3",null,"Building Micro-frontends and further modernization"),Object(o.b)("p",null,"The next logical step in the modernization journey is to address the legacy circa-2010 web front end and replace it with ",Object(o.b)("a",{parentName:"p",href:"http://heidloff.net/article/using-micro-frontends-microservices/"},"micro frontends"),". You may be interested in articles that describe how to create ",Object(o.b)("a",{parentName:"p",href:"http://heidloff.net/article/developing-micro-frontends-single-spa/"},"Micro frontends with SPA")," and ",Object(o.b)("a",{parentName:"p",href:"http://heidloff.net/article/developing-loosely-coupled-micro-frontends-rxjs/"},"loosely coupled micro frontends with RxJS")),Object(o.b)("h2",null,"Summary"),Object(o.b)("p",null,"This application has been refactored in a series of steps from the original ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was855"},"WebSphere ND v8.5.5 version")," to run as Micro Services on Red Hat OpenShift."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-applications-refactor-index-mdx-eb1fbff753af6fa1b601.js.map
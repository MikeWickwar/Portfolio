(function(){"use strict";var e={195:function(e,t,i){var n=i(471),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("HeaderComponent",{attrs:{msg:"Welcome to Vue.js!"}}),t("router-view"),t("FooterComponent"),e.isHomeView?e._e():t("div",{class:{"dim-background":!e.isHomeView},attrs:{id:"overlay"}})],1)},a=[],r=function(){var e=this,t=e._self._c;return t("header",{staticClass:"sticky-header"},[t("nav",[e._m(0),t("ul",[t("li",[t("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),t("li",[t("router-link",{attrs:{to:"/resume"}},[e._v("Resume")])],1),t("li",[t("router-link",{attrs:{to:"/projects"}},[e._v("Projects")])],1),t("li",[t("router-link",{attrs:{to:"/testimonials"}},[e._v("Testimonials")])],1),t("li",[t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),e._m(1),e._m(2)])])])},s=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"logo"},[t("i",{staticClass:"fa-sharp fa-solid fa-cat fa-3x"}),t("span",{staticClass:"headerTitle"},[e._v("Mike Wickwar")])])},function(){var e=this,t=e._self._c;return t("li",[t("a",{attrs:{href:"https://example.com",target:"_blank"}},[e._v("Blog")])])},function(){var e=this,t=e._self._c;return t("li",[t("a",{attrs:{href:"mailto:contact@example.com"}},[e._v("Contact")])])}],l={name:"HeaderComponent"},c=l,d=i(656),m=(0,d.A)(c,r,s,!1,null,"295c8b8e",null),u=m.exports,p=function(){var e=this;e._self._c;return e._m(0)},v=[function(){var e=this,t=e._self._c;return t("footer",{staticClass:"sticky-footer"},[t("div",{staticClass:"footer-content"},[t("div",{staticClass:"footer-left"},[t("p",[e._v("© 2024 Mike Wickwar. All rights reserved.")])]),t("div",{staticClass:"footer-right"},[t("ul",{staticClass:"social-links"},[t("li",[t("a",{attrs:{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer"}},[t("i",{staticClass:"fab fa-linkedin"})])]),t("li",[t("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[t("i",{staticClass:"fab fa-github"})])])])])])])}],h={name:"FooterComponent"},f=h,g=(0,d.A)(f,p,v,!1,null,"c957fc7a",null),_=g.exports,y={name:"App",components:{HeaderComponent:u,FooterComponent:_},data(){return console.log(this.$router),{isHomeView:"/"===this.$router.history._startLocation}},created(){this.$router.beforeEach(((e,t,i)=>{console.log(e),this.isHomeView="/"===e.path,i()}))}},C=y,b=(0,d.A)(C,o,a,!1,null,null,null),w=b.exports,S=i(173),k=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about"},[t("WelcomeComponenet")],1)},T=[],x=function(){var e=this;e._self._c;return e._m(0)},I=[function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"welcome-text"},[e._v("Hi! Welcome to my portfolio.")]),t("h1",{staticClass:"welcome-text"},[e._v("Thank You for stopping by.")])])}],A={name:"WelcomeComponent"},j=A,M=(0,d.A)(j,x,I,!1,null,"09ff9ca2",null),D=M.exports,P={name:"AboutComponent",props:{msg:String},components:{WelcomeComponenet:D}},E=P,W=(0,d.A)(E,k,T,!1,null,"6240c79e",null),H=W.exports,B=function(){var e=this,t=e._self._c;return t("div",{staticClass:"about-container col-md-12"},[t("div",{staticClass:"about-bg col-md-12"}),t("div",{staticClass:"about-content"},[t("CarouselComponent")],1)])},O=[],F=function(){var e=this,t=e._self._c;return t("div",{staticClass:"carousel-container"},[t("b-carousel",{staticClass:"carousel",attrs:{interval:4e3,"img-width":"720px","img-height":"440px",controls:"",fade:"",background:"#ababab"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(t){e.slide=t},expression:"slide"}},[t("b-carousel-slide",{attrs:{"img-src":"fam.jpg"}}),t("b-carousel-slide",{attrs:{id:"pizzaImg","img-src":"pizza.jpg"}}),t("b-carousel-slide",{attrs:{"img-src":"griz.jpg"}}),t("b-carousel-slide",{attrs:{"img-src":"drums.jpg"}})],1)],1)},V=[],U={components:{},data(){return{slide:0,sliding:null}},methods:{onSlideStart(){this.sliding=!0},onSlideEnd(){this.sliding=!1}}},N=U,L=(0,d.A)(N,F,V,!1,null,null,null),z=L.exports,J={name:"AboutComponent",props:{msg:String},components:{CarouselComponent:z}},Q=J,K=(0,d.A)(Q,B,O,!1,null,"5328db16",null),q=K.exports,G=function(){var e=this;e._self._c;return e._m(0)},R=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"resume-container"},[t("header",{staticClass:"resume-header"},[t("h1",[e._v("Mike Wickwar")]),t("h2",[e._v("Senior Software Developer")])]),t("section",{staticClass:"contact-info"},[t("h3",[e._v("Contact Information")]),t("ul",[t("li",[e._v("Email: "),t("a",{attrs:{href:"mailto:mike.wickwar@gmail.com"}},[e._v("mike.wickwar@gmail.com")])]),t("li",[e._v("Phone: "),t("a",{attrs:{href:"tel:+17208378019"}},[e._v("(720) 837-8019")])]),t("li",[e._v("LinkedIn: "),t("a",{attrs:{href:"https://linkedin.com/in/mikewickwar/",target:"_blank"}},[e._v("linkedin.com/in/mikewickwar/")])]),t("li",[e._v("GitHub: "),t("a",{attrs:{href:"https://github.com/MikeWickwar",target:"_blank"}},[e._v("github.com/MikeWickwar")])])])]),t("section",{staticClass:"summary"},[t("h3",[e._v("Professional Summary")]),t("p",[e._v(" Highly skilled Senior Software Developer with over 7 years of experience in full stack development, specializing in C#, .NET, JS, and identity management. Proven track record in contributing to complex projects, enhancing user experience, and delivering robust, scalable solutions. Expertise in performance optimization and security, with a strong focus on impactful project delivery. ")])]),t("section",{staticClass:"experience"},[t("h3",[e._v("Professional Experience")]),t("div",{staticClass:"job"},[t("h4",[e._v("Senior Software Developer")]),t("h5",[e._v("BigHand (Remote)")]),t("p",[e._v("Feb 2022 – Present")]),t("ul",[t("li",[e._v("Developed the initial form of the Smart Time application at a start-up.")]),t("li",[e._v("Improved user experience and performance.")]),t("li",[e._v("Collaborated to design and implement new features using C#, SQL, jQuery, Kendo UI, and CSS.")]),t("li",[e._v("Transitioned to Blazor for unified client-server code, enhancing development efficiency and application performance.")]),t("li",[e._v("Implemented automated testing with Ghost Inspector.")])]),t("h5",[e._v("Identity Platform Team:")]),t("ul",[t("li",[e._v("Key contributor to the Duende Identity project.")]),t("li",[e._v("Designed and deployed scalable identity services, ensuring robust access management.")]),t("li",[e._v("Integrated identity solutions across multiple applications, improving operational efficiency.")]),t("li",[e._v("Implemented unit testing with NUnit and automated testing with SpecFlow.")])]),t("p",[e._v("Skills: C#, .NET Framework, Duende Identity Server, Microsoft SQL Server, API Development, OpenID Connect (OIDC), JSON Web Token (JWT), Swagger API, Node.js, ASP.NET, Blazor, JavaScript, jQuery, CSS, SASS, HTML, NUnit, SpecFlow, Ghost Inspector.")])]),t("div",{staticClass:"job"},[t("h4",[e._v("Senior Software Developer")]),t("h5",[e._v("Iridium Technology (Remote)")]),t("p",[e._v("Dec 2020 – Feb 2022")]),t("ul",[t("li",[e._v("Continued development of the SmartTime application post-acquisition.")]),t("li",[e._v("Enhanced product functionality and performance within a larger corporate environment.")]),t("li",[e._v("Maintained high standards of user satisfaction and product reliability.")])]),t("p",[e._v("Skills: .NET Framework, ASP.NET MVC, JavaScript, jQuery, SQL.")])]),t("div",{staticClass:"job"},[t("h4",[e._v("Web Developer")]),t("h5",[e._v("Smart Time Apps (Remote)")]),t("p",[e._v("May 2016 – Dec 2020")]),t("ul",[t("li",[e._v("Developed the initial form of the Smart Time application at a start-up.")]),t("li",[e._v("Focused on time tracking, billing, and compliance features for law firms.")]),t("li",[e._v("Utilized full stack technologies to develop and optimize the product.")]),t("li",[e._v("Contributed to the successful acquisition of Smart Time by Iridium Technology.")])]),t("p",[e._v("Skills: .NET Framework, ASP.NET MVC, JavaScript, jQuery, Kendo UI, SQL.")])]),t("div",{staticClass:"job"},[t("h4",[e._v("Assistant Band Director, Percussion Caption Head, Drill Writer, Percussion Arranger")]),t("h5",[e._v("Eaglecrest High School (Centennial, CO)")]),t("p",[e._v("Jun 2009 – Oct 2015")]),t("ul",[t("li",[e._v("Expanded the marching program from under 30 to nearly 150 students.")]),t("li",[e._v("Developed and implemented percussion arrangements and drill writing.")]),t("li",[e._v("Contributed to the overall growth and success of the music program.")])])])]),t("section",{staticClass:"education"},[t("h3",[e._v("Education")]),t("div",{staticClass:"school"},[t("h4",[e._v("Galvanize Inc")]),t("p",[e._v("Full Stack Developer, Full Stack Development (2015 – 2016)")]),t("ul",[t("li",[e._v("Full stack development using Node.js, Express, Angular, and Postgres.")]),t("li",[e._v("Additional Technologies: Knex, OAuth, jQuery, Jade, and Bootstrap.")]),t("li",[e._v("6-month Immersive Web Development Program.")])])]),t("div",{staticClass:"school"},[t("h4",[e._v("Arapahoe Community College")]),t("p",[e._v("Art, Computer Repair, Computer Science (2014 – 2015)")]),t("ul",[t("li",[e._v("Gained experience in art and design, A+ computer repair, and general computer science.")]),t("li",[e._v("Sparked initial curiosity in programming and computer science.")])])]),t("div",{staticClass:"school"},[t("h4",[e._v("Colorado State University")]),t("p",[e._v("Music Teacher Education and Music Performance (2007 – 2010)")]),t("ul",[t("li",[e._v("Activities and Societies: Music Letter, Phi Mu Alpha Sinfonia (Vice President).")]),t("li",[e._v("Studied classical music, theory, performance, and education techniques in a competitive percussion studio.")])])]),t("div",{staticClass:"school"},[t("h4",[e._v("Arapahoe High School")]),t("p",[e._v("High School Diploma (Centennial, CO)")]),t("ul",[t("li",[e._v("Graduated with a strong foundation in academics and extracurricular activities.")])])])])])}],$={name:"ResumeComponent"},Y=$,X=(0,d.A)(Y,G,R,!1,null,"1997614e",null),Z=X.exports,ee=function(){var e=this,t=e._self._c;return t("div",{staticClass:"projects-container"},[t("CardComponent",{attrs:{title:e.smartTimeComponentTitle,urlForCardBtn:e.smartTimeOverviewUrl,img:e.smartTimeImg,btnText:e.smartTimeBtnText},scopedSlots:e._u([{key:"childCardComponent",fn:function(){return[t("SmartTimeComponent")]},proxy:!0}])}),t("CardComponent",{attrs:{title:e.idsComponentTitle,urlForCardBtn:e.idsOverviewUrl,img:e.idsImg,btnText:e.idsButtunText},scopedSlots:e._u([{key:"childCardComponent",fn:function(){return[t("IdsComponent")]},proxy:!0}])}),t("CardComponent",{attrs:{title:e.vdfComponentTitle,urlForCardBtn:e.vdfOverviewUrl,img:e.vdfImg,btnText:e.vdfButtunText,deployUrl:e.vdfDeployment},scopedSlots:e._u([{key:"childCardComponent",fn:function(){return[t("VdfComponent")]},proxy:!0}])}),t("CardComponent",{attrs:{title:e.mbComponentTitle,urlForCardBtn:e.mbOverviewUrl,img:e.mbImg,btnText:e.mbButtunText},scopedSlots:e._u([{key:"childCardComponent",fn:function(){return[t("DrillWriterComponent")]},proxy:!0}])})],1)},te=[],ie=function(){var e=this,t=e._self._c;return t("div",[t("b-card",{staticClass:"mb-2 card",staticStyle:{"max-width":"20rem"},attrs:{title:e.title,"img-src":e.img,"img-alt":"Image","img-top":"","img-max":"",tag:"article"}},[t("b-card-text",[e._t("childCardComponent")],2),t("h4",[e._v("Want to learn more? ")]),t("b-button",{attrs:{href:e.urlForCardBtn,target:"_blank",variant:"primary"}},[e._v(e._s(e.btnText))]),null!==e.deployUrl?t("b-button",{staticClass:"card-btn",attrs:{href:e.deployUrl,target:"_blank",variant:"primary"}},[e._v("See the site")]):e._e()],1)],1)},ne=[],oe={name:"CardComponent",components:{},props:{title:String,urlForCardBtn:String,img:String,btnText:String,deployUrl:{default:null,type:String}}},ae=oe,re=(0,d.A)(ae,ie,ne,!1,null,"799058aa",null),se=re.exports,le=function(){var e=this;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("BigHand SmartTime streamlines time capture and entry for law firms, enhancing efficiency and accuracy. It helps increase billable hours, accelerate payment cycles, and improve client trust through transparent, compliant invoicing.")]),t("h4",[e._v("Key Features")]),t("ul",[t("li",[e._v("Automated Time Capture: Efficient time recording.")]),t("li",[e._v("Streamlined Time Entry: Pre-filled entries for diverse activities.")]),t("li",[e._v("Easy Approval & Edits: Swift manager approvals and corrections.")]),t("li",[e._v("Transparency for Clients: Clear, compliant invoicing.")]),t("li",[e._v("Flexibility & Mobility: Seamless desktop and mobile integration.")])]),t("h4",[e._v("Key Technologies")]),t("ul",[t("li",[e._v("C#")]),t("li",[e._v(".NET")]),t("li",[e._v("ASP.NET MVC")]),t("li",[e._v("SQL")]),t("li",[e._v("JavaScript")]),t("li",[e._v("jQuery")]),t("li",[e._v("CSS")]),t("li",[e._v("Kendo UI")])])])}],de={name:"WelcomeAnimation"},me=de,ue=(0,d.A)(me,le,ce,!1,null,"084ba01c",null),pe=ue.exports,ve=function(){var e=this;e._self._c;return e._m(0)},he=[function(){var e=this,t=e._self._c;return t("div",[t("div",[t("p",[e._v(" Duende Identity Server is a powerful identity management platform designed to enhance security and authentication processes. It provides scalable identity services, ensuring robust access management across multiple applications. As part of the Identity Platform team, I played a key role in implementing and managing identity solutions using technologies like .NET Core, C#, Duende Identity Server, Webpack, JavaScript, SCSS, Docker, and SQL. I focused on integrating these solutions seamlessly to meet the security and scalability needs of our projects. ")])]),t("h4",[e._v("Key Technologies")]),t("ul",[t("li",[e._v(".NET Core")]),t("li",[e._v("C#")]),t("li",[e._v("Duende Identity Server")]),t("li",[e._v("Webpack")]),t("li",[e._v("JavaScript")]),t("li",[e._v("SCSS")]),t("li",[e._v("Docker")]),t("li",[e._v("SQL")])])])}],fe={name:"IdsComponent"},ge=fe,_e=(0,d.A)(ge,ve,he,!1,null,"031f569c",null),ye=_e.exports,Ce=function(){var e=this;e._self._c;return e._m(0)},be=[function(){var e=this,t=e._self._c;return t("div",[t("div",[t("p",[e._v(" I recently rewrote a Las Vegas deal finder app for a friend, migrating it to a new hosting platform. The app, built using Aurelia.js for frontend development, underwent a complete overhaul. I utilized SCSS for styling, enhancing the app's visual appeal and responsiveness. The migration involved optimizing performance and ensuring seamless functionality across the new platform, offering users an improved experience in discovering and accessing Las Vegas deals. ")])]),t("h4",[e._v("Key Technologies")]),t("ul",[t("li",[e._v("Node.js")]),t("li",[e._v("Aurelia.js")]),t("li",[e._v("SCSS (Sass)")]),t("li",[e._v("Webpack")]),t("li",[e._v("HTML5 & CSS3")]),t("li",[e._v("Git")])])])}],we={name:"VdfComponent"},Se=we,ke=(0,d.A)(Se,Ce,be,!1,null,"6e69a1ad",null),Te=ke.exports,xe=function(){var e=this;e._self._c;return e._m(0)},Ie=[function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v(" The Marching Band Drill Writing App automates the creation of drill formations for marching bands, ensuring precise placement of band members on a field grid. Drill writing involves mapping intricate movements that synchronize with music, requiring meticulous attention to detail and accuracy. This project is based on a grid system that overlays the standard football field where it will take 8 22.5-inch steps to go 5 yards. ")]),t("h4",[e._v("Key Technologies")]),t("ul",[t("li",[e._v("Angular")]),t("li",[e._v("TypeScript")]),t("li",[e._v("SCSS (Sass)")]),t("li",[e._v("Firebase")]),t("li",[e._v("Node.js")]),t("li",[e._v("Express")]),t("li",[e._v("Postgresql")])])])}],Ae={name:"DrillWriterComponent"},je=Ae,Me=(0,d.A)(je,xe,Ie,!1,null,"6b30c9cc",null),De=Me.exports,Pe={name:"ProjectsComponent",components:{CardComponent:se,SmartTimeComponent:pe,IdsComponent:ye,VdfComponent:Te,DrillWriterComponent:De},data(){return{smartTimeOverviewUrl:"https://www.bighand.com/en-us/our-solutions/smarttime/",smartTimeComponentTitle:"BigHand SmartTime",smartTimeImg:"smarttime.png",smartTimeBtnText:"View More BigHand SmartTime",idsOverviewUrl:"https://github.com/MikeWickwar/MyIdentityServer",idsComponentTitle:"BigHand Identity Platform",idsImg:"ids.jpeg",idsButtunText:"View My Personal Identity Server",vdfOverviewUrl:"https://github.com/MikeWickwar/VDF",vdfDeployment:"https://mikewickwar.github.io/VDF/",vdfComponentTitle:"Vegas Deal Finder",vdfImg:"vegas.jpeg",vdfButtunText:"View Vegas Deal Finder Project",mbOverviewUrl:"https://github.com/MikeWickwar/drillWriter",mbComponentTitle:"Marching Band Drill Writer (WIP)",mbImg:"grid.png",mbButtunText:"View Drill Writer App Project"}}},Ee=Pe,We=(0,d.A)(Ee,ee,te,!1,null,"55e65772",null),He=We.exports,Be=function(){var e=this,t=e._self._c;return t("div",{staticClass:"testimonials-container"},[t("h1",[e._v("Testimonials")]),e._l(e.testimonials,(function(i){return t("div",{key:i.name,staticClass:"testimonial"},[t("div",{staticClass:"testimonial-content"},[t("h2",[e._v(e._s(i.name))]),t("h3",[e._v(e._s(i.title))]),t("p",{staticClass:"date"},[e._v(e._s(i.date))]),t("p",{staticClass:"content"},[e._v(e._s(i.content))])])])}))],2)},Oe=[],Fe={name:"TestimonialsComponent",data(){return{testimonials:[{name:"Tom Jones",title:"CEO/Founder - EV Engine LLC",date:"June 27, 2024",content:"I had the pleasure of working with Mike for three years while he was on my team at Iridium/BigHand (2020-23). Mike joined our team when we acquired SmartTime in 2020. The SmartTime team had only five members, but they managed to support a growing client base with great results and high customer retention. Quite frankly, they were only able to accomplish this by having a very talented team that was fully committed to customer satisfaction. In his role as Senior Software Developer, Mike was responsible for product development, new features, releases, testing, documentation, etc. He worked with his team to put out numerous high-quality releases that were well received by existing clients and included new features to help us to sign up new clients. Due to the small team size, Mike continued to be involved in all aspects of supporting the product line and growing client base. He was known for his top-quality work, and for having a great attitude. As a testament to his skill as a developer, he was brought in to help out on developing the BigHand Identify Platform – a key piece of technology that will be used by all BigHand products. Mike presents himself well and is an excellent client-facing resource. I can give Mike my strongest recommendation for any position or engagement and would be glad to take a reference call."},{name:"John Smolinski",title:"Senior Software Engineer at BigHand",date:"June 24, 2024",content:"I started working with Mike when he joined the Identity Platform team at BigHand. Mike’s work ethic, positive outlook and can-do attitude impressed me. He took ownership of the configuration API components and moved the product forward. Successfully. He’s a team player and does not recoil from challenges. I liked collaborations with Mike, as we always seemed to find a path forward with any development issue. Mike has a solid technical background and I’ve witnessed him grow his skillset in a challenging environment. The success and stability of the identity platform is due in large part to Mike's efforts. He’s a dedicated and skilled professional that I am happy to highly recommend."},{name:"Kjell Pinter",title:"Developer & Product Manager | LegalTech veteran",date:"October 28, 2022",content:"Mike reported to me for almost 7 years and was one of the first developers I hired at my company. Within about six months Mike had become indispensable. What I really appreciate about him is that he just gets things done and solves hard problems independently, I never needed to micro-manage him. If you don’t like to micro-manage, then Mike is the type of person you want on your team. In addition to being a top-notch developer, he also has excellent soft skills. Clients regularly reached out to me to express their appreciation for Mike’s work. Mike was a highly valued member of our team and I would hire him again in a heartbeat."}]}}},Ve=Fe,Ue=(0,d.A)(Ve,Be,Oe,!1,null,"788a05ee",null),Ne=Ue.exports;n["default"].use(S.Ay);var Le=new S.Ay({mode:"history",routes:[{path:"/",component:H},{path:"/about",component:q},{path:"/resume",component:Z},{path:"/projects",component:He},{path:"/testimonials",component:Ne}]}),ze=(i(313),i(292));n["default"].config.productionTip=!1,n["default"].use(ze.Ay$),new n["default"]({router:Le,render:e=>e(w)}).$mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,a){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],a=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,r=n[0],s=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var d=l(i)}for(t&&t(n);c<r.length;c++)a=r[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[504],(function(){return i(195)}));n=i.O(n)})();
//# sourceMappingURL=app.bd80eb6b.js.map
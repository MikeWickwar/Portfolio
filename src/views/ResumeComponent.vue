<template>
  <div class="resume-container" id="resume">
    <b-button :href="resumeLink" download="Wickwar_Resume.pdf" id="downloadResume">
      Download
    </b-button>

    <div class="container">
        <header class="contact-info">
            <h1>Mike Wickwar</h1>
            <p>📧 <a href="mailto:mike.wickwar@gmail.com">mike.wickwar@gmail.com</a></p>
            <p>📞 <a href="tel:+17208378019">1-(720)-837-8019</a></p>
            <p>🔗 <a href="https://linkedin.com/in/mikewickwar/" target="_blank">linkedin.com/in/mikewickwar/</a></p>
            <p>💻 <a href="https://github.com/MikeWickwar" target="_blank">github.com/MikeWickwar</a></p>
            <p>🌐 <a href="https://mikewickwar.com" target="_blank">https://mikewickwar.com</a></p>
        </header>

        <section class="section">
            <h2>About Me</h2>
            <p>Senior Software Developer with 8+ years of full stack expertise in C#, .NET, and JavaScript. Adept at transforming complex challenges into intuitive solutions, particularly in identity management. Known for driving innovation and delivering high-impact, scalable products that exceed expectations.</p>
        </section>

        <section class="section">
            <h2>Skills</h2>
            <section>
                C#, .NET Framework, ASP.NET MVC, Duende Identity Server, Microsoft SQL Server, API Development
                OpenID Connect (OIDC), JSON Web Token (JWT), Swagger API, Node.js, Blazor, JavaScript
                Kendo UI, jQuery, CSS, SASS, HTML, Razor, NUnit, SpecFlow, Ghost Inspector
                Webpack, MS Azure, Docker, Microsoft Entra Id, Git, Visual Studio, VS Code
                CI/CD, Technical Documentation, Leadership
            </section>
        </section>

        <section class="section">
            <h2>Professional Experience</h2>
            <h3>Senior Software Developer</h3>
            <p>BigHand (Remote)<br>Feb 2022 – July 2024</p>
            <ul>
                <li>Identity Platform Team: Key contributor to the initial implementation of a cloud-based, multi-tenant identity solution; customized identity server for validation and managed identity databases; developed a configuration API with dynamic endpoints for client creation, identity providers, and API resource scopes.</li>
                <li>SmartTime Application Team: Rewrote the application using Blazor for unified client-server code, enhancing development efficiency and performance; collaborated with consultants to implement a SaaS solution that met standards and expectations.</li>
                <li>Development & Design: Designed and implemented new features using C#, Blazor, SQL, jQuery, JavaScript, Kendo UI, CSS, SCSS, and Webpack.</li>
            </ul>
            <h3>Senior Software Developer</h3>
            <p>Iridium Technology (Remote)<br>Dec 2020 – Feb 2022</p>
            <ul>
                <li>SmartTime Application Team: Continued development of the SmartTime application post-acquisition.</li>
                <li>Communicated with clients to ensure system performance met expectations.</li>
                <li>Onboarded and collaborated with a team of consultants to manage client relationships.</li>
                <li>Enhanced product functionality and performance in a larger corporate environment.</li>
            </ul>
            <h3>Web Developer</h3>
            <p>Smart Time Apps (Remote)<br>May 2016 – Dec 2020</p>
            <ul>
                <li>Developed the initial form of the Smart Time application at a start-up and continued its development through two acquisitions.</li>
                <li>Focused on time tracking, billing, and compliance features for law firms.</li>
                <li>Developed robust time capture technology for emails, phone calls (VOIP), Zoom meetings, calendar events, etc.</li>
            </ul>
        </section>

        <section class="section">
            <h2>Relevant Education</h2>
            <h3>Galvanize Inc</h3>
            <p>Full Stack Developer, Full Stack Development<br>2015 – 2016</p>
            <ul>
                <li>Full stack development using Node.js, Express, Angular, and Postgres</li>
                <li>Additional Technologies: Knex, OAuth, jQuery, Jade, Bootstrap, SASS, LESS, Gulp, Grunt</li>
                <li>6-month Immersive Web Development Program</li>
            </ul>
            <h3>Arapahoe Community College</h3>
            <p>Computer Repair, Computer Science, Art<br>2014 – 2015</p>
            <ul>
                <li>Gained experience in art and design, A+ computer repair, and general computer science</li>
                <li>Sparked initial curiosity in programming and computer science</li>
            </ul>
        </section>

        <section class="section">
            <h2>References</h2>
            <p>Available upon request.</p>
        </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeComponent',
    data(){
      return{
        resumeLink: "Wickwar_Resume.pdf"
      }
    }
}
</script>

<style scoped>
#downloadResume{
  margin-bottom: 15px;
}
.resume-container {
  max-width: 80vw;
  max-height: 93%;
  margin: 0 auto; 
  margin-top: 25px;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #e2e4e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  border-radius: 10px;
  position: relative;
  z-index: 1;
  color: #333;
}

.resume-header {
  text-align: center;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.container {
  width: 80%;
  margin: auto;
  overflow: hidden;
}
h1 {
  text-align: center;
  color: #333;
}
p {
  margin: 0 0 10px;
}
.contact-info {
  margin-bottom: 20px;
}
.contact-info a {
  color: #0066cc;
  text-decoration: none;
}
.section {
  margin-bottom: 40px;
}
.section h2 {
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.section ul {
  padding-left: 20px;
}
.section ul li {
  margin-bottom: 5px;
}
</style>

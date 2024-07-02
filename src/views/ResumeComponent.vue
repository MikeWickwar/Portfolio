<template>
  <div class="resume-container" id="resume">
    <b-button :href="resumeLink" download="Wickwar_Resume.pdf" id="downloadResume">
      Download
    </b-button>

    <header class="resume-header">
      <h1>Mike Wickwar</h1>
      <h2>Senior Software Developer</h2>
    </header>
    <section class="contact-info">
      <h3>Contact Information</h3>
      <ul>
        <li>Email: <a href="mailto:mike.wickwar@gmail.com">mike.wickwar@gmail.com</a></li>
        <li>Phone: <a href="tel:+17208378019">(720) 837-8019</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/mikewickwar/" target="_blank">linkedin.com/in/mikewickwar/</a></li>
        <li>GitHub: <a href="https://github.com/MikeWickwar" target="_blank">github.com/MikeWickwar</a></li>
      </ul>
    </section>
    <section class="summary">
      <h3>Professional Summary</h3>
      <p>
        Highly skilled Senior Software Developer with over 7 years of experience in full stack development, specializing in C#, .NET, JS, and identity management. Proven track record in contributing to complex projects, enhancing user experience, and delivering robust, scalable solutions. Expertise in performance optimization and security, with a strong focus on impactful project delivery.
      </p>
    </section>
    <section class="experience">
      <h3>Professional Experience</h3>
      <div class="job">
        <h4>Senior Software Developer</h4>
        <h5>BigHand (Remote)</h5>
        <p>Feb 2022 – Present</p>
        <ul>
          <li>Developed the initial form of the Smart Time application at a start-up.</li>
          <li>Improved user experience and performance.</li>
          <li>Collaborated to design and implement new features using C#, SQL, jQuery, Kendo UI, and CSS.</li>
          <li>Transitioned to Blazor for unified client-server code, enhancing development efficiency and application performance.</li>
          <li>Implemented automated testing with Ghost Inspector.</li>
        </ul>
        <h5>Identity Platform Team:</h5>
        <ul>
          <li>Key contributor to the Duende Identity project.</li>
          <li>Designed and deployed scalable identity services, ensuring robust access management.</li>
          <li>Integrated identity solutions across multiple applications, improving operational efficiency.</li>
          <li>Implemented unit testing with NUnit and automated testing with SpecFlow.</li>
        </ul>
        <p>Skills: C#, .NET Framework, Duende Identity Server, Microsoft SQL Server, API Development, OpenID Connect (OIDC), JSON Web Token (JWT), Swagger API, Node.js, ASP.NET, Blazor, JavaScript, jQuery, CSS, SASS, HTML, NUnit, SpecFlow, Ghost Inspector.</p>
      </div>
      <div class="job">
        <h4>Senior Software Developer</h4>
        <h5>Iridium Technology (Remote)</h5>
        <p>Dec 2020 – Feb 2022</p>
        <ul>
          <li>Continued development of the SmartTime application post-acquisition.</li>
          <li>Enhanced product functionality and performance within a larger corporate environment.</li>
          <li>Maintained high standards of user satisfaction and product reliability.</li>
        </ul>
        <p>Skills: .NET Framework, ASP.NET MVC, JavaScript, jQuery, SQL.</p>
      </div>
      <div class="job">
        <h4>Web Developer</h4>
        <h5>Smart Time Apps (Remote)</h5>
        <p>May 2016 – Dec 2020</p>
        <ul>
          <li>Developed the initial form of the Smart Time application at a start-up.</li>
          <li>Focused on time tracking, billing, and compliance features for law firms.</li>
          <li>Utilized full stack technologies to develop and optimize the product.</li>
          <li>Contributed to the successful acquisition of Smart Time by Iridium Technology.</li>
        </ul>
        <p>Skills: .NET Framework, ASP.NET MVC, JavaScript, jQuery, Kendo UI, SQL.</p>
      </div>
      <div class="job">
        <h4>Assistant Band Director, Percussion Caption Head, Drill Writer, Percussion Arranger</h4>
        <h5>Eaglecrest High School (Centennial, CO)</h5>
        <p>Jun 2009 – Oct 2015</p>
        <ul>
          <li>Expanded the marching program from under 30 to nearly 150 students.</li>
          <li>Developed and implemented percussion arrangements and drill writing.</li>
          <li>Contributed to the overall growth and success of the music program.</li>
        </ul>
      </div>
    </section>
    <section class="education">
      <h3>Education</h3>
      <div class="school">
        <h4>Galvanize Inc</h4>
        <p>Full Stack Developer, Full Stack Development (2015 – 2016)</p>
        <ul>
          <li>Full stack development using Node.js, Express, Angular, and Postgres.</li>
          <li>Additional Technologies: Knex, OAuth, jQuery, Jade, and Bootstrap.</li>
          <li>6-month Immersive Web Development Program.</li>
        </ul>
      </div>
      <div class="school">
        <h4>Arapahoe Community College</h4>
        <p>Art, Computer Repair, Computer Science (2014 – 2015)</p>
        <ul>
          <li>Gained experience in art and design, A+ computer repair, and general computer science.</li>
          <li>Sparked initial curiosity in programming and computer science.</li>
        </ul>
      </div>
      <div class="school">
        <h4>Colorado State University</h4>
        <p>Music Teacher Education and Music Performance (2007 – 2010)</p>
        <ul>
          <li>Activities and Societies: Music Letter, Phi Mu Alpha Sinfonia (Vice President).</li>
          <li>Studied classical music, theory, performance, and education techniques in a competitive percussion studio.</li>
        </ul>
      </div>
      <div class="school">
        <h4>Arapahoe High School</h4>
        <p>High School Diploma (Centennial, CO)</p>
        <ul>
          <li>Graduated with a strong foundation in academics and extracurricular activities.</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import html2pdf from 'html2pdf.js';

export default {
  name: 'ResumeComponent',
  import: {
      html2pdf
    },
    data(){
      return{
        resumeLink: "Wickwar_Resume.pdf"
      }
    },
    methods: {
    downloadPDF() {
      const element = document.getElementById('resume');
      const options = {
        margin: 1,
        filename: 'WickwarResume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, scrollX: 0, scrollY: 0, useCORS: true, logging: true, allowTaint: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

      // Calculate the full height of the scrollable content
      const elementHeight = element.scrollHeight;
      element.style.height = `${elementHeight}px`;

      html2pdf().set(options).from(element).save();

      // Reset the height after generating the PDF
      element.style.height = '';
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
  max-height: 70vh;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #e2e4e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  border-radius: 10px;
  position: relative;
  z-index: 1;
}

.resume-header {
  text-align: center;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info ul li {
  margin-bottom: 5px;
}

.contact-info a {
  color: #007BFF;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

section h3 {
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.job, .school {
  margin-bottom: 20px;
}

.job h4, .school h4 {
  margin-bottom: 5px;
}

.job h5, .school p {
  margin-bottom: 5px;
  font-style: italic;
}

.job ul, .school ul {
  list-style: disc;
  padding-left: 20px;
}

.references {
  margin-top: 20px;
}
</style>

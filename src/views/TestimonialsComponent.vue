<template>
  <div class="testimonials-container">
    <h1>Testimonials</h1>
    <div class="testimonial" v-for="testimonial in testimonials" :key="testimonial.name">
      <div class="testimonial-content">
        <h2>{{ testimonial.name }}</h2>
        <h3>{{ testimonial.title }}</h3>
        <p class="date">{{ testimonial.date }}</p>
        <p class="content" v-html="testimonial.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialsComponent',
  data() {
    return {
      testimonials: [
        {
          name: 'Amer Jaber',
          title: 'Software Engineering Lead at BigHand',
          date: 'July 5, 2024',
          content: `I had the distinct pleasure of working with Mike Wickwar, who reported directly to me as a senior developer. Mike embodies all the qualities of an exceptional developer, demonstrating outstanding attention to detail and an unwavering commitment to delivering high-quality results. Beyond these attributes, Mike possesses a remarkable ability to learn new technologies rapidly, which sets him apart.
                    </br></br>Mike quickly mastered C# and Blazor, showcasing his capacity for swift learning and adaptation. This proficiency, combined with his technical expertise, significantly contributed to the success of our projects. His ability to efficiently tackle complex tasks and consistently meet deadlines is commendable.
                    </br></br>Moreover, Mike's positive attitude and collaborative nature greatly enhance the team dynamic. He is not only a skilled developer but also a supportive team player, always willing to assist and share his knowledge with colleagues.
                    </br></br>I am confident that Mike will be an invaluable asset to any organization he joins. I highly recommend him for any senior development role.`
        },
        {
          name: 'Kjell Pinter',
          title: 'Developer & Product Manager | LegalTech veteran',
          date: 'October 28, 2022',
          content: `Mike reported to me for almost 7 years and was one of the first developers I hired at my company. Within about six months Mike had become indispensable. What I really appreciate about him is that he just gets things done and solves hard problems independently, I never needed to micro-manage him. If you don’t like to micro-manage, then Mike is the type of person you want on your team. In addition to being a top-notch developer, he also has excellent soft skills. Clients regularly reached out to me to express their appreciation for Mike’s work. Mike was a highly valued member of our team and I would hire him again in a heartbeat.`
        },
        {
          name: 'John Smolinski',
          title: 'Senior Software Engineer at BigHand',
          date: 'June 24, 2024',
          content: `I started working with Mike when he joined the Identity Platform team at BigHand. Mike’s work ethic, positive outlook and can-do attitude impressed me. He took ownership of the configuration API components and moved the product forward. Successfully. 
                    </br></br>He’s a team player and does not recoil from challenges. I liked collaborations with Mike, as we always seemed to find a path forward with any development issue. 
                    </br></br>Mike has a solid technical background and I’ve witnessed him grow his skillset in a challenging environment. 
                    </br></br>The success and stability of the identity platform is due in large part to Mike's efforts. He’s a dedicated and skilled professional that I am happy to highly recommend.`
        },
        {
          name: 'Taylor Armstrong',
          title: 'Senior Software Engineer at BigHand',
          date: 'July 3, 2024',
          content: `I had the pleasure of working with Mike at Smart Time Apps, Iridium, and BigHand, where he led the desktop development of Smart Time and was a vital component to our overall development efforts. From a team of 5 members with SmartTime to a company of over 350 at BigHand, Mike's expertise and collaboration skills were evident as he developed and optimized features for our SmartTime product and interacted with different teams. His leadership and determination were key factors in our success, contributing significantly to our product's acquisition by Iridium. Mike is a dedicated professional who consistently delivers outstanding results. His attention to detail and strategic problem solving approach make him an excellent addition to any team.`
        },
        {
          name: 'Tom Jones',
          title: 'CEO/Founder - EV Engine LLC',
          date: 'June 27, 2024',
          content: `I had the pleasure of working with Mike for three years while he was on my team at Iridium/BigHand (2020-23). Mike joined our team when we acquired SmartTime in 2020. The SmartTime team had only five members, but they managed to support a growing client base with great results and high customer retention. Quite frankly, they were only able to accomplish this by having a very talented team that was fully committed to customer satisfaction. In his role as Senior Software Developer, Mike was responsible for product development, new features, releases, testing, documentation, etc. He worked with his team to put out numerous high-quality releases that were well received by existing clients and included new features to help us to sign up new clients. Due to the small team size, Mike continued to be involved in all aspects of supporting the product line and growing client base. He was known for his top-quality work, and for having a great attitude. As a testament to his skill as a developer, he was brought in to help out on developing the BigHand Identify Platform – a key piece of technology that will be used by all BigHand products. Mike presents himself well and is an excellent client-facing resource. I can give Mike my strongest recommendation for any position or engagement and would be glad to take a reference call.`
        },
        {
          name: 'Tom Hobart',
          title: 'VP of Product Operations at BigHand',
          date: 'July 4, 2024',
          content: `Strong vouch for Mike who was integral in supporting our application throughout the years of working with him. My cross over with Mike was between customer services and development but Mike was always ready to help, provided quality work and was great around customers.`
        }
      ]
    };
  }
}
</script>

<style scoped>
.testimonials-container {
  max-width: 80vw;
  max-height: 70%;
  margin: 0 auto;
  margin-top: 73px; 
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #e2e4e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: auto;
  border-radius: 10px;
  position: relative;
  z-index: 1;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.testimonial {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

.testimonial-content {
  flex-grow: 1;
}

.testimonial-content h2 {
  margin: 0;
  font-size: 1.2em;
}

.testimonial-content h3 {
  margin: 5px 0;
  font-size: 1em;
  color: #007BFF;
}

.testimonial-content .connection,
.testimonial-content .date {
  font-size: 0.9em;
  color: #777;
}

.testimonial-content .content {
  margin-top: 10px;
}
</style>

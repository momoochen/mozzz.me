<template>
  <div id="about">
    <div class="container">
      <div class="photo" />
      <div class="title-animation">
        I am Mollie Chen,
        <br>a UI Designer, based in Taipei Taiwan.
      </div>
      <!-- <div class="name">Hello, there</div> -->
      <!-- <div class="description">
        <p>
          I am Mollie, a designer from Taipei who is passionate about Graphic and User Interface design. Graduated from Fu Jen University, majoring in Visual Communication Design. I worked as a designer in packaging design company. And now,  I am currently working in a startup as a Senior Designer. Aside from designing UI, I also cooperate with engineers for the website layout.
        </p>
        <p>
          I can work under pressure, versatile, and professional towards accomplishing every project given. I have the ability to create more possibilities in a challenging work environment. As the saying goes, “You keep on learning when you choose to solve problems”,  this proverb encourages me to do my best for my career and never give up.
        </p>
        <p>
          Aside from working in my current job, I also work as a freelance designer which I could practice more of my skills and explore with different areas of the design industry. Also, I like to travel around the world to open up my mind for more learnings and enhance my experience for my career. Those made me believe in the importance of work-life balance.
        </p>
      </div> -->
      <div class="description">
        { Professional Skills }
        <br>
        <div class="skill">＃HTML & CSS</div>
        <div class="skill">＃Graphic Design</div>
        <div class="skill">＃Brand Design</div>
        <div class="skill">＃Packaging Design</div>
        <div class="skill">＃UI & UX Design</div>
        <div class="skill">＃App Design</div>
        <div class="skill">＃Web Design</div>
      </div>
      <div class="description">
        { Software Skills }
        <br>
        <div class="software-skill">＃Visual Studio Code</div>
        <div class="software-skill">＃Sketch / Zeplin</div>
        <div class="software-skill">＃Photoshop</div>
        <div class="software-skill">＃Illustrator</div>
        <div class="software-skill">＃Indesign</div>
        <div class="software-skill">＃After Effect</div>
      </div>
      <p>
        He restoreth my soul: he guideth me in the paths of righteousness for his name's sake.
        <br>Psalm 23:3
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#about {
  padding-top: 100px;
}
.container {
  cursor: default;
  margin: 0 auto;
  max-width: 1024px;
  padding: 20px 220px;
  @media only screen and (max-width: 900px) {
    padding: 20px 100px;
  }
  @media only screen and (max-width: 500px) {
    padding: 30px 20px;
  }

  .photo {
    width: 150px;
    height: 150px;
    border-radius: 58% 42% 62% 38% / 42% 63% 37% 58%;
    background: #ddd;
    background-image: url('../assets/imgs/face.svg');
    background-size: cover;
    margin: 0 auto;
    overflow: hidden;
    @media only screen and (max-width: 500px) {
      width: 100px;
      height: 100px;
      text-align: center;
    }
  }
  .name {
    margin: 20px 0;
    @media only screen and (max-width: 500px) {
      font-size: 20px;
    }
  }
  .description {
    text-align: center;
    padding-bottom: 50px;
    margin-top: 20px;
    p {
      font-size: 16px;
      color: black;
      text-align: left;
      line-height: 25px;
      margin-bottom: 16px;
    }
  }
  .skill {
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    background: #beac83;
    display: inline-block;
    margin: 20px 6px 0;
  }
  .software-skill {
    font-size: 13px;
    padding: 4px 8px;
    border-radius: 4px;
    background: #beac83;
    display: inline-block;
    margin: 20px 6px 0;
  }
}
p {
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  line-height: 20px;
  color: #ddd;
}

.title-animation {
  margin: 30px 0;
  font-size: 28px;
  text-align: center;
  // animation-name: MoveIn;
  // animation-duration: 5s;
  // animation-delay: 4s;
  // animation-iteration-count: infinite;
  // animation-direction: alternate;
}

@keyframes MoveIn {
  0% {
    opacity: 0;
    filter: blur(0px);
  }
  30% {
    filter: blur(10px);
  }
  60% {
    opacity: 1;
    filter: blur(0px);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
  }
}
</style>

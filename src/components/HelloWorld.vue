<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>やれやれだぜ (Good Grief)!</h3>
    <h4>You seem to have found my portfolio...!</h4>
    <p>Well. All the important stuff is down there, and the less pertinent and more fun stuff is 
      up there. If you're in a rush, head down. Otherwise, feel free to wander.
    </p>
    <h3>Looking for something in particular?</h3>
    <ul>
      <li><b>Skills:</b>
          <ul>
            <li>Tireless Worker</li>
            <li>Motivated</li>
          </ul>
      </li>
      <li><b>Languages:</b></li>
      <ul>
        <li>HTML/CSS</li>
        <li>Javascript</li>
      </ul>
      <li><b>Frameworks:</b></li>
      <ul>
        <li>React</li>
        <li>Angular</li>
        <li>Vue</li>
      </ul>
      <li><b>Works:</b></li>
      <ul>
        <li><a href="https://codepen.io/willatwork/pen/MWpePVG">Ping Pong</a></li>
        <li><a href="https://kittkatarts.com/">KittKatArts</a></li>
        <li><a href="https://github.com/willadelinephillips/jillians-cookbook">Jillian's Cookbook</a></li>
      </ul>
    </ul>
    <h3>On the fence about hiring me to be your new Software Developer?</h3>
    <p> My name is Will (Willow) Phillips. I'm a student of code, with and endless drive to 
      create and improve. I just want to let you know what an honor it is that you're considering 
      me. I work very hard every day, having worked that day or not, tired or not, to improve my 
      coding abilities so I can enter the field of my dreams. If there was an award for persistance, 
      it'd be listed with my frameworks and languages.</p>
    <p> If your position contains a language or skill that I don't list, please ask me about my 
      ability to self-teach. I was homeschooled until the age of 19, and confidently refer to 
      myself as an autodidact. I can utilize the fundimentals of programming to familiarize 
      myself with the language you need, and odds are I've already played with it and just don't 
      have quite enough confidance to list it on my portfolio. Check with me!</p>
    <p> Regardless of your decision, I deeply appreciate you considering me. Every consideration 
      is one step closer to being hired, and being hired is the foot in the door I need to 
      achieve my goals. I hope the very best for you and your company, and that even if you don't 
      end up with me on your team, that you keep me in mind for the future. 
    </p>
    <h3>A million thanks and the best of luck in your ventures!</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 2% 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  padding-bottom:.3%;
  padding-top:.3%;
}
a {
  color: #42b983;
}
p {
  text-align: center;
  margin-right:15%;
  margin-left:15%;
  font-size: 120%;
}
</style>

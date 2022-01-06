<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>やれやれだぜ (Good Grief)!</h3>
    <h4>You seem to have found my portfolio</h4>
    <p></p>
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
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  padding-bottom:2px;
  padding-top:2px;
}
a {
  color: #42b983;
}
</style>

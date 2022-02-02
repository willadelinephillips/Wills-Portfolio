<template>
  <div class="container">
    <h1>
      <span class="typed-text">{{ typeValue }}</span>
      <br>
      <span class="typed-text">Yeet?</span>
      <p>Oops! This appears to be a work in progess! Come back later</p>
    </h1>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['Hello there', 'I see you have found the Typer section.'],
        typingSpeed: 100,
        erasingSpeed: 10,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 6rem;
    font-weight: normal;
    span.typed-text {
      color: #832183;
    }
  }
  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% { background-color: transparent; }
    99% { background-color: transparent; }
  }
</style>
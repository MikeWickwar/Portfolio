<template>
    <div>
        <h1 class="welcome-text">Hi! Welcome to my portfolio.</h1>
        <h1 class="welcome-text">Thank You for stopping by.</h1>
    </div>
</template>

<script>
export default {
  name: 'WelcomeComponent',
}
</script>

<style scoped>
.welcome-text {
  font-size: 3em; 
  color: #fff; 
  opacity: 0; 
  animation: fadeIn 2s ease forwards; 
  text-align: right;
  position: relative;
  right: 5%; 
  top: 10vh;
}

@keyframes fadeIn {
  0% {
    opacity: 0; /* Start with opacity 0 */
    transform: translateY(-50px); /* Initial position */
  }
  100% {
    opacity: 1; /* End with opacity 1 */
    transform: translateY(0); /* Final position */
  }
}
</style>


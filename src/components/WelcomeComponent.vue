<template>
    <div>
        <h1 class="welcome-text">Hi!</h1>
        <h1 class="welcome-text">Welcome to my portfolio.</h1>
        <h1 class="welcome-text"><span style="color: #ffff99;">Thank You</span> for stopping by.</h1>
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
  right: 20%; 
  top: 15vh;
}
@media (max-width: 768px) {
  .welcome-text {
    right: 5%; 
  }
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


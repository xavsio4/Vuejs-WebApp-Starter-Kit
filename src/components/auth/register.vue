<template>
<section>
    <div class="register container">
        <div class="col-md-6">
  <!-- Default form register -->
  <form>
    <p class="h4 text-center mb-4">Sign up</p>
    <label for="name" class="grey-text">Your name</label>
    <input type="text" id="defaultFormRegisterNameEx" class="form-control"/>
    <br/>
    <label for="email" class="grey-text">Your email</label>
    <input type="email" id="email" class="form-control"/>
    <br/>
    <label for="emailconfirm" class="grey-text">Confirm your email</label>
    <input type="email" id="emailconfirm" class="form-control"/>
    <br/>
    <label for="password" class="grey-text">Your password</label>
    <input type="password" id="password" class="form-control"/>
    <div class="text-center mt-4">
      <button class="btn btn-primary" type="submit">Register</button>
    </div>
  </form>
        </div>
        <div class="col-md-6"></div>
  <!-- Default form register -->
    </div>
</section>
</template>
<script>
export default {
    
}
</script>
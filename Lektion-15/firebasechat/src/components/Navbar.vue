<template>
  <div class="navbar">
       <div>
            <p>displayName</p>
            <p class="email">Currently logged in as user@gmail.com</p>
      </div>
      <button class="btn btn-primary">Logout</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    padding: 2rem;
    border-bottom: 1px solid var(--clr-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar p {
    color: #444;
}
.navbar p.email {
    color: #999;
    font-size: .9rem;
}
</style>
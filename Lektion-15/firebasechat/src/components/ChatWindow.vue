<template>
  <div class="chat-window">
      <div class="error">error message</div>
      <div class="messages">

          <!-- <div class="single">
              <span class="created-at">2 min ago</span>
              <div class="single-message">
                  <span class="name">Daniel</span>
                  <span class="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, at?</span>
              </div>
          </div>
          <div class="single own">
              <span class="created-at">2 min ago</span>
              <div class="single-message">
                  <span class="name">Daniel</span>
                  <span class="message">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, at?</span>
              </div>
          </div> -->

          <Single-message />
          <Single-message />
          <Single-message />

      </div>
  </div>
</template>

<script>
import SingleMessage from './SingleMessage.vue'
export default {
    components: {
        SingleMessage
    }
}
</script>

<style>
    .chat
SingleMessage-window {
        background-color: var(--clr-chat-bg);
        flex: 1;
        overflow: auto;
    }
    .messages {
        /* height: 100%; */
        padding: 0 2rem;
    }
    .single {
        margin: 1rem 0;
        max-width: 70%;
    }
    .created-at {
        display: block;
        color: #999;
        font-size: .8rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .single-message {
        background-color: #fff;
        padding: 1rem 1.5rem;
        border-radius: var(--border-radius);
    }
    .name {
        font-weight: bold;
        color: var(--clr-primary);
        margin-right: .5rem;
        /* display: block; */
    }
    .own {
        margin-left: auto;
    }
    .own .name {
        display: none;
    }
    .own .single-message {
        /* background-color: var(--clr-primary); */
        background-color: #b5d0df;;
    }
    .own .created-at {
        text-align: end;
    }
</style>
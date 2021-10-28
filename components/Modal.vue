<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
      gotochat() {
        document.location = "/message";
      }
    },
  };
</script>

<template>
  <transition name="modal-fade z-50">
    <div class="modal-backdrop" style="z-index:1000">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          Begin 20 mins live chat with Lendon for $10
        </header>

        <section
          class="modal-body"
          id="modalDescription"
        >
          You will not be charged if Lendon doesn't answer the call immediately.
          <br />
          You can get a 50% refund if you are not satisfied with Lendon's service.
        </section>

        <footer class="modal-footer flex justify-around items-center flex-row">
          <button
            type="button"
            class="font-bold"
            @click="gotochat"
          >
            Next
          </button>
          <button
            type="button"
            class=""
            @click="close"
            aria-label="Close modal"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .modal-header,
  .modal-footer {
    padding: 5px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: black;
    font-size: 20px;
    font-weight: bold;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: row;
  }

  .modal-body {
    position: relative;
    padding: 10px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
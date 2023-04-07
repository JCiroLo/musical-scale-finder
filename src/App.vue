<template lang="pug">
router-view
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Finlandica:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Finlandica', sans-serif;
}

body {
  background-color: $color-background;
}

::-webkit-scrollbar {
  width: 10px;

  &-track {
    background: $color-background;
  }

  &-thumb {
    background: #444;
    border-radius: 10px;

    &:hover {
      background: #555;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.1s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0.5);
}
</style>

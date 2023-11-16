<template>
  <header>
    <font-awesome-icon icon="fa-solid fa-futbol-ball" class="icon" />
  </header>
</template>

<style scoped lang="scss">
label {
  color: #fff;
  cursor: pointer;
}

header {
  background-color: $purple-500;
  height: $header-height;
  padding: 0 8dvw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  color: $green-500;
  height: 30px;
  width: 30px;
}

.save-simulation-switch {
  margin-right: 10px;
}
</style>

<template>
  <div class="hero-container">
    <h1>Simulador Premier League</h1>
    <h2>
      Quem vence? Quem vai à Champions League? Europa League, Conference? Quem cai? Faça sua
      simulação e crie a sua temporada da Premier League!
    </h2>
  </div>
</template>

<style scoped lang="scss">
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: $text-3xl;
    font-weight: 700;
    line-height: $text-4xl;
    color: $grey-800;

    @media (min-width: $screen-sm) {
      font-size: $text-5xl;
      line-height: normal;
    }
  }
  h2 {
    font-size: $text-lg;
    font-weight: normal;
    line-height: $text-xl;
    color: $grey-700;
    width: 100%;

    @media (min-width: $screen-sm) {
      width: 80%;
    }

    @media (min-width: $screen-sm) {
      font-size: $text-xl;
      line-height: normal;
    }
  }
}
</style>

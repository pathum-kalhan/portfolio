<template>

    <nav class="header__title">
        <h1>Pathum Kalhan</h1>
        <p>Senior full stack JavaScript developer</p>
    </nav>

</template>

<style>
.header__title {
  display: flex;
  justify-content: center;
  align-items: baseline;
}

.header__title > p {
  margin-left: 1rem;
}

@media (max-width: 40rem) {
  .header__title {
    flex-direction: column;
    align-items: center;
  }
  .header__title > p {
    margin-left: 0;
  }
}
</style>

<template>
  <div class="sauveteur">
    <img class="sauveteur__image" src="../images/user.png">

    <div class="sauveteur__infos">
        <h1 class="sauveteur__infos__nom">NOM Prénom</h1>
        <p class="sauveteur__infos__sauvetages__texte">Nombre de sauvetages : <span class="sauveteur__infos__sauvetages__texte--bold">69</span></p>
        <p class="sauveteur__infos__sauvetages__texte">Nombre de personnes sauvées : <span class="sauveteur__infos__sauvetages__texte--bold">420</span></p>
    </div>
  </div>
</template>

<script>
export default{
    name: 'FicheTechniqueSauveteur'
}
</script>

<style lang="scss">
.sauveteur {
  display: flex;
  align-items: center;
  padding: 8px;
  width: 600px;
  height: auto;
  background-color: rgb(250, 250, 250);
  border: solid 2px black;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;

  &__image {
      width: 100px;
      height: 100px;
      background-color: white;
      border: solid 1px black;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
  }

  &__infos{
      width: 500px;
      padding-left: 16px;
      text-align: left;

      h1{
          margin: 0;
          text-align: center;
      }

      &__nom{
          font-size: 24px;
          font-weight: bold;
      }

      &__texte{
          font-size: 16px;

          &--bold{
              font-weight: bold;
          }
      }
  }
}
</style>
<template>
    <div class="containerBateau">       
        <div class="inline">
            <img class="bateauIMG" src="@/assets/bateau.png" :alt="nom_bateau">
            <div>
                <h1>Nom: {{nom_bateau}}</h1>
                <p>Capacité :{{capacite}}</p>
                <p>Description :{{description}}</p>
                <p>Capitaine :{{capitaine}}</p>
                <p>Nombre de sorties en mer :{{sorties}}</p>
            </div>
            
        </div>
        
    </div>
</template>


<script>
export default {
    name:"Bateau",
    data(){
        return{
            nom_bateau:"Inconnu",
            capacite:"Inconnue",
            description:"Pas de description",
            capitaine:"Inconnu",
            sorties:"Inconnue",
        }
    }
}
</script>


<style lang="scss">

    .containerBateau{
        height:300px;
        width:500px;
        position: relative;
        //border:1px solid black;
        border-radius: 20px;
        background-color:$grey;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        padding: .5rem;
    }
    .inline{
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    img{
        object-fit: cover;
    }
    .bg{
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
    }
    .bateauIMG{
        border-radius: 50%;
        width:200px;
        height:200px;
    }
</style>
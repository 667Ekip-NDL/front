<template>
    <div class="containerBateau">       
        <div class="inline">
            <div class="content">
                <h2>{{title}}</h2>
                <p>Date : {{date}}</p>
                <p>Personnes sauvés : {{personnes_sauves}}</p>
                <div>
                    <p>Participants :</p>
                    <p v-for="p in participants" v-bind:key="p">{{p}}</p>
                </div>
            </div>
            <img class="bateauIMG" src="@/assets/bateau.png" :alt="title">
            
        </div>
        
    </div>
</template>

<script>
export default {
    name:"Bateau",
    props:{
        title:{
            type: String,
            default: 'Inconnu'
        },
        date:{
            type: String,
            default: 'Inconnu'
        },
        personnes_sauves:{
            type: String,
            default: 'Inconnu'
        },
        participants:{
            default: []
        }
    }
}
</script>


<style lang="scss">
    .containerBateau{
        min-height:300px;
        width: 45vw;
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
        width:90%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    img{
        object-fit: cover;
    }
    .bateauIMG{
        border-radius: 50%;
        width:200px;
        height:200px;
    }
</style>
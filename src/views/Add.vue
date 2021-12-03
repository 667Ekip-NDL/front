<template>
    <div>
        <div class="flex" v-show="!personOn && !sauvetageOn">
            <p class="options" @click="this.personOn=true">Sauveteur</p>
            <p class="options" @click="this.sauvetageOn=true">Sauvetage</p>
        </div>
        <div class="flex" v-show="personOn">
            <img @click="this.personOn=false" class="goback" src="@/assets/back.png" alt="">
            <form>
                <input type="text" placeholder="Nom">
                <input type="text" placeholder="prénom">
                <input type="submit">
            </form>
        </div>
        <div class="flex" v-show="sauvetageOn">
            <img @click="this.sauvetageOn=false" class="goback" src="@/assets/back.png" alt="">
            <form >
                <input type="text" placeholder="titre">
                <input type="text" placeholder="date">
                <input type="text" placeholder="personnes sauvées">
                <p>Séparez les participants par des virgules (,)</p>
                <input type="text" placeholder="participants">

                <input type="submit">
            </form>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"Add",
    components:{
    },
    data(){
        return{
            personOn:false,
            sauvetageOn:false,
        }
    }
}
</script>
<style lang="scss">

    .flex{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        .options{
            height: 30vh;
            width: 50%;
            display: flex;
            align-items:center;
            justify-content:center;
            border:solid 5px $dark-blue;
            font-size:5vw;
            &:hover {
                background-color:$dark-blue;
                color:$white;
                cursor: pointer;
            }
        }
    }
    .goback{
        position: absolute;
        top:20px;
        right:20px;
        width:5vh;
        height:5vh;
        cursor: pointer;
    }
    form{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:90%;
        input{
            border: 2px solid $dark-blue;
            width: 100%;
            max-width: 800px;
            height:50px;
            margin:0.5rem 0;
            font-size:1.5rem;
        }
    }
</style>
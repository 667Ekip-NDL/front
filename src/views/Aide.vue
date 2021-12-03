<template>
<div class="headerAide">
<router-link to="/" class="homebtn"><img src="../assets/speed-boat.png" alt="home">Home</router-link>
<h1>AIDE</h1>
</div>
    <div class="Aide">
        
        <div>
            <div id="bulle1">
                <p id="textB1">À quoi sert ce site ? <br><br>
                Il permet un accès illimité  aux informations concernant les sauveteurs de Dunkerque de différentes époques 
                ainsi que leurs missions en mer.
                </p>
            </div>
            <div id="bulle2">
                <p id="textB2">Comment accéder à ces informations ?<br><br>
                Pour cela, il vous suffit de renseigner dans la barre de recherche le nom du sauveteur ou de du sauvetage que vous 
                recherchez. Le site vous proposera les fiches se rapprochant le plus de votre demande.
                </p>
            </div>
            <div id="bulle3">
                <p id="textB3">Comment participer au projet ? <br><br>
                Pour participer au projet, deux cas de figure se présentent : soit vous détenez des informations officielles (exemple: archives)
                pouvant être ajouter au site. Soit vous pouvez partager le site afin que les exploits et le travail des sauveteurs soient reconnus de toutes et tous !
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Aide",
    components: {
        
    }
}
</script>
<style lang="scss">
.Aide{
    background-image: url(../assets/svg/stacked_waves.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: auto;
    min-width: 100vw;
    min-height: 100vh;
    position: relative;
    font-family: 'BioRhyme', serif;
    overflow: hidden;
    
}
#bulle1{
    display: flex;
    justify-content: center;
    position: absolute;
    height: 580px;
    width: 890px;
    background-repeat: no-repeat;
    top: 2vw;
    left: 3vw;
    background-image: url("../assets/svg/Bulle2.svg");
    align-items: center;
    #textB1{
        position: absolute;
        max-width: 300px;
        max-height: 230px;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }
}
#bulle2{
    display: flex;
    justify-content: center;
    position: absolute;
    height: 580px;
    width: 890px;
    background-repeat: no-repeat;
    top: 10vw;
    left: 50vw;
    background-image: url("../assets/svg/Bulle3.svg");
    align-items: center;
    #textB2{
        position: absolute;
        max-width: 300px;
        max-height: 230px;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }
}
#bulle3{
    display: flex;
    justify-content: center;
    position: absolute;
    height: 540px;
    width: 900px;
    background-repeat: no-repeat;
    top: 22vw;
    left: 20vw;
    background-image: url("../assets/svg/Bulle1.svg");
    align-items: center;
    #textB3{
        position: absolute;
        max-width: 300px;
        max-height: 230px;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }
}
.headerAide{
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    background-color: white;
    opacity: 0.8;
    align-items: center;
    h1{
        color: black;
        text-align: center;
        margin: auto;
    }
    .homebtn{
        position:absolute;
        top: 10px;
        left: 10px;
        img{
            width:5vh;
            height:5vh;
            margin-right: 5px;
        }
        display:flex;
        align-items:center;
        font-size:2rem;
        color:$dark-blue;
        text-decoration: none;
        
    }
}
</style>
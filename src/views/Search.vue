<template>
    <div>
        <input id="searchbar" type="text" v-model="input">
        <div>
            <div v-for="r in search_results" v-bind:key="r">
                <Bateau v-if="r['type']=='bateau'"
                :nom_bateau="r['data']['nom']"
                :capacite="r['data']['capacite']"
                :description="r['data']['description']"
                :capitaine="r['data']['capitaine']"
                :sorties="r['data']['sorties']"
                />
            </div>
        </div>
        
    </div>
</template>
<script>
import Bateau from '@/components/Bateau.vue'

export default {
    name:"Search",
    components: {
        Bateau
    },
    data(){
        return{
            input:"",
            sauveteur:false,
            bateau:false,
            search_results:[
                {"type":"bateau",
                "data":{
                    "nom":"tom",
                    "capacite":"5",
                    "description":"petit bateau",
                    "capitaine":"bob l'eponge",
                    "sorties":"80",
                    }
                },
                {"type":"bateau",
                "data":{
                    "nom":"Bob le gros bateau",
                    "capacite":"500",
                    "description":"pas un petit bateau",
                    "capitaine":"pas bob l'eponge",
                    "sorties":"10",
                    }
                },
                

            ]
        }
    },
    methods:{
        updateView(){
            this.sauveteur=document.getElementById('sauveteur').value=='on';
            this.bateau=document.getElementById('bateau').value=='on';
        }
    },
    mounted() {
        function search(input){
            //this.updateView();
            this.sauveteur=document.getElementById('sauveteur').value=='on';
            this.bateau=document.getElementById('bateau').value=='on';

            if (input.includes(" ") || input.length > 3){
                console.log(input)
            }
            
        }

        var searchbar = document.getElementById("searchbar")
        searchbar.addEventListener('input', () => {
               search(searchbar.value)
            });
    }
}
</script>
<style lang="scss">
    
</style>
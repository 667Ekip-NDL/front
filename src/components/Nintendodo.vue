<template>
	<div class ="nintendodo-div">
		<div class="div-center">
			<img src="@/images/nintendodo.gif" alt="Pub console Ubisoft">
		</div>
		<div class="nb-moutons" id="countSheep">
			0
		</div>
	</div>
</template>

<script>
	var sheepCounter = 0
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	function initializeCounter(){
		sleep(1300).then(() => {
			incrementSheepCounter()
		})
	}

	function incrementSheepCounter(){
		if(sheepCounter<100){
			sheepCounter++
			document.getElementById("countSheep").innerHTML = sheepCounter
			sleep(1750)
				.then(() => {incrementSheepCounter()})
		}
	}
	initializeCounter()
</script>

<style lang="scss">
.div-center
{
	width:300px;
	margin : auto;
}
.nb-moutons
{
	position : absolute;
	left:calc(50% - 140px);
	bottom: 18px;
	font-size : 30pt;
	color : blue;
}
.nintendodo-div
{
	margin-top : 20px;
	margin-bottom : 20px;
	position:relative;
}
</style>
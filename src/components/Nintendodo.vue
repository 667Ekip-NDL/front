<template>
	<div class ="nintendodo-div">
		<div class="div-center">
			<img src="@/images/nintendodo-sleep.gif" alt="Pub console Ubisoft" id="nintendodo-sleep-img">
			<img src="@/images/nintendodo.gif" alt="Pub console Ubisoft" id="nintendodo-img">
		</div>
		<div class="zzz" id="zzz">
			zZz
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
			if(sheepCounter == 100){
				sleep(650).then(() => document.getElementById("nintendodo-img").style.display = "none").then(() => {leZ()})
			} else {
				sleep(1750).then(() => {incrementSheepCounter()})
			}
		}
	}

	function leZ(){
		document.getElementById("zzz").style.display = "block"
		document.getElementById("nintendodo-sleep-img").style.display = "block"
	}
	initializeCounter()
</script>

<style lang="scss">
#nintendodo-sleep-img
{
	display : none;
}
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
.zzz
{
	display:none;
	position : absolute;
	left:calc(50% - 100px);
	bottom: 180px;
	font-size : 30pt;
	color : white;
}
.nintendodo-div
{
	margin-top : 20px;
	margin-bottom : 20px;
	position:relative;
}
</style>
var applianceCounter = 5;

var displayItemOne;
var displayItemTwo;
var displayItemThree;
var displayItemFour;
var displayItemFive;
var displayItemSix;
var displayItemSeven;
var displayItemEight;
var displayItemNine;
var displayItemTen;
var displayItemEleven;
var displayItemTwelve;
var displayItemThirteen;
var displayItemFourteen;
var displayItemFifteen;

var kwhOne;
var kwhTwo;
var kwhThree;
var kwhFour;
var kwhFive;
var kwhSix;
var kwhSeven;
var kwhEight;
var kwhNine;
var kwhTen;
var kwhEleven;
var kwhTwelve;
var kwhThirteen;
var kwhFourteen;
var kwhFifteen;

var displayLocationOne;
var displayLocationTwo;
var displayLocationThree;
var displayLocationFour;
var displayLocationFive;
var displayLocationSix;
var displayLocationSeven;
var displayLocationEight;
var displayLocationNine;
var displayLocationTen;
var displayLocationEleven;
var displayLocationTwelve;
var displayLocationThirteen;
var displayLocationFourteen;
var displayLocationFifteen;

var nameArr = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"];
var locArr = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"];

var bedHour;
<<<<<<< HEAD
var offHour;
=======
var officeHour;
>>>>>>> 634b830fc38b3d957643df58738578567c681f65
var livHour;
var kitHour;

var timeResult;
var regionFactor;
var regionString;

function itemOneNameStorage(){
	document.getElementById("app").value = applianceName1.options[applianceName1.selectedIndex].text;
	displayItemOne = applianceName1.options[applianceName1.selectedIndex].text;
	nameArr[0]=displayItemOne;
}

function itemOneLocationStorage(){
	document.getElementById("app").value = applianceLocation.options[applianceLocation.selectedIndex].text;
	displayLocationOne = applianceLocation.options[applianceLocation.selectedIndex].text;
	locArr[0]=displayLocationOne;
}

function itemTwoNameStorage(){
	document.getElementById("app").value = applianceName2.options[applianceName2.selectedIndex].text;
	displayItemTwo = applianceName2.options[applianceName2.selectedIndex].text;
	nameArr[1]=displayItemTwo;
}

function itemTwoLocationStorage(){
	document.getElementById("app").value = applianceLocation2.options[applianceLocation2.selectedIndex].text;
	displayLocationTwo = applianceLocation2.options[applianceLocation2.selectedIndex].text;
	locArr[1]=displayLocationTwo;
}

function itemThreeNameStorage(){
	document.getElementById("app").value = applianceName3.options[applianceName3.selectedIndex].text;
	displayItemThree = applianceName3.options[applianceName3.selectedIndex].text;
	nameArr[2]=displayItemThree;
}

function itemThreeLocationStorage(){
	document.getElementById("app").value = applianceLocation3.options[applianceLocation3.selectedIndex].text;
	displayLocationThree = applianceLocation3.options[applianceLocation3.selectedIndex].text;
	locArr[2]=displayLocationThree;
}

function itemFourNameStorage(){
	document.getElementById("app").value = applianceName4.options[applianceName4.selectedIndex].text;
	displayItemFour = applianceName4.options[applianceName4.selectedIndex].text;
	nameArr[3]=displayItemFour;
}

function itemFourLocationStorage(){
	document.getElementById("app").value = applianceLocation4.options[applianceLocation4.selectedIndex].text;
	displayLocationFour = applianceLocation4.options[applianceLocation4.selectedIndex].text;
	locArr[3]=displayLocationFour;
}
function itemFiveNameStorage(){
	document.getElementById("app").value = applianceName5.options[applianceName5.selectedIndex].text;
	displayItemFive = applianceName5.options[applianceName5.selectedIndex].text;
	nameArr[4]=displayItemFive;
}

function itemFiveLocationStorage(){
	document.getElementById("app").value = applianceLocation5.options[applianceLocation5.selectedIndex].text;
	displayLocationFive = applianceLocation5.options[applianceLocation5.selectedIndex].text;
	locArr[4]=displayLocationFive;
}

function itemSixNameStorage(){
	document.getElementById("app").value = applianceName6.options[applianceName6.selectedIndex].text;
	displayItemSix = applianceName6.options[applianceName6.selectedIndex].text;
	nameArr[5]=displayItemSix;
}

function itemSixLocationStorage(){
	document.getElementById("app").value = applianceLocation6.options[applianceLocation6.selectedIndex].text;
	displayLocationSix = applianceLocation6.options[applianceLocation6.selectedIndex].text;
	locArr[5]=displayLocationSix;
}

function itemSevenNameStorage(){
	document.getElementById("app").value = applianceName7.options[applianceName7.selectedIndex].text;
	displayItemSeven = applianceName7.options[applianceName7.selectedIndex].text;
nameArr[6]=displayItemSeven;
}

function itemSevenLocationStorage(){
	document.getElementById("app").value = applianceLocation7.options[applianceLocation7.selectedIndex].text;
	displayLocationSeven = applianceLocation7.options[applianceLocation7.selectedIndex].text;
	locArr[6]=displayLocationSeven;
}

function itemEightNameStorage(){
	document.getElementById("app").value = applianceName8.options[applianceName8.selectedIndex].text;
	displayItemEight = applianceName8.options[applianceName8.selectedIndex].text;
	nameArr[7]=displayItemEight;
}

function itemEightLocationStorage(){
	document.getElementById("app").value = applianceLocation8.options[applianceLocation8.selectedIndex].text;
	displayLocationEight = applianceLocation8.options[applianceLocation8.selectedIndex].text;
	locArr[7]=displayLocationEight;
}

function itemNineNameStorage(){
	document.getElementById("app").value = applianceName9.options[applianceName9.selectedIndex].text;
	displayItemNine = applianceName9.options[applianceName9.selectedIndex].text;
	nameArr[8]=displayItemNine;
}

function itemNineLocationStorage(){
	document.getElementById("app").value = applianceLocation9.options[applianceLocation9.selectedIndex].text;
	displayLocationNine = applianceLocation9.options[applianceLocation9.selectedIndex].text;
	locArr[8]=displayLocationNine;
}

function itemTenNameStorage(){
	document.getElementById("app").value = applianceName10.options[applianceName10.selectedIndex].text;
	displayItemTen = applianceName10.options[applianceName10.selectedIndex].text;
	nameArr[9]=displayItemTen;
}

function itemTenLocationStorage(){
	document.getElementById("app").value = applianceLocation10.options[applianceLocation10.selectedIndex].text;
	displayLocationTen = applianceLocation10.options[applianceLocation10.selectedIndex].text;
	locArr[9]=displayLocationTen;
}

function itemElevenNameStorage(){
	document.getElementById("app").value = applianceName11.options[applianceName11.selectedIndex].text;
	displayItemEleven = applianceName11.options[applianceName11.selectedIndex].text;
	nameArr[10]=displayItemEleven;
}

function itemElevenLocationStorage(){
	document.getElementById("app").value = applianceLocation11.options[applianceLocation11.selectedIndex].text;
	displayLocationEleven = applianceLocation11.options[applianceLocation11.selectedIndex].text;
	locArr[10]=displayLocationEleven;
}

function itemTwelveNameStorage(){
	document.getElementById("app").value = applianceName12.options[applianceName12.selectedIndex].text;
	displayItemTwelve = applianceName12.options[applianceName12.selectedIndex].text;
	nameArr[11]=displayItemTwelve;
}

function itemTwelveLocationStorage(){
	document.getElementById("app").value = applianceLocation12.options[applianceLocation12.selectedIndex].text;
	displayLocationTwelve = applianceLocation12.options[applianceLocation12.selectedIndex].text;
	locArr[11]=displayLocationTwelve;
}

function itemThirteenNameStorage(){
	document.getElementById("app").value = applianceName13.options[applianceName13.selectedIndex].text;
	displayItemThirteen = applianceName13.options[applianceName13.selectedIndex].text;
	nameArr[12]=displayItemThirteen;
}

function itemThirteenLocationStorage(){
	document.getElementById("app").value = applianceLocation13.options[applianceLocation13.selectedIndex].text;
	displayLocationThirteen = applianceLocation13.options[applianceLocation13.selectedIndex].text;
	locArr[12]=displayLocationTwelve;
}

function itemFourteenNameStorage(){
	document.getElementById("app").value = applianceName14.options[applianceName14.selectedIndex].text;
	displayItemFourteen = applianceName14.options[applianceName14.selectedIndex].text;
	nameArr[13]=displayItemFourteen;
}

function itemFourteenLocationStorage(){
	document.getElementById("app").value = applianceLocation14.options[applianceLocation14.selectedIndex].text;
	displayLocationFourteen = applianceLocation14.options[applianceLocation14.selectedIndex].text;
	locArr[13]=displayLocationFourteen;
}

function itemFifteenNameStorage(){
	document.getElementById("app").value = applianceName15.options[applianceName15.selectedIndex].text;
	displayItemFifteen = applianceName15.options[applianceName15.selectedIndex].text;
	nameArr[14]=displayItemFifteen;
}

function itemFifteenLocationStorage(){
	document.getElementById("app").value = applianceLocation15.options[applianceLocation15.selectedIndex].text;
	displayLocationFifteen = applianceLocation15.options[applianceLocation15.selectedIndex].text;
	locArr[14]=displayLocationFifteen;
}

function onAddButtonClick(){
	applianceCounter++;

	if(applianceCounter == 6){
		document.getElementById("applianceForm6").style.display = "block";
	}
	if(applianceCounter == 7){
		document.getElementById("applianceForm7").style.display = "block";
	}
	if(applianceCounter == 8){
		document.getElementById("applianceForm8").style.display = "block";
	}
	if(applianceCounter == 9){
		document.getElementById("applianceForm9").style.display = "block";
	}
	if(applianceCounter == 10){
		document.getElementById("applianceForm10").style.display = "block";
	}
	if(applianceCounter == 11){
		document.getElementById("applianceForm11").style.display = "block";
	}
	if(applianceCounter == 12){
		document.getElementById("applianceForm12").style.display = "block";
	}
	if(applianceCounter == 13){
		document.getElementById("applianceForm13").style.display = "block";
	}
	if(applianceCounter == 14){
		document.getElementById("applianceForm14").style.display = "block";
	}
	if(applianceCounter == 15){
		document.getElementById("applianceForm15").style.display = "block";
		document.getElementById("addButton").style.display = "none";
	}
}

<<<<<<< HEAD
function onContinueButtonClick(){
	kwhOne = document.getElementById("item1Power");
	kwhTwo = document.getElementById("item2Power");
	kwhThree = document.getElementById("item3Power");
	kwhFour = document.getElementById("item4Power");
	kwhFive = document.getElementById("item5Power");
	if(applianceCounter > 5){
		kwhSix = document.getElementById("item6Power");
	}
	if(applianceCounter > 6){
		kwhSeven = document.getElementById("item7Power");
	}
	if(applianceCounter > 7){
		kwhEight = document.getElementById("item8Power");
	}
	if(applianceCounter > 8){
		kwhNine = document.getElementById("item9Power");
	}
	if(applianceCounter > 9){
		kwhTen = document.getElementById("item10Power");
	}
	if(applianceCounter > 10){
		kwhEleven = document.getElementById("item11Power");
	}
	if(applianceCounter > 11){
		kwhTwelve = document.getElementById("item12Power");
	}
	if(applianceCounter > 12){
		kwhThirteen= document.getElementById("item13Power");
	}
	if(applianceCounter > 13){
		kwhFourteen = document.getElementById("item14Power");
	}
	if(applianceCounter > 14){
		kwhFifteen = document.getElementById("item15Power");
	}
}

function calculateEnergyConsumption(){
	var totalEnergy;

	/*totalEnergy = totalEnergy + ((item1Power * timeAssignment(displayLocationOne)) / 1000)
	totalEnergy = totalEnergy + ((item2Power * timeAssignment(displayLocationTwo)) / 1000)
	totalEnergy = totalEnergy + ((item3Power * timeAssignment(displayLocationThree)) / 1000)
	totalEnergy = totalEnergy + ((item4Power * timeAssignment(displayLocationFour)) / 1000)
	totalEnergy = totalEnergy + ((item5Power * timeAssignment(displayLocationFive)) / 1000)
	if(applianceCounter > 5){
		totalEnergy = totalEnergy + ((item6Power * timeAssignment(displayLocationSix)) / 1000)	
	}
	if(applianceCounter > 6){
		totalEnergy = totalEnergy + ((item7Power * timeAssignment(displayLocationSeven)) / 1000)	
	}
	if(applianceCounter > 7){
		totalEnergy = totalEnergy + ((item8Power * timeAssignment(displayLocationEight)) / 1000)	
	}
	if(applianceCounter > 8){
		totalEnergy = totalEnergy + ((item9Power * timeAssignment(displayLocationNine)) / 1000)	
	}
	if(applianceCounter > 9){
		totalEnergy = totalEnergy + ((item10Power * timeAssignment(displayLocationTen)) / 1000)	
	}
	if(applianceCounter > 10){
		totalEnergy = totalEnergy + ((item11Power * timeAssignment(displayLocationEleven)) / 1000)	
	}
	if(applianceCounter > 11){
		totalEnergy = totalEnergy + ((item12Power * timeAssignment(displayLocationTwelve)) / 1000)	
	}
	if(applianceCounter > 12){
		totalEnergy = totalEnergy + ((item13Power * timeAssignment(displayLocationThirteen)) / 1000)	
	}
	if(applianceCounter > 13){
		totalEnergy = totalEnergy + ((item14Power * timeAssignment(displayLocationFourteen)) / 1000)	
	}
	if(applianceCounter > 14){
		totalEnergy = totalEnergy + ((item15Power * timeAssignment(displayLocationFifteen)) / 1000)	
	}*/

	document.getElementById("app").value = region.options[region.selectedIndex].value;
	regionString = region.options[region.selectedIndex].value;

	console.log(regionString);
	
	if(regionString.localeCompare("NE") == 0) regionFactor = 121.60;
	if(regionString.localeCompare("MA") == 0) regionFactor = 112.81;
	if(regionString.localeCompare("ENC") == 0) regionFactor = 99.87;
	if(regionString.localeCompare("WNC") == 0) regionFactor = 104.61;
	if(regionString.localeCompare("SA") == 0) regionFactor = 131.20;
	if(regionString.localeCompare("ESC") == 0) regionFactor = 130.31;
	if(regionString.localeCompare("WSC") == 0) regionFactor = 128.81;
	if(regionString.localeCompare("M") == 0) regionFactor = 99.91;

	console.log(regionFactor);
	var cout = document.getElementById("stateEnergy");
	cout.innerHTML = regionFactor;

	}

function timeAssignment(location){
	if(location.localeCompare("Living Room") == 0) timeResult = livHour;
	if(location.localeCompare("Office") == 0) timeResult = offHour;
	if(location.localeCompare("Kitchen") == 0) timeResult = kitHour;
	if(location.localeCompare("Bedroom") == 0) timeResult = bedHour;
}
=======

>>>>>>> 634b830fc38b3d957643df58738578567c681f65

function storeBedHour(num){
	bedHour = num;
}
function storeOfficeHour(num){
	officeHour = num;
}
function storeLivHour(num){
	livHour = num;
}
function storeKitHour(num){
	livHour = num;
}

function recommendation(){
	
	var CompOut = document.getElementById("CompRecommend");
	var TVOut = document.getElementById("TVRecommend");
	var OvenOut = document.getElementById("OvenRecommend");
	var FridgeOut = document.getElementById("FridgeRecommend");

}

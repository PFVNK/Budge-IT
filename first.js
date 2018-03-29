// gets sum of total cash and bank from localstorage
if (localStorage.getItem('total') === null) {
	var total = 0;
} else {
	total = JSON.parse(localStorage.getItem('total'));
}

//gets cash total from lacalstorage
if (localStorage.getItem('cashTotal') === null) {
	var cashTotal = 0;
} else {
	cashTotal = JSON.parse(localStorage.getItem('cashTotal'));
}

//gets bank total from localstorage
if (localStorage.getItem('bankTotal') === null) {
	var bankTotal = 0;
} else {
	bankTotal = JSON.parse(localStorage.getItem('bankTotal'));
}

//gets items from localstorage
if (localStorage.getItem('moneyItems') === null) {
	var items = [];
} else {
	items = JSON.parse(localStorage.getItem('moneyItems'));
}

//gets money values from localstorage
if (localStorage.getItem('money') === null) {
	var money = [];
} else {
	money = JSON.parse(localStorage.getItem('money'));
}

//gets dates from localstorage
if (localStorage.getItem('dates') === null) {
	var dateList = [];
} else {
	dateList = JSON.parse(localStorage.getItem('dates'));
}

var cashIn = document.getElementById('cashin');
var cashOut = document.getElementById('cashout');
var bankIn = document.getElementById('bankin');
var bankOut = document.getElementById('bankout');
var cashinItem = document.getElementById('cashinitem');
var bankinItem = document.getElementById('bankinitem');
var cashoutItem = document.getElementById('cashoutitem');
var bankoutItem = document.getElementById('bankoutitem');
var formatDate = moment().format('M/DD');
var monday = JSON.parse(localStorage.getItem('monday'));
var tuesday = JSON.parse(localStorage.getItem('tuesday'));
var wednesday = JSON.parse(localStorage.getItem('wednesday'));
var thursday = JSON.parse(localStorage.getItem('thursday'));
var friday = JSON.parse(localStorage.getItem('friday'));
var saturday = JSON.parse(localStorage.getItem('saturday'));
var sunday = JSON.parse(localStorage.getItem('sunday'));
var allWeek = [];
var accountBalance = 0;
var cashBalance = 0;



function cashInsert () {
	cashTotal = JSON.parse(localStorage.getItem('cashTotal'));
	total = JSON.parse(localStorage.getItem('total'));

	money.unshift(cashIn.value);

	accountBalance = total + parseInt(cashIn.value);
	cashBalance = cashTotal + parseInt(cashIn.value);

	dateList.unshift(formatDate);

	JSONReadyDates = JSON.stringify(dateList);
	localStorage.setItem('dates', JSONReadyDates);

	JSONReadyMoney = JSON.stringify(money);
	localStorage.setItem('money', JSONReadyMoney);

	JSONReadyNums = JSON.stringify(accountBalance);
	localStorage.setItem('total', JSONReadyNums);

	JSONReadyNums = JSON.stringify(cashBalance);
	localStorage.setItem('cashTotal', JSONReadyNums);

	console.log(money);
	
	cashin.value = "";
}

function bankInsert () {
	bankTotal = JSON.parse(localStorage.getItem('bankTotal'));
	total = JSON.parse(localStorage.getItem('total'));

	money.unshift(bankIn.value);

	accountBalance = total + parseInt(bankIn.value);
	bankBalance = bankTotal + parseInt(bankIn.value);

	dateList.unshift(formatDate);

	JSONReadyDates = JSON.stringify(dateList);
	localStorage.setItem('dates', JSONReadyDates);

	JSONReadyMoney = JSON.stringify(money);
	localStorage.setItem('money', JSONReadyMoney);

	JSONReadyNums = JSON.stringify(accountBalance);
	localStorage.setItem('total', JSONReadyNums);

	JSONReadyNums = JSON.stringify(bankBalance);
	localStorage.setItem('bankTotal', JSONReadyNums);

	console.log(money);
	
	bankin.value = "";
}

function cashOutsert () {
	cashTotal = JSON.parse(localStorage.getItem('cashTotal'));
	total = JSON.parse(localStorage.getItem('total'));

	money.unshift("-" + cashOut.value);

	accountBalance = total - parseInt(cashOut.value);
	cashBalance = cashTotal - parseInt(cashOut.value);

	dateList.unshift(formatDate);

	JSONReadyDates = JSON.stringify(dateList);
	localStorage.setItem('dates', JSONReadyDates);

	JSONReadyMoney = JSON.stringify(money);
	localStorage.setItem('money', JSONReadyMoney);

	JSONReadyNums = JSON.stringify(accountBalance);
	localStorage.setItem('total', JSONReadyNums);

	JSONReadyNums = JSON.stringify(cashBalance);
	localStorage.setItem('cashTotal', JSONReadyNums);

	console.log(money);

	cashout.value = "";
}

function bankOutsert () {
	bankTotal = JSON.parse(localStorage.getItem('bankTotal'));
	total = JSON.parse(localStorage.getItem('total'));

	money.unshift("-" + bankOut.value);

	accountBalance = total - parseInt(bankOut.value);
	bankBalance = bankTotal - parseInt(bankOut.value);

	dateList.unshift(formatDate);

	JSONReadyDates = JSON.stringify(dateList);
	localStorage.setItem('dates', JSONReadyDates);

	JSONReadyMoney = JSON.stringify(money);
	localStorage.setItem('money', JSONReadyMoney);

	JSONReadyNums = JSON.stringify(accountBalance);
	localStorage.setItem('total', JSONReadyNums);

	JSONReadyNums = JSON.stringify(bankBalance);
	localStorage.setItem('bankTotal', JSONReadyNums);

	bankout.value = "";
}

function getInItems () {
	if (cashinItem.value.length === 0) {
		cashinItem.value = "";
	} else {
		items.unshift(cashinItem.value);
		cashinitem.value = "";
	}
	if (bankinItem.value.length === 0) {
		bankinItem.value = "";
	} else {
		items.unshift(bankinItem.value);
		bankinitem.value = "";
	}

	JSONReadyItems = JSON.stringify(items);
	localStorage.setItem('moneyItems', JSONReadyItems);

	console.log(items);
}

function getOutItems () {
	if (cashoutItem.value.length === 0) {
		cashoutItem.value = "";
	} else {
		items.unshift(cashoutItem.value);
		cashoutitem.value = "";
	}
	if (bankoutItem.value.length === 0) {
		bankoutItem.value = "";
	} else {
		items.unshift(bankoutItem.value);
		bankoutitem.value = "";
	}

	JSONReadyItems = JSON.stringify(items);
	localStorage.setItem('moneyItems', JSONReadyItems);

	console.log(items);
}

function displayCash () {
	total = JSON.parse(localStorage.getItem('total'));
	document.getElementById("accountTotal").innerHTML = total;

	cashTotal = JSON.parse(localStorage.getItem('cashTotal'));
	document.getElementById('cashTotal').innerHTML = cashTotal;

	bankTotal = JSON.parse(localStorage.getItem('bankTotal'));
	document.getElementById('bankTotal').innerHTML = bankTotal;
}

function displayEntry () {
	items = JSON.parse(localStorage.getItem('moneyItems'));
	money = JSON.parse(localStorage.getItem('money'));
	dateList = JSON.parse(localStorage.getItem('dates'));

	document.getElementById('one').innerHTML += dateList.join('<br>');
	document.getElementById('two').innerHTML += items.join('<br>');
	document.getElementById('three').innerHTML += money.join('<br>');
}

var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    n = weekday[d.getDay()];



function storeDay () {
	if (n == 'Monday') {
    	allWeek.push(total);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('monday', JSONReadyTotal);
	} else if (n == 'Tuesday') {
    	allWeek.push(total);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('tuesday', JSONReadyTotal);
	} else if (n == 'Wednesday') {
    	allWeek.push(total);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('wednesday', JSONReadyTotal);
	} else if (n == 'Thursday') {
    	allWeek.push(total);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('thursday', JSONReadyTotal);
	} else if (n == 'Friday') {
    	allWeek.push(total);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('friday', JSONReadyTotal);
	} else if (n == 'Saturday') {
    	allWeek.push(total);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('saturday', JSONReadyTotal);
	} else if (n == 'Sunday') {
    	allWeek.push(total);

    	JSONReadyTotal = JSON.stringify(allWeek);
		localStorage.setItem('sunday', JSONReadyTotal);
	}
}

// Creates graph
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Net Per Day',
            data: [monday, tuesday, wednesday, thursday, friday, saturday, sunday],
            backgroundColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)'
            ],
            borderColor: [
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 0, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
        	xAxes: [{
        		display: true,
        		gridlines: {
        		}
        	}],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

















































// var cashIn = document.getElementById('cashin');
// var cashOut = document.getElementById('cashout');
// var bankIn = document.getElementById('bankin');
// var bankOut = document.getElementById('bankout');
// var paper;
// var digital;
// var cashSum;
// var bankSum;
// var totalSum;
// var total;

// paper = JSON.parse(localStorage.getItem('paper'));
// digital = JSON.parse(localStorage.getItem('digital'));
// total = JSON.parse(localStorage.getItem('total'));

// function cashInsert () {
// 	cashIn = parseFloat(cashin.value);
// 	cash.push(parseFloat(cashIn));
// 	cashin.value = "";

// 	JSONReadyNums = JSON.stringify(cash);
// 	localStorage.setItem('paper', JSONReadyNums);

// 	paper = JSON.parse(localStorage.getItem('paper'));

// 	console.log(paper);
// }

// function bankInsert () {
// 	bankIn = parseFloat(bankin.value);
// 	bank.push(parseFloat(bankIn));
// 	bankin.value = "";

// 	JSONReadyNums = JSON.stringify(bank);
// 	localStorage.setItem('digital', JSONReadyNums);

// 	digital = JSON.parse(localStorage.getItem('digital'));

// 	console.log(digital);
// }

// function deleteCash() {
// 	alert(cashSum);
// 	cashOut.value = "";
// }

// function displayCash () {
// 	cashSum = paper.reduce(function (a,b) {
// 		return a + b;}, 0);
// 	document.getElementById("cashTotal").innerHTML = cashSum;

// 	bankSum = digital.reduce(function (a,b) {
// 		return a + b;}, 0);
// 	document.getElementById("bankTotal").innerHTML = bankSum;

// 	totalSum = cashSum + bankSum;
// 	document.getElementById("accountTotal").innerHTML = totalSum;

// 	JSONReadyNums = JSON.stringify(totalSum);
// 	localStorage.setItem('total', JSONReadyNums);
// }






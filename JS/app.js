'use strict'

var operationHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var locations = [];
var hourTotals = [];

var parent = document.getElementById('listsD');
var table1 = document.createElement('table');
parent.appendChild(table1);

function salesRenderHeads() {

    var row1 = document.createElement('tr')
    table1.appendChild(row1);
    var head1 = document.createElement('th');
    row1.appendChild(head1);
    head1.textContent = "Location";

    for (var i = 0; i < operationHours.length; i++) {
        var head2 = document.createElement('th');
        row1.appendChild(head2);
        head2.textContent = operationHours[i];
    }

    var head3 = document.createElement('th');
    row1.appendChild(head3);
    head3.textContent = "Daily Location Total";

}
salesRenderHeads();



function Location(locationsNames, minHourlyCustomers, maxHourlyCustomers, AvgCookiePerSale) {
    this.locationsNames = [locationsNames];
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.AvgCookiePerSale = AvgCookiePerSale;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    locations.push(this);
    // console.log(locations);

}

var seattle = new Location('Seattle', 23, 65, 6.3);
var tokyo = new Location('Tokyo', 3, 24, 1.2);
var dubai = new Location('Dubai', 11, 38, 3.7);
var paris = new Location('Paris', 20, 38, 2.3);
var lima = new Location('Lima', 2, 16, 6.3);

Location.prototype.customerNum = function (minHourlyCustomers, maxHourlyCustomers) {

    for (var i = 0; i < operationHours.length; i++) {

        this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
    }

}

Location.prototype.calcCookiesPurchasedPerHour = function () {


    for (var x = 0; x < operationHours.length; x++) {
        this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));
    }


}

Location.prototype.calcCookiesPerLocation = function () {

    this.totalCookies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
}

Location.prototype.salesRenderRows = function () {

    var row2 = document.createElement('tr');
    table1.appendChild(row2);
    var data1 = document.createElement('td');
    row2.appendChild(data1);
    data1.textContent = this.locationsNames;

    for (var r = 0; r < operationHours.length; r++) {
        var data1 = document.createElement('td');
        row2.appendChild(data1);
        data1.textContent = this.cookiesPerHour[r];
    }

    var data2 = document.createElement('td');
    row2.appendChild(data2);
    data2.textContent = this.totalCookies;
}

for (var z = 0; z < locations.length; z++) {
    locations[z].customerNum(this.minHourlyCustomers, this.maxHourlyCustomers);
    locations[z].calcCookiesPurchasedPerHour();
    locations[z].calcCookiesPerLocation();
    locations[z].salesRenderRows();

}

function totalRow() {

    var row7 = document.createElement('tr')
    table1.appendChild(row7);
    var data6 = document.createElement('td');
    row7.appendChild(data6);
    data6.textContent = "Totals";


    for (var i = 0; i < operationHours.length; i++) {
        var hourTotals = 0;
        for (var n = 0; n < locations.length; n++) {
            hourTotals += locations[n].cookiesPerHour[i];
        }
        // console.log(hourTotals);     

        var data1 = document.createElement('td');
        row7.appendChild(data1);
        data1.textContent = hourTotals;
    }

    var totalOfTotal = 0;
    for (i = 0; i < locations.length; i++) {
        totalOfTotal += locations[i].totalCookies;
    }
    var data3 = document.createElement('td');
    row7.appendChild(data3);
    data3.textContent = totalOfTotal;
    // console.log(totalOfTotal);


   
}


var cookieStandForm = document.getElementById('addingNewStoreform');

// totalRow();


cookieStandForm.addEventListener('submit', function () {

    event.preventDefault();
    var locationsNames = event.target.locationsNames.value;
    if (locationsNames == "") {
        alert("You must add a location name.");
        return false;
    }
    // console.log(locationsNames);
    var minHourlyCustomers = event.target.minHourlyCustomers.value;
    if (minHourlyCustomers == "") {
        alert("You must add a minimum value.");
        return false;
    } else {

        if (isNaN(minHourlyCustomers)) {
            alert("Please insert only numbers as the minimum value.")
            return false;
        }
    }
    // console.log(minHourlyCustomers);

    var maxHourlyCustomers = event.target.maxHourlyCustomers.value;
    if (maxHourlyCustomers == "") {
        alert("You must add a maximum value.");
        return false;
    } else {

        if (isNaN(maxHourlyCustomers)) {
            alert("Please insert only numbers as the maximum value.")
            return false;
        } else if (minHourlyCustomers > maxHourlyCustomers) {
            alert("The minimum number of customers should be less than the maximum.")
            return false;
        }
    }

    // console.log(maxHourlyCustomers);


    var AvgCookiePerSale = event.target.AvgCookiePerSale.value;
    AvgCookiePerSale = parseFloat(AvgCookiePerSale);
    // console.log(AvgCookiePerSale);
    if (AvgCookiePerSale == "") {
        alert("You must add a minimum value.");
        return false;

    } else {

        if (isNaN(AvgCookiePerSale)) {
            alert("Please insert only numbers as the the average.")
            return false;
        } else if (Number.isInteger(AvgCookiePerSale)) {
            alert("Please don't enter integers.");
        }
    }

    var locations = new Location(locationsNames, minHourlyCustomers, maxHourlyCustomers, AvgCookiePerSale);

    locations.customerNum();
    locations.calcCookiesPurchasedPerHour();
    locations.calcCookiesPerLocation();
    locations.salesRenderRows();


    totalRow();


    cookieStandForm.reset();

})

// console.log(locations);
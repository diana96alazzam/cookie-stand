'use strict'

var operationHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
var locations = [];

function Location(locationsNames, minHourlyCustomers, maxHourlyCustomers, AvgCookiePerSale) {
    this.locationsNames = locationsNames;
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
    // console.log(this.customerPerHour);

    return [this.customerPerHour[i]];

}



Location.prototype.calcCookiesPurchasedPerHour = function () {


    for (var x = 0; x < operationHours.length; x++) {
        var cookiesPerHour = 1;
        this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));
    }
    // console.log(this.cookiesPerHour);
    return this.cookiesPerHour;


}

// console.log(seattle.calcCookiesPurchasedPerHour());


Location.prototype.salesRenderResult = function () {

    var parent = document.getElementById('listsD');
    var table1 = document.createElement('table');
    parent.appendChild(table1);

    var row1 = document.createElement('tr')
    table1.appendChild(row1);
    var head1 = document.createElement('th');
    row1.appendChild(head1);
    head1.textContent = "Empty";
    for (var i = 0; i < operationHours.length; i++) {
        var head2 = document.createElement('th');
        row1.appendChild(head2);
        head2.textContent = operationHours[i];
    }
    var head3 = document.createElement('th');
    row1.appendChild(head3);
    head3.textContent = "Daily Location Total";

    var row2 = document.createElement('tr')
    table1.appendChild(row2);
    var data1 = document.createElement('td');
    row2.appendChild(data1);
    data1.textContent = "Seattle";


    for (var i = 0; i < operationHours.length; i++) {
        var seattleData = document.createElement('td');
        row2.appendChild(seattleData);
        seattleData.textContent = '1';
        // console.log(this.cookiesPerHour);
    }

    var row3 = document.createElement('tr')
    table1.appendChild(row3);
    var data2 = document.createElement('td');
    row3.appendChild(data2);
    data2.textContent = "Tokyo";

    for (var i = 0; i < operationHours.length; i++) {
        var tokyoData = document.createElement('td');
        row3.appendChild(tokyoData);
        tokyoData.textContent = '2';
    }

    var row4 = document.createElement('tr')
    table1.appendChild(row4);
    var data3 = document.createElement('td');
    row4.appendChild(data3);
    data3.textContent = "Dubai";

    for (var i = 0; i < operationHours.length; i++) {
        var dubaiData = document.createElement('td');
        row4.appendChild(dubaiData);
        dubaiData.textContent = '3';
    }

    var row5 = document.createElement('tr')
    table1.appendChild(row5);
    var data4 = document.createElement('td');
    row5.appendChild(data4);
    data4.textContent = "Paris";

    for (var i = 0; i < operationHours.length; i++) {
        var parisData = document.createElement('td');
        row5.appendChild(parisData);
        parisData.textContent = '4';
    }


    var row6 = document.createElement('tr')
    table1.appendChild(row6);
    var data5 = document.createElement('td');
    row6.appendChild(data5);
    data5.textContent = "Lima";

    for (var i = 0; i < operationHours.length; i++) {
        var limaData = document.createElement('td');
        row6.appendChild(limaData);
        limaData.textContent = '5';
    }

    var row7 = document.createElement('tr')
    table1.appendChild(row7);
    var data6 = document.createElement('td');
    row7.appendChild(data6);
    data6.textContent = "Totals";
    
    for (var d = 0; d < operationHours.length; d++) {
        var hoursTotalData = document.createElement('td');
        row7.appendChild(hoursTotalData);
        hoursTotalData.textContent = 'hours total';
    }

    var seattleDataTotal = document.createElement('td');
    row2.appendChild(seattleDataTotal);
    seattleDataTotal.textContent = 'seattleDataTotal';

    var tokyoDataTotal = document.createElement('td');
    row3.appendChild(tokyoDataTotal);
    tokyoDataTotal.textContent = 'tokyoDataTotal';

    var dubaiDataTotal = document.createElement('td');
    row4.appendChild(dubaiDataTotal);
    dubaiDataTotal.textContent = 'dubaiDataTotal';

    var parisDataTotal = document.createElement('td');
    row5.appendChild(parisDataTotal);
    parisDataTotal.textContent = 'parisDataTotal';

    var limaDataTotal = document.createElement('td');
    row6.appendChild(limaDataTotal);
    limaDataTotal.textContent = 'limaDataTotal';

    var totalDataTotal = document.createElement('td');
    row7.appendChild(totalDataTotal);
    totalDataTotal.textContent = 'totalDataTotal';





    // var parentD1 = document.getElementById("listsD");
    // var tableD1 = document.createElement('table');
    // parentD1.appendChild(tableD1);



    // for (var i = 0; i < operationHours.length; i++) {

    //     var headD1 = document.createElement('th');
    //     tableD1.appendChild(headD1);
    //     headD1.textContent = operationHours[i];
    //     // console.log(headD1);

    // }

    // var rowD1 = document.createElement('tr');
    // headD1.appendChild(rowD1);
    // rowD1.textContent = '11111111';
    // var rowD2 = document.createElement('tr');
    // rowD1.appendChild(rowD2);
    // rowD2.textContent = '22222222'

    // var parentD1 = document.getElementById('listsD');
    // var liD1 = document.createElement('li');
    // parentD1.appendChild(liD1);
    // liD1.textContent = `Total:  ${this.totalCookies}`;


}
Location.prototype.salesRenderResult();










for (var d = 0; d < locations.length; d++) {
    locations[d].customerNum(this.minHourlyCustomers, this.maxHourlyCustomers);
    locations[d].calcCookiesPurchasedPerHour();
    // locations[d].sumlD1();

}















// ---------------------------------------------------------------------------------------------------------------------------------
// var seattle = {
//     operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     minHourlyCustomers: 23,
//     maxHourlyCustomers: 65,
//     AvgCookiePerSale: 6.3,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     customerNum: function () {

//         for (var i = 0; i < this.operationHours.length; i++) {

//             this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//         }
//         // console.log(this.customerPerHour);

//         return [this.customerPerHour[i]];

//     },


//     avgCookiesPurchasedPerHour: function () {


//         for (var x = 0; x < this.operationHours.length; x++) {
//             var cookiesPerHour = 1;
//             this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));
//             // console.log(this.cookiesPerHour);

//         }
//     },

//     salesResult: function () {
//         var parentD2 = document.getElementById('ul1');
//         var h1D1 = document.createElement('h1');
//         parentD2.appendChild(h1D1);
//         h1D1.textContent = `Seattle`;

//         for (var d = 0; d < this.operationHours.length; d++) {
//             var parentD1 = document.getElementById('ul1');
//             var ulD1 = document.createElement('li');
//             parentD1.appendChild(ulD1);
//             ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

//         }

//     },
//     sumlD1: function () {

//         this.totalCookies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
//         var parentD1 = document.getElementById('ul1');
//         var ulD1 = document.createElement('li');
//         parentD1.appendChild(ulD1);
//         ulD1.textContent = `Total:  ${this.totalCookies}`;

//     }
// }



// seattle.customerNum(23, 65);
// seattle.avgCookiesPurchasedPerHour();
// seattle.salesResult();
// seattle.sumlD1();



// var tokyo = {
//     operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     minHourlyCustomers: 3,
//     maxHourlyCustomers: 24,
//     AvgCookiePerSale: 1.2,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     customerNum: function () {

//         for (var i = 0; i < this.operationHours.length; i++) {

//             this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//         }
//         // console.log(this.customerPerHour);

//         return [this.customerPerHour[i]];

//     },


//     avgCookiesPurchasedPerHour: function () {


//         for (var x = 0; x < this.operationHours.length; x++) {
//             var cookiesPerHour = 1;
//             this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

//         }
//     },

//     salesResult: function () {
//         var parentD2 = document.getElementById('ul2');
//         var h1D1 = document.createElement('h1');
//         parentD2.appendChild(h1D1);
//         h1D1.textContent = `Tokyo`;

//         for (var d = 0; d < this.operationHours.length; d++) {
//             var parentD1 = document.getElementById('ul2');
//             var ulD1 = document.createElement('li');
//             parentD1.appendChild(ulD1);
//             ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

//         }

//     },
//     sumlD1: function () {

//         this.totalCookies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
//         var parentD1 = document.getElementById('ul2');
//         var ulD1 = document.createElement('li');
//         parentD1.appendChild(ulD1);
//         ulD1.textContent = `Total:  ${this.totalCookies}`;

//     }
// }



// tokyo.customerNum(3, 24);
// tokyo.avgCookiesPurchasedPerHour();
// tokyo.salesResult();
// tokyo.sumlD1();


// var dubai = {
//     operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     minHourlyCustomers: 11,
//     maxHourlyCustomers: 38,
//     AvgCookiePerSale: 3.7,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     customerNum: function () {

//         for (var i = 0; i < this.operationHours.length; i++) {

//             this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//         }
//         // console.log(this.customerPerHour);

//         return [this.customerPerHour[i]];

//     },


//     avgCookiesPurchasedPerHour: function () {


//         for (var x = 0; x < this.operationHours.length; x++) {
//             var cookiesPerHour = 1;
//             this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

//         }
//     },

//     salesResult: function () {
//         var parentD2 = document.getElementById('ul3');
//         var h1D1 = document.createElement('h1');
//         parentD2.appendChild(h1D1);
//         h1D1.textContent = `Dubai`;

//         for (var d = 0; d < this.operationHours.length; d++) {
//             var parentD1 = document.getElementById('ul3');
//             var ulD1 = document.createElement('li');
//             parentD1.appendChild(ulD1);
//             ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

//         }

//     },
//     sumlD1: function () {

//         this.totalCookies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
//         var parentD1 = document.getElementById('ul3');
//         var ulD1 = document.createElement('li');
//         parentD1.appendChild(ulD1);
//         ulD1.textContent = `Total:  ${this.totalCookies}`;

//     }

// }



// dubai.customerNum(11, 38);
// dubai.avgCookiesPurchasedPerHour();
// dubai.salesResult();
// dubai.sumlD1();

// var paris = {
//     operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     minHourlyCustomers: 20,
//     maxHourlyCustomers: 38,
//     AvgCookiePerSale: 2.3,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     customerNum: function () {

//         for (var i = 0; i < this.operationHours.length; i++) {

//             this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//         }

//         return [this.customerPerHour[i]];

//     },


//     avgCookiesPurchasedPerHour: function () {


//         for (var x = 0; x < this.operationHours.length; x++) {
//             var cookiesPerHour = 1;
//             this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

//         }
//     },

//     salesResult: function () {
//         var parentD2 = document.getElementById('ul4');
//         var h1D1 = document.createElement('h1');
//         parentD2.appendChild(h1D1);
//         h1D1.textContent = `Paris`;

//         for (var d = 0; d < this.operationHours.length; d++) {
//             var parentD1 = document.getElementById('ul4');
//             var ulD1 = document.createElement('li');
//             parentD1.appendChild(ulD1);
//             ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

//         }

//     },
//     sumlD1: function () {

//         this.totalCookies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
//         var parentD1 = document.getElementById('ul4');
//         var ulD1 = document.createElement('li');
//         parentD1.appendChild(ulD1);
//         ulD1.textContent = `Total:  ${this.totalCookies}`;

//     }
// }



// paris.customerNum(20, 38);
// paris.avgCookiesPurchasedPerHour();
// paris.salesResult();
// paris.sumlD1();



// var lima = {
//     operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//     minHourlyCustomers: 2,
//     maxHourlyCustomers: 16,
//     AvgCookiePerSale: 4.6,
//     customerPerHour: [],
//     cookiesPerHour: [],


//     customerNum: function () {

//         for (var i = 0; i < this.operationHours.length; i++) {

//             this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
//         }

//         return [this.customerPerHour[i]];

//     },


//     avgCookiesPurchasedPerHour: function () {


//         for (var x = 0; x < this.operationHours.length; x++) {
//             var cookiesPerHour = 1;
//             this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

//         }
//     },

//     salesResult: function () {
//         var parentD2 = document.getElementById('ul5');
//         var h1D1 = document.createElement('h1');
//         parentD2.appendChild(h1D1);
//         h1D1.textContent = `Lima`;

//         for (var d = 0; d < this.operationHours.length; d++) {
//             var parentD1 = document.getElementById('ul5');
//             var ulD1 = document.createElement('li');
//             parentD1.appendChild(ulD1);
//             ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

//         }

//     },

//     sumlD1: function () {

//         this.totalCookies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
//         var parentD1 = document.getElementById('ul5');
//         var ulD1 = document.createElement('li');
//         parentD1.appendChild(ulD1);
//         ulD1.textContent = `Total:  ${this.totalCookies}`;

//     }
// }



// lima.customerNum(2, 16);
// lima.avgCookiesPurchasedPerHour();
// lima.salesResult();
// lima.sumlD1();
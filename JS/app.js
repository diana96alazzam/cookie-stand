'use strict'

var seattle = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    AvgCookiePerSale: 6.3,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }
        // console.log(this.customerPerHour);

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));
            // console.log(this.cookiesPerHour);

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('ul1');
        var h1D1 = document.createElement('h1');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Seattle`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('ul1');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('ul1');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



seattle.customerNum(23, 65);
seattle.avgCookiesPurchasedPerHour();
seattle.salesResult();
seattle.sumlD1();



var tokyo = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    AvgCookiePerSale: 1.2,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }
        // console.log(this.customerPerHour);

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('ul2');
        var h1D1 = document.createElement('h1');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Tokyo`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('ul2');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('ul2');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



tokyo.customerNum(3, 24);
tokyo.avgCookiesPurchasedPerHour();
tokyo.salesResult();
tokyo.sumlD1();


var dubai = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    AvgCookiePerSale: 3.7,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }
        // console.log(this.customerPerHour);

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('ul3');
        var h1D1 = document.createElement('h1');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Dubai`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('ul3');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('ul3');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
    
}



dubai.customerNum(11, 38);
dubai.avgCookiesPurchasedPerHour();
dubai.salesResult();
dubai.sumlD1();

var paris = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    AvgCookiePerSale: 2.3,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('ul4');
        var h1D1 = document.createElement('h1');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Paris`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('ul4');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },
    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('ul4');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



paris.customerNum(20, 38);
paris.avgCookiesPurchasedPerHour();
paris.salesResult();
paris.sumlD1();



var lima = {
    operationHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    AvgCookiePerSale: 4.6,
    customerPerHour: [],
    cookiesPerHour: [],


    customerNum: function () {

        for (var i = 0; i < this.operationHours.length; i++) {

            this.customerPerHour[i] = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
        }

        return [this.customerPerHour[i]];

    },


    avgCookiesPurchasedPerHour: function () {


        for (var x = 0; x < this.operationHours.length; x++) {
            var cookiesPerHour = 1;
            this.cookiesPerHour[x] = Math.floor(this.customerPerHour[x] * Math.floor(this.AvgCookiePerSale));

        }
    },

    salesResult: function () {
        var parentD2 = document.getElementById('ul5');
        var h1D1 = document.createElement('h1');
        parentD2.appendChild(h1D1);
        h1D1.textContent = `Lima`;

        for (var d = 0; d < this.operationHours.length; d++) {
            var parentD1 = document.getElementById('ul5');
            var ulD1 = document.createElement('li');
            parentD1.appendChild(ulD1);
            ulD1.textContent = `${this.operationHours[d]}:  ${this.cookiesPerHour[d]} cookies`;

        }

    },

    sumlD1: function () {

        this.totalCoockies = this.cookiesPerHour.reduce(function (a, b) { return a + b; }, 0);
        var parentD1 = document.getElementById('ul5');
        var ulD1 = document.createElement('li');
        parentD1.appendChild(ulD1);
        ulD1.textContent = `Total:  ${this.totalCoockies}`;

    }
}



lima.customerNum(2, 16);
lima.avgCookiesPurchasedPerHour();
lima.salesResult();
lima.sumlD1();
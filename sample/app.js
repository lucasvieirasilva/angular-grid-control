var app = angular.module('app', [
    'ngAnimate',
    'ui.bootstrap',
    'pascalprecht.translate',
    'angular-grid-control',
    'vs-repeat'
]);

app.config(["$translateProvider", function ($translateProvider) {
    $translateProvider.translations('pt-BR', {
        NameLabel: "Nome",
        DateTimeLabel: "Data de atualização",
        ItensPerPageLabel: "Items por pagina",
        FirstLabel: "Primeira",
        LastLabel: "Ultima",
        PreviousLabel: "Anterior",
        NextLabel: "Proxima"
    });

    $translateProvider.preferredLanguage('pt-BR');
}]);

app.controller('sampleSimpleGridCtrl', ["$scope", function ($scope) {
    var main = this;

    var data = [{
        "name": "Joe",
        "updateDate": new Date()
    }, {
        "name": "Marry",
        "Associated": true,
        "updateDate": new Date()
    }, {
        "name": "Doe",
        "updateDate": new Date()
    }];

    main.gridParams = {
        data: data,
        selection: true,
        selectedItem: data[2],
        options: {
            type: "simple", // OR UNDEFINED
            checkbox: true,
            checkboxField: 'Associated',
            async: false
        },
        columns: [{
            field: "name",
            displayName: "NameLabel"
        }, {
            field: "updateDate",
            displayName: "DateTimeLabel",
            cellTemplate: "<span>{{ row[col.field] | date: 'dd/MM/yyyy HH:mm:ss' }}</span>"
        }],
    };
}]);

app.controller('samplePaginationGridCtrl', ["$scope", "$q", "$timeout", "$filter", function ($scope, $q, $timeout, $filter) {
    var main = this;

    this.doUpdate = function () {
        this.gridParams.update();
    }

    var dataRequest = function (request) {
        var defer = $q.defer();

        var data = {
            items: [],
            pagingInfo: {
                pageSize: request.pagingInfo.pageSize,
                pageIndex: request.pagingInfo.pageIndex,
                totalCount: 1000,
                hasNextPage: true,
                hasPreviousPage: false
            },
        };

        for (var i = 0; i < request.pagingInfo.pageSize; i++) {
            var item = {};

            item.name = "Joe " + request.pagingInfo.pageIndex + "." + i;
            item.updateDate = new Date();

            data.items.push(item);
        }

        $timeout(function () {
            defer.resolve(data);
        }, 500);

        return defer.promise;
    };

    main.gridParams = {
        data: dataRequest,
        selection: true,
        options: {
            type: "pagination",
            tableClass: "table-striped",
            pagination: {
                itemsPerPageText: $filter("translate")("ItensPerPageLabel"),
                firstText: $filter("translate")("FirstLabel"),
                lastText: $filter("translate")("LastLabel"),
                previousText: $filter("translate")("PreviousLabel"),
                nextText: $filter("translate")("NextLabel"),
                pagingInfoProperty: "pagingInfo",
                pageSizeProperty: "pageSize",
                pageIndexProperty: "pageIndex",
                totalCountProperty: "totalCount",
                hasNextPageProperty: "hasNextPage",
                hasPreviousPageProperty: "hasPreviousPage",
                itemsProperty: "items",
                useItemsPerPage: false
            },
            checkbox: true,
            async: true,
        },
        columns: [{
            field: "name",
            displayName: "NameLabel"
        }, {
            field: "updateDate",
            displayName: "DateTimeLabel",
            cellTemplate: "<span>{{ row[col.field] | date: 'dd/MM/yyyy HH:mm:ss' }}</span>"
        }],
    };
}]);

app.controller('sampleScrollGridCtrl', ["$scope", "$q", "$timeout", function ($scope, $q, $timeout) {
    var main = this;

    var data = [];

    var getData = function () {
        var defer = $q.defer();

        var newData = [];

        for (var i = 0; i < 30; i++) {
            var item = {};

            item.name = "Joe " + data.length + 1;
            item.updateDate = new Date();

            newData.push(item);
        }

        $timeout(function () {
            defer.resolve(newData);
        }, 500);

        return defer.promise;
    };

    main.gridParams = {
        data: getData,
        options: {
            type: "scroll",
            height: "350px",
            checkbox: true,
            async: true,
        },
        columns: [{
            field: "name",
            displayName: "NameLabel",
            filter: true,
            filterType: "text",
        }, {
            field: "updateDate",
            displayName: "DateTimeLabel",
            filter: true,
            cellTemplate: "<span>{{ row[col.field] | date: 'dd/MM/yyyy HH:mm:ss' }}</span>",
            filterType: "date",
        }],
    };
}]);

app.controller('sampleVsSimpleGridCtrl', ["$scope", function ($scope) {
    var main = this;

    var data = [];

    for(var i = 0; i < 1000; i++) {
        data.push({
            name: "Test " + i,
            "updateDate": new Date()
        })
    }

    main.gridParams = {
        data: data,
        selection: true,
        selectedItem: data[2],
        options: {
            type: "simple",
            checkbox: true,
            checkboxField: 'Associated',
            async: false
        },
        columns: [{
            field: "name",
            displayName: "NameLabel"
        }, {
            field: "updateDate",
            displayName: "DateTimeLabel",
            cellTemplate: "<span>{{ row[col.field] | date: 'dd/MM/yyyy HH:mm:ss' }}</span>"
        }],
    };
}]);
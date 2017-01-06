'use strict';
angular.module('template/grid', []).run(["$templateCache", function ($templateCache) {

    $templateCache.put("template/grid/pagination-grid.html", "<div>\n" +
        "\r <div>\n" +
        "\r   <table class=\"table table-striped table-bordered table-hover\">\n" +
        "\r       <thead class=\"grid-control-bg-table\">\n" +
        "\r           <tr>\n" +
        "\r                <th ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box \">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" ng-model=\"ctrl.checkBoxAllModel\" ng-change=\"ctrl.checkBoxSelectAll()\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r                </th>\n" +
        "\r                <th ng-style=\"{'width' : col.width ? col.width : 'auto'}\" class=\"col-lg-5 vertical-align-top\" ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span class=\"margin-bottom-10 col-xs-12 no-padding \"><i ng-if=\"col.icon\" ng-class=\"col.icon\"></i> {{ col.displayName | translate }}</span> \n" +
        "\r                   <div class=\"input-group\" ng-if=\"col.filter && (col.filterType && col.filterType != 'date')\">\n" +
        "\r                         <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></span>\n" +
        "\r                         <input class=\"form-control input-sm\" type=\"search\" ng-change=\"ctrl.searchData(col.filterValue)\"  ng-model=\"col.filterValue\" />\n" +
        "\r                   </div>\n" +
        "\r                   <div ng-if=\"col.filter && (col.filterType && col.filterType == 'date')\" class=\"input-group\" ng-controller=\"gridControlDatePickerCtrl\"><input type=\"text\" class=\"form-control\" show-button-bar=\"false\" ng-change=\"ctrl.searchData(col.filterValue)\" uib-datepicker-popup=\"{{format}}\" ng-model=\"$parent.col.filterValue\" is-open=\"opened\" datepicker-options=\"Options\" close-text=\"Close\" />\n" +
        "\r                      <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\">\n" +
        "\r                          <i class=\"glyphicon glyphicon-calendar\"></i></button></span></div>\n" +
        "\r                </th>\n" +
        "\r           </tr>\n" +
        "\r       </thead>\n" +
        "\r       <tbody>\n" +
        "\r           <tr ng-repeat=\"row in ctrl.data\" ng-class=\"ctrl.rowCssClass(row)\">\n" +
        "\r                <td ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top  grid-control-column-check-box\">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" ng-model=\"row.selected\" ng-change=\"ctrl.checkBoxSelection(row)\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r                </td>\n" +
        "\r               <td ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span ng-if=\"col.cellTemplate\" gc-compile=\"col.cellTemplate\" cell-template-scope=\"col.cellTemplateScope\"></span>\n" +
        "\r                   <span ng-if=\"!col.cellTemplate\">{{row[col.field]}}</span>\n" +
        "\r               </td>\n" +
        "\r           </tr>\n" +
        "\r       </tbody>\n" +
        "\r   </table>\n" +
        "\r   </div>\n" +
        "\r   <div ng-show=\"ctrl.showPagination\" class=\"text-align-center margin-top-20 pagination-greed\" >\n" +
        "\r         <div class=\"floatLeft number-pagination\">\n" +
        "\r             <span>{{ 'ItensPerPageLabel' | translate }}: </span>\n" +
        "\r             <select name=\"pageSize\" id=\"pageSize\" ng-options=\"option as option for option in ctrl.pageSizes\" ng-model=\"ctrl.pagingInfo.pageSize\"></select>\n" +
        "\r         </div>\n" +
        "\r         <uib-pagination ng-model=\"ctrl.pagingInfo.pageIndex\" total-items=\"ctrl.pagingInfo.totalCount\" items-per-page=\"ctrl.pagingInfo.pageSize\" max-size=\"5\" boundary-links=\"true\" previous-text=\"{{ 'PreviousLabel' | translate }}\" next-text=\"{{ 'NextLabel' | translate }}\" first-text=\"{{ 'FirstLabel' | translate }}\" last-text=\"{{ 'LastLabel' | translate }}\">\n" +
        "\r         </uib-pagination>\n" +
        "\r   </div>\n" +
        "</div>");

    $templateCache.put("template/grid/simple-grid.html", "<div>\n" +
        "\r <div>\n" +
        "\r   <table class=\"table table-striped table-bordered table-hover\">\n" +
        "\r       <thead class=\"grid-control-bg-table\">\n" +
        "\r           <tr>\n" +
        "\r                <th ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box \">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" ng-model=\"ctrl.checkBoxAllModel\" ng-change=\"ctrl.checkBoxSelectAll()\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r                </th>\n" +
        "\r                <th ng-style=\"{'width' : col.width ? col.width : 'auto'}\" class=\"col-lg-5 vertical-align-top\" ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span><i ng-if=\"col.icon\" ng-class=\"col.icon\"></i> {{ col.displayName | translate }}</span>\n" +
        "\r                </th>\n" +
        "\r           </tr>\n" +
        "\r       </thead>\n" +
        "\r       <tbody>\n" +
        "\r           <tr ng-repeat=\"row in ctrl.data\" ng-click=\"ctrl.select(row)\" ng-class=\"ctrl.rowCssClass(row)\">\n" +
        "\r                <td ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top  grid-control-column-check-box\">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" ng-model=\"row.selected\" ng-change=\"ctrl.checkBoxSelection(row)\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r                </td>\n" +
        "\r               <td ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span ng-if=\"col.cellTemplate\" gc-compile=\"col.cellTemplate\" cell-template-scope=\"col.cellTemplateScope\"></span>\n" +
        "\r                   <span ng-if=\"!col.cellTemplate\">{{row[col.field]}}</span>\n" +
        "\r               </td>\n" +
        "\r           </tr>\n" +
        "\r       </tbody>\n" +
        "\r   </table>\n" +
        "\r   </div>\n" +
        "</div>");

    $templateCache.put("template/grid/scroll-grid.html", "<div class=\"table-scrollable\" ng-style=\"{ height: ctrl.height ? ctrl.height : 'auto' }\">\n" +
        "\r <div>\n" +
        "\r   <table class=\"table table-striped table-bordered table-hover\">\n" +
        "\r       <thead class=\"grid-control-bg-table\">\n" +
        "\r           <tr>\n" +
        "\r                <th ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box \">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>                           \n" +
        "\r						        <input type=\"checkbox\" ng-model=\"ctrl.checkBoxAllModel\" ng-change=\"ctrl.checkBoxSelectAll()\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r                </th>\n" +
        "\r                <th ng-style=\"{'width' : col.width ? col.width : 'auto'}\" class=\"col-lg-5 vertical-align-top\" ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span class=\"margin-bottom-10 col-xs-12 no-padding \"><i ng-if=\"col.icon\" ng-class=\"col.icon\"></i> {{ col.displayName | translate }}</span> \n" +
        "\r                </th>\n" +
        "\r           </tr>\n" +
        "\r       </thead>\n" +
        "\r       <tbody>\n" +
        "\r           <tr ng-repeat=\"row in ctrl.data\" ng-click=\"ctrl.select(row)\" ng-class=\"ctrl.rowCssClass(row)\">\n" +
        "\r                <td ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top  grid-control-column-check-box\">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">              \n" +
        "\r						    <label>                           \n" +
        "\r						        <input type=\"checkbox\" ng-model=\"row.selected\" ng-change=\"ctrl.checkBoxSelection(row)\">     \n" +
        "\r						        <span class=\"text\"></span>  \n" +
        "\r						    </label>                          \n" +
        "\r						</div>                                \n" +
        "\r                </td>\n" +
        "\r               <td ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span ng-if=\"col.cellTemplate\" gc-compile=\"col.cellTemplate\" cell-template-scope=\"col.cellTemplateScope\"></span>\n" +
        "\r                   <span ng-if=\"!col.cellTemplate\">{{row[col.field]}}</span>\n" +
        "\r               </td>\n" +
        "\r           </tr>\n" +
        "\r       </tbody>\n" +
        "\r   </table>\n" +
        "\r   </div>\n" +
        "</div>");
}]);

angular.module('angular-grid-control', ['template/grid'])
    .directive('gcCompile', [
        '$compile',
        function ($compile) {
            return {
                restrict: 'EA',
                link: function (scope, element, attrs) {
                    scope.cellTemplateScope = scope.$eval(attrs.cellTemplateScope);

                    scope.$watch(attrs.gcCompile, function (new_val) {
                        var link = $compile(new_val);
                        var new_elem = link(scope);
                        element.append(new_elem);
                    });
                }
            };
        }
    ])
    .directive('gcSimple', function () {
        return {
            restrict: 'E',
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || "template/grid/simple-grid.html"
            },
            scope: {
                params: '=',
                selectedItem: '='
            },
            controller: 'gridControlController',
            controllerAs: 'ctrl',
            link: function (scope, el, attr) {}
        };
    })
    .directive('gcPagination', ["$q", function ($q) {
        return {
            restrict: 'E',
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || "template/grid/pagination-grid.html"
            },
            scope: {
                params: '=',
                selectedItem: '='
            },
            controller: 'gridControlController',
            controllerAs: 'ctrl',
            link: function (scope, el, attr) {}
        };
    }])
    .directive('gcScroll', ["$q", function ($q) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || "template/grid/scroll-grid.html"
            },
            scope: {
                params: '=',
                selectedItem: '='
            },
            controller: 'gridControlController',
            controllerAs: 'ctrl',
            link: function (scope, el, attr) {
                var raw = el[0];

                el.bind('scroll', function (e) {
                    if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight && !scope.ctrl.gettingMore) {
                        scope.ctrl.getMore();
                    }
                });
            }
        };
    }])
    .controller('gridControlController', ["$scope", "$q", "$element", function ($scope, $q, $element) {

        var ctrl = this;

        ctrl.data = [];
        ctrl.height = null;

        if ($scope.params.data) {
            ctrl.data = $scope.params.data;
        }

        if ($scope.params.options && $scope.params.options.height) {
            ctrl.height = $scope.params.options && $scope.params.options.height;
        }

        ctrl.columns = $scope.params.columns;

        var isSearching = false;

        ctrl.select = function (row) {
            if ($scope.params.selection) {

                ctrl.rowSelected = row;
                $scope.$emit('gridControl:selectItem', row);
            }
        };

        ctrl.error = function (row) {
            if ($scope.params.callbacks && $scope.params.callbacks.error) {
                return $scope.params.callbacks.error(row);
            }

            return false;
        };


        ctrl.warning = function (row) {
            if ($scope.params.callbacks && $scope.params.callbacks.warning) {
                return $scope.params.callbacks.warning(row);
            }

            return false;
        };

        ctrl.searchData = function (value) {
            isSearching = true;

            ctrl.buildData().then(function (data) {
                isSearching = false;
            }).catch(function (error) {
                isSearching = false;
            });
        }

        ctrl.selectedItemHandler = function (item) {
            ctrl.selectedItem = item;
        };

        ctrl.rowCssClass = function (row) {
            return {
                'danger': ctrl.error(row),
                'warning': ctrl.warning(row),
                'cursor-pointer': $scope.params.selection,
                'grid-control-item-selected': ctrl.isSelected(row)
            };
        };

        ctrl.isSelected = function (row) {
            return ctrl.rowSelected == row || (ctrl.checkbox && row.selected);
        };

        $scope.params.update = function () {
            ctrl.buildData();
        };

        ctrl.buildData = function () {
            var defer = $q.defer();

            ctrl.getData = $scope.params.data;

            var async = $scope.params.options && $scope.params.options.async;

            if (async) {
                ctrl.getData().then(function (response) {
                    ctrl.data = response;
                    defer.resolve(response);
                }).catch(function (error) {
                    defer.reject(error);
                });
            } else {
                ctrl.data = ctrl.getData();
                defer.resolve(ctrl.data);
            }

            return defer.promise;
        }

        if ($scope.params.options && $scope.params.options.type == "pagination") {

            ctrl.showPagination = true;

            ctrl.getData = $scope.params.data;

            ctrl.pageSizes = [5, 10, 15, 20, 25, 30];

            ctrl.pagingInfo = {
                pageSize: ctrl.pageSizes[0],
                pageIndex: 1
            };

            $scope.$watch('ctrl.pagingInfo.pageIndex + ctrl.pagingInfo.pageSize', function () {
                if (!isSearching) {
                    $scope.$emit('gridControl:beforePageChanged');

                    ctrl.buildData().then(function () {
                        $scope.$emit('gridControl:afterPageChanged');
                    });

                    ctrl.checkBoxAllModel = false;
                }
            });

            var buildPaginationData = function (response) {
                ctrl.data = response.items;
                ctrl.pagingInfo = response.pagingInfo;

                ctrl.showPagination = ctrl.pagingInfo.hasNextPage || ctrl.pagingInfo.hasPreviousPage;
            }

            ctrl.buildData = function () {
                var defer = $q.defer();

                var request = {
                    pagingInfo: ctrl.pagingInfo
                };

                ctrl.columns.forEach(function (col) {
                    if (col.filter) {
                        request[col.field] = col.filterValue;
                    }
                });

                var async = $scope.params.options && $scope.params.options.async;

                if (async) {
                    ctrl.getData(request).then(function (response) {
                        buildPaginationData(response);

                        defer.resolve(response);
                    }).catch(function (error) {
                        defer.reject(error);
                    });
                } else {
                    var response = ctrl.getData(request);

                    buildPaginationData(response);

                    defer.resolve(response);
                }

                return defer.promise;
            };
        } else if ($scope.params.options && $scope.params.options.type == "scroll") {
            if (!ctrl.height) {
                ctrl.height = "300px";
            }

            ctrl.getMore = function () {
                ctrl.gettingMore = true;

                ctrl.buildData().finally(function () {
                    ctrl.gettingMore = false;
                });
            };

            var buildScrollableData = function (response) {
                if (!Array.isArray(ctrl.data)) {
                    ctrl.data = [];
                }

                ctrl.data = ctrl.data.concat(response);
            }

            ctrl.buildData = function () {
                var defer = $q.defer();

                ctrl.getData = $scope.params.data;

                var async = $scope.params.options && $scope.params.options.async;

                if (async) {
                    ctrl.getData().then(function (response) {
                        buildScrollableData(response);

                        defer.resolve(ctrl.data);
                    }).catch(function (error) {
                        defer.reject(error);
                    });
                } else {
                    var response = ctrl.getData();
                    buildScrollableData(response);

                    defer.resolve(ctrl.data);
                }

                return defer.promise;
            }

            ctrl.buildData();
        } else {
            $scope.$watch('params.data', function (value) {
                if (value) {
                    ctrl.data = value;
                }
            });
        }

        if ($scope.params.options && $scope.params.options.checkbox) {
            ctrl.checkbox = $scope.params.options.checkbox;

            ctrl.checkBoxSelection = function (item) {
                var value = ctrl.checkBoxAllModel;

                if (value && !item.selected) {
                    ctrl.checkBoxAllModel = item.selected;
                } else if (!value) {
                    if (ctrl.data) {
                        var allSelected = true;

                        ctrl.data.forEach(function (item) {
                            if (!item.selected) {
                                allSelected = false;
                            }
                        });

                        if (allSelected) {
                            ctrl.checkBoxAllModel = allSelected;
                        }
                    }
                }
            };

            ctrl.checkBoxSelectAll = function () {
                var value = ctrl.checkBoxAllModel;

                if (ctrl.data) {
                    ctrl.data.forEach(function (item) {
                        item.selected = value;
                    });
                }
            }
        }
    }])
    .controller('gridControlDatePickerCtrl', ["$scope", function ($scope) {

        $scope.formatDate = function (theDate) {
            var zeroPad = function (str) {
                return ('0' + str).slice(-2);
            };

            var day = zeroPad(theDate.getDate());
            var month = zeroPad(theDate.getMonth());
            var year = theDate.getFullYear();

            return [month, day, year].join('/');
        };

        $scope.today = new Date();

        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.format = "dd/MM/yyyy";

        $scope.Options = {
            startingDay: 1
        };
    }]);
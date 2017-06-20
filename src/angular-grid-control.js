'use strict';
angular.module('template/grid', []).run(["$templateCache", function ($templateCache) {

    $templateCache.put("template/grid/pagination-grid.html", "<div>\n" +
        "\r <div>\n" +
        "\r   <table ng-class=\"ctrl.tableClass\" class=\"table\">\n" +
        "\r       <thead>\n" +
        "\r           <tr>\n" +
        "\r                <th ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box \">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"ctrl.checkBoxAllModel\" ng-change=\"ctrl.checkBoxSelectAll()\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r                </th>\n" +
        "\r                <th ng-style=\"{'width' : col.width ? col.width : 'auto'}\" class=\"col-lg-5 vertical-align-top\" ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span class=\"col-xs-12 no-padding \"><i ng-if=\"col.icon\" ng-class=\"col.icon\"></i> {{ col.displayName | translate }}</span> \n" +
        "\r                   <div class=\"margin-top-10 input-group\" ng-if=\"col.filter && (col.filterType && col.filterType != 'date')\">\n" +
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
        "\r           <tr ng-repeat=\"row in ctrl.data\" ng-click=\"ctrl.select(row)\" ng-class=\"ctrl.rowCssClass(row)\">\n" +
        "\r                <td ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top  grid-control-column-check-box\">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"row[ctrl.checkboxField]\" ng-change=\"ctrl.checkBoxSelection(row)\">\n" +
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
        "\r   <div ng-show=\"ctrl.showPagination\" class=\"grid-control-text-align-center grid-control-margin-top-20 grid-control-pagination-greed\" >\n" +
        "\r         <div ng-if=\"params.options.pagination.useItemsPerPage == true || params.options.pagination.useItemsPerPage == undefined\" class=\"grid-control-floatLeft grid-control-number-pagination\">\n" +
        "\r             <span>{{ ctrl.itemsPerPageText }}: </span>\n" +
        "\r             <select name=\"pageSize\" id=\"pageSize\" ng-options=\"option as option for option in ctrl.pageSizes\" ng-model=\"ctrl[ctrl.pagingInfoProperty][ctrl.pageSizeProperty]\"></select>\n" +
        "\r         </div>\n" +
        "\r         <ul uib-pagination ng-model=\"ctrl[ctrl.pagingInfoProperty][ctrl.pageIndexProperty]\" total-items=\"ctrl[ctrl.pagingInfoProperty][ctrl.totalCountProperty]\" items-per-page=\"ctrl[ctrl.pagingInfoProperty][ctrl.pageSizeProperty]\" max-size=\"5\" boundary-links=\"true\" previous-text=\"{{ ctrl.previousText }}\" next-text=\"{{ ctrl.nextText }}\" first-text=\"{{ ctrl.firstText }}\" last-text=\"{{ ctrl.lastText }}\">\n" +
        "\r         </ul>\n" +
        "\r   </div>\n" +
        "</div>");

    $templateCache.put("template/grid/simple-grid.html", "<div>\n" +
        "\r   <table ng-class=\"ctrl.tableClass\" class=\"table\">\n" +
        "\r       <thead>\n" +
        "\r           <tr>\n" +
        "\r                <th ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box \">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"ctrl.checkBoxAllModel\" ng-change=\"ctrl.checkBoxSelectAll()\">\n" +
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
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"row[ctrl.checkboxField]\" ng-change=\"ctrl.checkBoxSelection(row)\">\n" +
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
        "</div>");

    $templateCache.put("template/grid/scroll-grid.html", "<div class=\"table-scrollable\" ng-style=\"{ height: ctrl.height ? ctrl.height : 'auto' }\">\n" +
        "\r <div>\n" +
        "\r   <table ng-class=\"ctrl.tableClass\"  class=\"table\">\n" +
        "\r       <thead>\n" +
        "\r           <tr>\n" +
        "\r                <th ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box \">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>                           \n" +
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"ctrl.checkBoxAllModel\" ng-change=\"ctrl.checkBoxSelectAll()\">\n" +
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
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"row[ctrl.checkboxField]\" ng-change=\"ctrl.checkBoxSelection(row)\">     \n" +
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

    $templateCache.put("template/grid/vs-simple-grid.html",
        "<div class=\"vs-table-scroll\">\n" +
        "\r   <table ng-class=\"ctrl.tableClass\" class=\"table\">\n" +
        "\r       <thead>\n" +
        "\r           <tr>\n" +
        "\r                <th ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box\">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"ctrl.checkBoxAllModel\" ng-change=\"ctrl.checkBoxSelectAll()\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r                </th>\n" +
        "\r                <th ng-style=\"{'width' : col.width ? col.width : 'auto'}\" class=\"col-lg-5 vertical-align-top\" ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span><i ng-if=\"col.icon\" ng-class=\"col.icon\"></i> {{ col.displayName | translate }}</span>\n" +
        "\r                </th>\n" +
        "\r           </tr>\n" +
        "\r       </thead>\n" +
        "\r       <tbody vs-repeat vs-scroll-parent=\".vs-table-scroll\">\n" +
        "\r           <tr ng-repeat=\"row in ctrl.data\" ng-click=\"ctrl.select(row)\" ng-class=\"ctrl.rowCssClass(row)\">\n" +
        "\r                <td ng-if=\"ctrl.checkbox\" class=\"col-lg-5 vertical-align-top grid-control-column-check-box\">\n" +
        "\r						<div class=\"checkbox grid-control-no-margin\">\n" +
        "\r						    <label>\n" +
        "\r						        <input type=\"checkbox\" class=\"colored-blue\" ng-model=\"row[ctrl.checkboxField]\" ng-change=\"ctrl.checkBoxSelection(row)\">\n" +
        "\r						        <span class=\"text\"></span>\n" +
        "\r						    </label>\n" +
        "\r						</div>\n" +
        "\r               </td>\n" +
        "\r               <td ng-repeat=\"col in ctrl.columns\">\n" +
        "\r                   <span ng-if=\"col.cellTemplate\" gc-compile=\"col.cellTemplate\" cell-template-scope=\"col.cellTemplateScope\"></span>\n" +
        "\r                   <span ng-if=\"!col.cellTemplate\">{{row[col.field]}}</span>\n" +
        "\r               </td>\n" +
        "\r           </tr>\n" +
        "\r       </tbody>\n" +
        "\r   </table>\n" +
        "</div>");
}]);

angular.module('angular-grid-control', ['template/grid'])
    .directive('gcCompile', ['$compile', function ($compile) {
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
    }])
    .directive('gcSimple', function () {
        return {
            restrict: 'E',
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || "template/grid/simple-grid.html"
            },
            scope: {
                params: '=',
                selectedItem: '=',
                onSelect: '='
            },
            controller: 'gridControlController',
            controllerAs: 'ctrl',
            link: function (scope, el, attr) {}
        };
    })
    .directive('gcVsSimple', function () {
        return {
            restrict: 'E',
            templateUrl: function (tElement, tAttrs) {
                return tAttrs.templateUrl || "template/grid/vs-simple-grid.html"
            },
            scope: {
                params: '=',
                selectedItem: '=',
                onSelect: '='
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
                selectedItem: '=',
                onSelect: '='
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
                selectedItem: '=',
                onSelect: '='
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
        ctrl.tableClass = "table-striped table-bordered table-hover";

        if ($scope.params.data) {
            ctrl.data = $scope.params.data;
        }

        if ($scope.params.options && $scope.params.options.tableClass) {
            ctrl.tableClass = $scope.params.options.tableClass;
        }

        if ($scope.params.options && $scope.params.options.height) {
            ctrl.height = $scope.params.options && $scope.params.options.height;
        }

        ctrl.columns = $scope.params.columns;

        var isSearching = false;
        var isPageIndexReseted = false;

        ctrl.select = function (row) {
            if ($scope.params.selection) {

                $scope.params.selectedItem = row;
                $scope.$emit('gridControl:selectItem', row);

                if ($scope.onSelect instanceof Function) {
                    $scope.onSelect(row);
                }

                if ($scope.params.events && $scope.params.events.onSelectItem instanceof Function) {
                    $scope.params.events.onSelectItem(row);
                }
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

            ctrl.buildData(true).then(function (data) {
                isSearching = false;
            }).catch(function (error) {
                isSearching = false;
            });
        }

        ctrl.rowCssClass = function (row) {
            return {
                'danger': ctrl.error(row),
                'warning': ctrl.warning(row),
                'cursor-pointer': $scope.params.selection,
                'grid-control-item-selected': ctrl.isSelected(row)
            };
        };

        ctrl.isSelected = function (row) {
            return $scope.params.selectedItem == row;
        };

        $scope.params.update = function (reset) {
            ctrl.buildData(reset);
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

            ctrl.itemsPerPageText = "Items per page";
            ctrl.previousText = "Previous";
            ctrl.nextText = "Next";
            ctrl.lastText = "Last";
            ctrl.firstText = "First";

            ctrl.pagingInfoProperty = "pagingInfo";
            ctrl.pageSizeProperty = "pageSize";
            ctrl.pageIndexProperty = "pageIndex";
            ctrl.totalCountProperty = "totalCount";
            ctrl.hasNextPageProperty = "hasNextPage";
            ctrl.hasPreviousPageProperty = "hasPreviousPage";
            ctrl.itemsProperty = "items";

            if ($scope.params.options && $scope.params.options.pagination) {
                if ($scope.params.options.pagination.itemsPerPageText) {
                    ctrl.itemsPerPageText = $scope.params.options.pagination.itemsPerPageText;
                }

                if ($scope.params.options.pagination.firstText) {
                    ctrl.firstText = $scope.params.options.pagination.firstText;
                }

                if ($scope.params.options.pagination.lastText) {
                    ctrl.lastText = $scope.params.options.pagination.lastText;
                }

                if ($scope.params.options.pagination.nextText) {
                    ctrl.nextText = $scope.params.options.pagination.nextText;
                }

                if ($scope.params.options.pagination.previousText) {
                    ctrl.previousText = $scope.params.options.pagination.previousText;
                }

                if ($scope.params.options.pagination.pagingInfoProperty) {
                    ctrl.pagingInfoProperty = $scope.params.options.pagination.pagingInfoProperty;
                }

                if ($scope.params.options.pagination.pageSizeProperty) {
                    ctrl.pageSizeProperty = $scope.params.options.pagination.pageSizeProperty;
                }

                if ($scope.params.options.pagination.pageIndexProperty) {
                    ctrl.pageIndexProperty = $scope.params.options.pagination.pageIndexProperty;
                }

                if ($scope.params.options.pagination.totalCountProperty) {
                    ctrl.totalCountProperty = $scope.params.options.pagination.totalCountProperty;
                }

                if ($scope.params.options.pagination.hasPreviousPageProperty) {
                    ctrl.hasPreviousPageProperty = $scope.params.options.pagination.hasPreviousPageProperty;
                }

                if ($scope.params.options.pagination.hasNextPageProperty) {
                    ctrl.hasNextPageProperty = $scope.params.options.pagination.hasNextPageProperty;
                }

                if ($scope.params.options.pagination.itemsProperty) {
                    ctrl.itemsProperty = $scope.params.options.pagination.itemsProperty;
                }
            }

            ctrl.showPagination = true;

            ctrl.getData = $scope.params.data;

            ctrl.pageSizes = [5, 10, 15, 20, 25, 30, 50, 100];

            ctrl[ctrl.pagingInfoProperty] = {};
            ctrl[ctrl.pagingInfoProperty][ctrl.pageIndexProperty] = 1;

            if ($scope.params.options && $scope.params.options.pagination && $scope.params.options.pagination.pageSize) {
                ctrl[ctrl.pagingInfoProperty][ctrl.pageSizeProperty] = $scope.params.options.pagination.pageSize;
            } else if ($scope.params.options && 
                (!$scope.params.options.pagination || 
                    ($scope.params.options.pagination && !$scope.params.options.pagination.useItemsPerPage))) {
                ctrl[ctrl.pagingInfoProperty][ctrl.pageSizeProperty] = ctrl.pageSizes[0];
            }

            $scope.$watch('ctrl[ctrl.pagingInfoProperty][ctrl.pageIndexProperty] + ctrl[ctrl.pagingInfoProperty][ctrl.pageSizeProperty]', function () {
                if (isPageIndexReseted) {
                    isPageIndexReseted = false;
                    return;
                }

                if (!isSearching) {
                    $scope.$emit('gridControl:beforePageChanged');

                    ctrl.buildData().then(function () {
                        $scope.$emit('gridControl:afterPageChanged');
                    });
                }
            });

            var buildPaginationData = function (response) {
                response[ctrl.pagingInfoProperty][ctrl.pageIndexProperty] += 1;

                ctrl.data = response[ctrl.itemsProperty];
                ctrl[ctrl.pagingInfoProperty] = response[ctrl.pagingInfoProperty];

                ctrl.showPagination = ctrl[ctrl.pagingInfoProperty][ctrl.hasNextPageProperty] || ctrl[ctrl.pagingInfoProperty][ctrl.hasPreviousPageProperty];
            };

            ctrl.buildData = function (reset) {
                var defer = $q.defer();

                var request = {};

                request[ctrl.pagingInfoProperty] = angular.copy(ctrl[ctrl.pagingInfoProperty]);
                request[ctrl.pagingInfoProperty][ctrl.pageIndexProperty] -= 1;

                var isFilteredSearch = false;

                ctrl.columns.forEach(function (col) {
                    if (col.filter) {
                        if (col.filterValue) {
                            isFilteredSearch = true;
                        }

                        request[col.field] = col.filterValue;
                    }
                });

                if (reset === true && isFilteredSearch) {
                    isPageIndexReseted = request[ctrl.pagingInfoProperty][ctrl.pageIndexProperty] != 0;

                    request[ctrl.pagingInfoProperty][ctrl.pageIndexProperty] = 0;
                }

                ctrl.checkBoxAllModel = false;

                var async = $scope.params.options && $scope.params.options.async;

                if (async) {
                    ctrl.getData(request).then(function (response) {
                        buildPaginationData(response);

                        $scope.params.currentData = ctrl.data;

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
            };

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

            ctrl.checkboxField = $scope.params.options.checkboxField;

            if (!ctrl.checkboxField) {
                ctrl.checkboxField = 'selected';
            }

            ctrl.checkbox = $scope.params.options.checkbox;

            ctrl.checkBoxSelection = function (item) {
                var value = ctrl.checkBoxAllModel;

                if (value && !item[ctrl.checkboxField]) {
                    ctrl.checkBoxAllModel = item[ctrl.checkboxField];
                } else if (!value) {
                    if (ctrl.data) {
                        var allSelected = true;

                        ctrl.data.forEach(function (item) {
                            if (!item[ctrl.checkboxField]) {
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
                        item[ctrl.checkboxField] = value;
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
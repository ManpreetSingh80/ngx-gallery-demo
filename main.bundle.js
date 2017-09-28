webpackJsonp([1,4],{

/***/ 1028:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(448);


/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Example; });
var Example = (function () {
    function Example(title, images, options) {
        this.title = title;
        this.images = images;
        this.options = options;
        if (this.options.length == 1) {
            this.options.push({
                breakpoint: 500,
                width: '300px',
                height: '300px',
                thumbnailsColumns: 3
            });
            this.options.push({
                breakpoint: 300,
                width: '100%',
                height: '200px',
                thumbnailsColumns: 2
            });
        }
    }
    return Example;
}());
//# sourceMappingURL=example.model.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 447;


/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(578);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(749),
            styles: [__webpack_require__(738)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_lorem_ipsum__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__options_viewer_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_demo_component__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__custom_demo_custom_demo_component__ = __webpack_require__(575);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__demo_demo_component__["a" /* DemoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__custom_demo_custom_demo_component__["a" /* CustomDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_9__options_viewer_component__["a" /* OptionsViewerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["a" /* NgxGalleryModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_lorem_ipsum__["a" /* NgxLoremIpsumModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__demo_demo_component__["a" /* DemoComponent */] },
                    { path: 'custom', component: __WEBPACK_IMPORTED_MODULE_11__custom_demo_custom_demo_component__["a" /* CustomDemoComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_lorem_ipsum__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__example_model__ = __webpack_require__(376);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var CustomDemoComponent = (function () {
    function CustomDemoComponent(loremIpsumService, route, pageScrollService, document) {
        this.loremIpsumService = loremIpsumService;
        this.route = route;
        this.pageScrollService = pageScrollService;
        this.document = document;
    }
    CustomDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) {
            if (fragment) {
                _this.pageScrollService.start(__WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["b" /* PageScrollInstance */]
                    .simpleInstance(_this.document, '#' + fragment));
            }
        });
        this.examples = new Array();
        this.examples.push(new __WEBPACK_IMPORTED_MODULE_6__example_model__["a" /* Example */]('Responsive 1', this.getImages(), [
            {
                "previewFullscreen": true,
                "imageArrowsAutoHide": true,
            },
            {
                "breakpoint": 500,
                "width": "300px",
                "height": "600px",
                "thumbnailsColumns": 5
            },
            {
                "breakpoint": 300,
                "width": "100%",
                "height": "800px",
                "thumbnailsColumns": 4
            }]));
    };
    CustomDemoComponent.prototype.getUrlTitle = function (title) {
        return title.toLowerCase()
            .replace(new RegExp(' ', 'g'), '-')
            .replace(new RegExp('---', 'g'), '-');
    };
    CustomDemoComponent.prototype.getImages = function (description, randomCount) {
        var _this = this;
        if (description === void 0) { description = false; }
        if (randomCount === void 0) { randomCount = false; }
        var images = new Array();
        var indexes = this.randomizeArray([1, 2, 3, 4, 5, 6, 7, 8]);
        if (randomCount) {
            indexes = indexes.slice(0, this.getRandomInt(1, 4));
        }
        indexes.map(function (i) { return images.push(_this.getImage(i, description)); });
        return images;
    };
    CustomDemoComponent.prototype.getImage = function (index, description) {
        return {
            small: 'assets/img/' + index + '-small.jpeg',
            medium: 'assets/img/' + index + '-medium.jpeg',
            big: 'assets/img/' + index + '-big.jpeg',
            description: description ? this.getRandomDescription() : ''
        };
    };
    CustomDemoComponent.prototype.getRandomDescription = function () {
        return this.loremIpsumService.getRandom(1, 5);
    };
    CustomDemoComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    CustomDemoComponent.prototype.randomizeArray = function (numbersArray) {
        return numbersArray.sort(function () { return .5 - Math.random(); });
    };
    CustomDemoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-custom-demo',
            template: __webpack_require__(750)
        }),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["c" /* PageScrollService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_ng2_page_scroll__["c" /* PageScrollService */]) === 'function' && _c) || Object, Object])
    ], CustomDemoComponent);
    return CustomDemoComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=custom-demo.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_lorem_ipsum__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__example_model__ = __webpack_require__(376);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var DemoComponent = (function () {
    function DemoComponent(loremIpsumService, route, pageScrollService, document, sanitization) {
        this.loremIpsumService = loremIpsumService;
        this.route = route;
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.sanitization = sanitization;
        this.asyncSpinnerActive = true;
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) {
            if (fragment) {
                _this.pageScrollService.start(__WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["b" /* PageScrollInstance */]
                    .simpleInstance(_this.document, '#' + fragment));
            }
        });
        this.examples = new Array();
        this.examples.push(new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Simple gallery', this.getImages(), [{ previewCloseOnEsc: true }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Custom layout', this.getImages(), [{
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsColumns: 6,
                thumbnailsMargin: 0,
                thumbnailMargin: 0,
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Image size - contain', this.getImages(), [{
                imageSize: __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["c" /* NgxGalleryImageSize */].Contain
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Thumbnails with multiple rows', this.getImages(), [{
                thumbnailsColumns: 3,
                thumbnailsRows: 2,
                thumbnailsPercent: 40,
                imagePercent: 60,
                thumbnailMargin: 2,
                thumbnailsMargin: 2
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Thumbnails on top', this.getImages(), [{
                layout: __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["d" /* NgxGalleryLayout */].ThumbnailsTop
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Auto play', this.getImages(), [{
                imageAutoPlay: true,
                previewAutoPlay: true
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Preview with image description and fullscreen', this.getImages(true), [{
                previewFullscreen: true,
                previewKeyboardNavigation: true
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Preview with fullscreen on start', this.getImages(true), [{
                previewFullscreen: true,
                previewForceFullscreen: true
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Only image', this.getImages(true), [{
                thumbnails: false
            }, {
                breakpoint: 500,
                width: '100%',
                height: '200px'
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Only thumbnails', this.getImages(true), [{
                image: false,
                height: '100px'
            }, {
                breakpoint: 500,
                width: '100%'
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Swipe', this.getImages(), [{
                imageArrows: false,
                imageSwipe: true,
                thumbnailsArrows: false,
                thumbnailsSwipe: true,
                previewSwipe: true
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Custom icons', this.getImages(), [{
                arrowPrevIcon: 'fa fa-arrow-circle-o-left',
                arrowNextIcon: 'fa fa-arrow-circle-o-right',
                closeIcon: 'fa fa-window-close',
                fullscreenIcon: 'fa fa-arrows',
                spinnerIcon: 'fa fa-refresh fa-spin fa-3x fa-fw',
                previewFullscreen: true
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Arrows auto hide', this.getImages(), [{
                imageArrowsAutoHide: true,
                thumbnailsArrowsAutoHide: true
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Disabled preview', this.getImages(), [{
                preview: false
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Using the same images', [this.getImage(1, false), this.getImage(1, false), this.getImage(1, false)], [{}]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Animation - Slide', this.getImages(), [{
                imageAnimation: __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["e" /* NgxGalleryAnimation */].Slide
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Animation - Rotate', this.getImages(), [{
                imageAnimation: __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["e" /* NgxGalleryAnimation */].Rotate
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Animation - Zoom', this.getImages(), [{
                imageAnimation: __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["e" /* NgxGalleryAnimation */].Zoom
            }]), new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Custom start index', this.getImages(), [{
                startIndex: 4
            }]));
        this.onlyPreviewExample = new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Only preview', this.getImages(), [{
                image: false,
                thumbnails: false,
                width: '0px',
                height: '0px'
            }]);
        this.safeExample = new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Images as SafeResourceURL', this.getSafeImages(true), [{}]);
        this.changeExample = new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Dynamic images change', this.getImages(true, true), [{}]);
        this.asyncExample = new __WEBPACK_IMPORTED_MODULE_8__example_model__["a" /* Example */]('Async images', [], [{}]);
        this.getAsyncImages().subscribe(function (images) {
            _this.asyncExample.images = images;
            _this.asyncSpinnerActive = false;
        });
    };
    DemoComponent.prototype.openPreview = function () {
        this.onlyPreviewGallery.openPreview(0);
    };
    DemoComponent.prototype.changeImages = function () {
        this.changeExample.images = this.getImages(true, true);
    };
    DemoComponent.prototype.addImage = function () {
        this.changeExample.images.push(this.getImage(this.getRandomInt(1, 8), true));
    };
    DemoComponent.prototype.removeImage = function () {
        this.changeExample.images.pop();
    };
    DemoComponent.prototype.getUrlTitle = function (title) {
        return title.toLowerCase()
            .replace(new RegExp(' ', 'g'), '-')
            .replace(new RegExp('---', 'g'), '-');
    };
    DemoComponent.prototype.getAsyncImages = function () {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].of(this.getImages()).delay(5000);
    };
    DemoComponent.prototype.getImages = function (description, randomCount) {
        var _this = this;
        if (description === void 0) { description = false; }
        if (randomCount === void 0) { randomCount = false; }
        var images = new Array();
        var indexes = this.randomizeArray([1, 2, 3, 4, 5, 6, 7, 8]);
        if (randomCount) {
            indexes = indexes.slice(0, this.getRandomInt(1, 4));
        }
        indexes.map(function (i) { return images.push(_this.getImage(i, description)); });
        return images;
    };
    DemoComponent.prototype.getImage = function (index, description) {
        return {
            small: 'assets/img/' + index + '-small.jpeg',
            medium: 'assets/img/' + index + '-medium.jpeg',
            big: 'assets/img/' + index + '-big.jpeg',
            description: description ? this.getRandomDescription() : ''
        };
    };
    DemoComponent.prototype.getSafeImages = function (description) {
        var _this = this;
        if (description === void 0) { description = false; }
        var images = new Array();
        var indexes = this.randomizeArray([1, 2, 3, 4, 5, 6, 7, 8]);
        indexes.map(function (i) { return images.push(_this.getImage(i, description)); });
        return images;
    };
    DemoComponent.prototype.getSafeImage = function (index, description) {
        return {
            small: this.sanitization.bypassSecurityTrustResourceUrl('assets/img/' + index + '-small.jpeg'),
            medium: this.sanitization.bypassSecurityTrustResourceUrl('assets/img/' + index + '-medium.jpeg'),
            big: this.sanitization.bypassSecurityTrustResourceUrl('assets/img/' + index + '-big.jpeg'),
            description: description ? this.getRandomDescription() : ''
        };
    };
    DemoComponent.prototype.getRandomDescription = function () {
        return this.loremIpsumService.getRandom(1, 5);
    };
    DemoComponent.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    DemoComponent.prototype.randomizeArray = function (numbersArray) {
        return numbersArray.sort(function () { return .5 - Math.random(); });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('onlyPreviewGallery'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["f" /* NgxGalleryComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_ngx_gallery__["f" /* NgxGalleryComponent */]) === 'function' && _a) || Object)
    ], DemoComponent.prototype, "onlyPreviewGallery", void 0);
    DemoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-demo',
            template: __webpack_require__(751)
        }),
        __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["f" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_ngx_lorem_ipsum__["b" /* NgxLoremIpsumService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["c" /* PageScrollService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ng2_page_scroll__["c" /* PageScrollService */]) === 'function' && _d) || Object, Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["e" /* DomSanitizer */]) === 'function' && _e) || Object])
    ], DemoComponent);
    return DemoComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_gallery__ = __webpack_require__(272);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionsViewerComponent = (function () {
    function OptionsViewerComponent() {
        this.visibleCode = false;
    }
    OptionsViewerComponent.prototype.showCode = function () {
        this.visibleCode = true;
    };
    OptionsViewerComponent.prototype.hideCode = function () {
        this.visibleCode = false;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_gallery__["b" /* NgxGalleryOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ngx_gallery__["b" /* NgxGalleryOptions */]) === 'function' && _a) || Object)
    ], OptionsViewerComponent.prototype, "options", void 0);
    OptionsViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'options-viewer',
            template: __webpack_require__(752),
            styles: [__webpack_require__(737)]
        }), 
        __metadata('design:paramtypes', [])
    ], OptionsViewerComponent);
    return OptionsViewerComponent;
    var _a;
}());
//# sourceMappingURL=options-viewer.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 737:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, ":host {\n  float: left;\n  clear: left;\n  width: 100%;\n  margin-bottom: 50px; }\n  :host .code {\n    text-align: left;\n    background-color: rgba(27, 31, 35, 0.05);\n    padding: 10px;\n    overflow: hidden;\n    font-size: 15px;\n    display: inline-block;\n    visibility: hidden;\n    opacity: 0;\n    transition: visibility 0s, opacity 0.5s linear;\n    height: 0; }\n    :host .code.active {\n      visibility: visible;\n      opacity: 1;\n      height: auto; }\n    :host .code div {\n      margin-left: 10px; }\n  :host .code-action-wrapper {\n    text-align: center;\n    display: block;\n    margin-bottom: 20px; }\n    :host .code-action-wrapper .code-action {\n      cursor: pointer;\n      display: inline-block;\n      font-weight: bold;\n      text-decoration: underline; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 738:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 750:
/***/ (function(module, exports) {

module.exports = "<div class=\"example\" *ngFor=\"let example of examples; let i = index;\">\r\n    <h2 id=\"{{ getUrlTitle(example.title) }}\"><a href=\"{{ '/custom#' + getUrlTitle(example.title) }}\">{{ example.title }}</a></h2>\r\n    <ngx-gallery [options]=\"example.options\" [images]=\"example.images\"></ngx-gallery>\r\n    <options-viewer [options]=\"example.options\"></options-viewer>\r\n</div>"

/***/ }),

/***/ 751:
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\r\n    <h1>Angular2 Gallery</h1>\r\n    <a href=\"https://github.com/lukasz-galka/ngx-gallery\" target=\"_blank\">https://github.com/lukasz-galka/ngx-gallery</a>\r\n</div>\r\n\r\n<div class=\"example\" *ngFor=\"let example of examples; let i = index;\">\r\n    <h2 id=\"{{ getUrlTitle(example.title) }}\"><a href=\"{{ '/ngx-gallery-demo/#' + getUrlTitle(example.title) }}\">{{ example.title }}</a></h2>\r\n    <ngx-gallery [options]=\"example.options\" [images]=\"example.images\"></ngx-gallery>\r\n    <options-viewer [options]=\"example.options\"></options-viewer>\r\n</div>\r\n\r\n<div class=\"example\">\r\n    <h2 id=\"{{ getUrlTitle(onlyPreviewExample.title) }}\">\r\n        <a href=\"{{ '/ngx-gallery-demo/#' + getUrlTitle(onlyPreviewExample.title) }}\">\r\n            {{ onlyPreviewExample.title }}\r\n        </a>\r\n    </h2>\r\n    <div class=\"buttons-wrapper\">\r\n        <button (click)=\"openPreview()\">Open Preview</button>\r\n    </div>\r\n    <ngx-gallery [options]=\"onlyPreviewExample.options\" [images]=\"onlyPreviewExample.images\" #onlyPreviewGallery></ngx-gallery>\r\n    <options-viewer [options]=\"onlyPreviewExample.options\"></options-viewer>\r\n</div>\r\n\r\n<div class=\"example\">\r\n    <h2 id=\"{{ getUrlTitle(safeExample.title) }}\">\r\n        <a href=\"{{ '/ngx-gallery-demo/#' + getUrlTitle(safeExample.title) }}\">\r\n            {{ safeExample.title }}\r\n        </a>\r\n    </h2>\r\n    <ngx-gallery [options]=\"safeExample.options\" [images]=\"safeExample.images\"></ngx-gallery>\r\n    <options-viewer [options]=\"safeExample.options\"></options-viewer>\r\n</div>\r\n\r\n<div class=\"example\">\r\n    <h2 id=\"{{ getUrlTitle(changeExample.title) }}\">\r\n        <a href=\"{{ '/ngx-gallery-demo/#' + getUrlTitle(changeExample.title) }}\">\r\n            {{ changeExample.title }}\r\n        </a>\r\n    </h2>\r\n    <div class=\"buttons-wrapper\">\r\n        <button class=\"change\" (click)=\"changeImages()\">Change All</button>\r\n        <button class=\"change\" (click)=\"addImage()\">Add one</button>\r\n        <button class=\"change\" (click)=\"removeImage()\">Remove one</button>\r\n    </div>\r\n    <ngx-gallery [options]=\"changeExample.options\" [images]=\"changeExample.images\"></ngx-gallery>\r\n    <options-viewer [options]=\"changeExample.options\"></options-viewer>\r\n</div>\r\n\r\n<div class=\"example\">\r\n    <h2 id=\"{{ getUrlTitle(asyncExample.title) }}\">\r\n        <a href=\"{{ '/ngx-gallery-demo/#' + getUrlTitle(asyncExample.title) }}\">\r\n            {{ asyncExample.title }}\r\n        </a>\r\n        <i class=\"fa fa-spinner fa-pulse fa-3x fa-fw\" [class.active]=\"asyncSpinnerActive\"></i>\r\n    </h2>\r\n    <ngx-gallery [options]=\"asyncExample.options\" [images]=\"asyncExample.images\"></ngx-gallery>\r\n    <options-viewer [options]=\"asyncExample.options\"></options-viewer>\r\n</div>\r\n\r\n<div class=\"links\">\r\n    <a href=\"https://github.com/lukasz-galka\" target=\"_blank\">\r\n        <svg class=\"icon\">\r\n            <use xlink:href=\"#si-dev-github_badge\" />\r\n        </svg>\r\n    </a>\r\n\r\n    <a href=\"https://www.npmjs.com/~lukasz-galka\" target=\"_blank\">\r\n        <svg class=\"icon icon-npm\">\r\n            <use xlink:href=\"#si-dev-npm\" />\r\n        </svg>\r\n    </a>\r\n\r\n    <a href=\"http://blog.lukasz-galka.pl\" target=\"_blank\">\r\n        <svg class=\"icon\">\r\n            <use xlink:href=\"#si-dev-wordpress\" />\r\n        </svg>\r\n    </a>\r\n\r\n    <a href=\"https://www.linkedin.com/in/%C5%82ukasz-ga%C5%82ka-6187a2132/\" target=\"_blank\">\r\n        <svg class=\"icon\">\r\n            <use xlink:href=\"#si-zocial-linkedin\" />\r\n        </svg>\r\n    </a>\r\n\r\n    <a href=\"mailto:lukasz-galka@hotmail.com\">\r\n        <svg class=\"icon\">\r\n            <use xlink:href=\"#si-zocial-email\" />\r\n        </svg>\r\n    </a>\r\n\r\n    <a href=\"https://www.intive.com\" target=\"_blank\">\r\n        <svg class=\"icon icon-intive\">\r\n            <use xlink:href=\"#intive\" />\r\n        </svg>\r\n    </a>\r\n\r\n    <a href=\"https://www.instagram.com/smilingsamoyedsammy/\" target=\"_blank\">\r\n        <svg class=\"icon\">\r\n            <use xlink:href=\"#si-awesome-paw\" />\r\n        </svg>\r\n    </a>\r\n</div>\r\n"

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

module.exports = "<div class=\"code-action-wrapper\" *ngIf=\"!visibleCode\">\r\n    <div class=\"code-action\" (click)=\"showCode()\">\r\n        Show code\r\n    </div>\r\n</div>\r\n<div class=\"code-action-wrapper\" *ngIf=\"visibleCode\">\r\n    <div class=\"code-action\" (click)=\"hideCode()\">\r\n        Hide code\r\n    </div>\r\n</div>\r\n\r\n<div class=\"code\" [class.active]=\"visibleCode\">\r\n[\r\n<div *ngFor=\"let option of options\">{{option | json}}</div>\r\n]\r\n</div>\r\n"

/***/ })

},[1028]);
//# sourceMappingURL=main.bundle.js.map
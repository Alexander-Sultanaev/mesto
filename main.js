(()=>{"use strict";document.querySelectorAll(".popup");var e=document.querySelector(".popup_type_image"),t=(e.querySelector(".popup__image"),e.querySelector(".popup__caption"),document.querySelector(".profile__button-edit")),n=document.querySelector(".profile__button-add"),r=document.querySelector(".profile__image"),o=document.querySelector(".popup_type_card"),i=o.querySelector(".popup__input_type_title"),a=o.querySelector(".popup__input_type_link"),u=document.querySelector(".gallery__template").content,c=document.querySelector(".popup__image"),s=document.querySelector(".popup__caption"),l=document.querySelector(".popup_type_profile"),p=(l.querySelector(".popup__input_type_name"),l.querySelector(".popup__input_type_subname"),document.querySelector(".popup_type_avatar")),f=document.querySelector(".profile__image"),h=(document.querySelector(".popup_type_delete-card"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"});function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n,r,o,i,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elementCardName=t.name,this._elementCardLink=t.link,this._templateCard=n.querySelector(".gallery__card"),this._functionCardClick=r,this._elementCardCountLikes=t.likes,this._elementCardId=t._id,this._elementCardUserId=t.owner._id,this._userId=a,this._openPopupDeleteCard=o,this._handelLikeClick=i}var t,n;return t=e,(n=[{key:"_createView",value:function(){this._templateView=this._templateCard.cloneNode(!0)}},{key:"deleteCard",value:function(){this._templateView.remove(),this._templateView=null}},{key:"isLike",value:function(){var e=this;return this._elementCardCountLikes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._cardLiked=this._templateView.querySelector(".gallery__button-like"),this._elementCardCountLikes=e,this._countLikes=this._templateView.querySelector(".gallery__heart-count"),this._countLikes.textContent=this._elementCardCountLikes.length,this._cardLikedActive="gallery__button-like_active",this.isLike()?this._cardLiked.classList.add(this._cardLikedActive):this._cardLiked.classList.remove(this._cardLikedActive)}},{key:"_addEventListeners",value:function(){var e=this;this._cardLiked.addEventListener("click",(function(){return e._handelLikeClick(e._elementCardId)})),this._cardRemove.addEventListener("click",(function(){return e._openPopupDeleteCard(e._elementCardId)})),this._cardImg.addEventListener("click",(function(){return e._functionCardClick(e._elementCardName,e._elementCardLink)}))}},{key:"createCard",value:function(){return this._createView(),this.setLikes(this._elementCardCountLikes),this._cardRemove=this._templateView.querySelector(".gallery__button-delete"),this._cardTitle=this._templateView.querySelector(".gallery__title"),this._cardImg=this._templateView.querySelector(".gallery__image"),this._cardTitle.textContent=this._elementCardName,this._cardImg.src=this._elementCardLink,this._cardImg.alt=this._elementCardName,this._elementCardUserId===this._userId&&this._cardRemove.classList.add("gallery__button-delete_visible"),this._addEventListeners(),this._templateView}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.textContent=e.validationMessage,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"resetFormValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemOnServer",value:function(e){this._container.append(e)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameUser=document.querySelector(n),this._aboutUser=document.querySelector(r),this._avatarUser=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameUser.textContent,about:this._aboutUser.textContent,avatar:this._avatarUser.src}}},{key:"setUserInfo",value:function(e){this._nameUser.textContent=e.name,this._aboutUser.textContent=e.about,this._avatarUser.src=e.avatar}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n,r,o=this,i=t.selectorPopup;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._selectorPopup=document.querySelector(i)}var t,n;return t=e,(n=[{key:"open",value:function(){this._selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._selectorPopup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__button-close"))&&e.close()}))}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function j(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e){var t,n=e.selectorPopup,r=e.functionPopupForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,{selectorPopup:n}))._handleFormSubmit=r,t._popupForm=t._selectorPopup.querySelector(".popup__form"),t._inputList=t._popupForm.querySelectorAll(".popup__input"),t._submitBtn=t._popupForm.querySelector(".popup__button-save"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"delitSubmit",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;L(I(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){L(I(a.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(e){this._submitBtn.textContent=e?"Сохранение...":"Сохранить"}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(C);function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=T(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},U.apply(this,arguments)}function T(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function A(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t,n){var r,o=e.selectorPopup;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,{selectorPopup:o}))._imgUrl=t,r._imgName=n,r}return t=a,(n=[{key:"open",value:function(e,t){this._imgUrl.src=t,this._imgUrl.alt=e,this._imgName.textContent=e,U(F(a.prototype),"open",this).call(this)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(C);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._checkResponse(t)}))}},{key:"addCar",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkResponse(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"GET"}).then((function(t){return e._checkResponse(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._checkResponse(e)}))}},{key:"editUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._checkResponse(e)}))}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=new m(h,o);H.enableValidation();var M=new m(h,l);M.enableValidation();var z=new m(h,p);z.enableValidation();var G,$=new N({url:"https://mesto.nomoreparties.co/v1/cohort-50",headers:{authorization:"1ab05af1-5f6c-42a4-8598-6f7702cd2129","Content-type":"application/json"}});Promise.all([$.getInitialCards(),$.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];G=i._id,K.setUserInfo(i),o.forEach((function(e){var t=Z(e).createCard();X.addItemOnServer(t)}))})).catch((function(e){console.log("Ошибка: ".concat(e))}));var K=new g({name:".profile__name",about:".profile__subname",avatar:".profile__image"}),Q=new q({selectorPopup:".popup_type_profile",functionPopupForm:function(e){Q.loading(!0),$.setUserInfo(e).then((function(e){K.setUserInfo(e),Q.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Q.loading(!1)}))}});t.addEventListener("click",(function(){return function(){Q.open();var e=K.getUserInfo();Q.setInputValues(e),M.resetFormValidation()}()})),Q.setEventListeners();var W=new q({selectorPopup:".popup_type_avatar",functionPopupForm:function(e){W.loading(!0),$.editUserAvatar(e).then((function(e){f.src=e.avatar,W.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){W.loading(!1)}))}});r.addEventListener("click",(function(){return W.open(),void z.resetFormValidation()})),W.setEventListeners();var X=new b({renderer:function(e){return Z(e)}},".gallery__list"),Y=new q({selectorPopup:".popup_type_delete-card"});function Z(e){var t=new _(e,u,te,(function(e){Y.open(),Y.delitSubmit((function(){$.deleteCard(e).then((function(){t.deleteCard(),Y.close()})).catch((function(e){return console.log(e)}))}))}),(function(e){t.isLike()?$.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){return console.log(e)})):$.likeCard(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){return console.log(e)}))}),G);return t}var ee=new x({selectorPopup:".popup_type_image"},c,s);function te(e,t){ee.open(e,t)}ee.setEventListeners();var ne=new q({selectorPopup:".popup_type_card",functionPopupForm:function(e){ne.loading(!0),$.addCar(e).then((function(e){var t=Z(e).createCard();X.addItem(t),ne.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.loading(!1)}))}});n.addEventListener("click",(function(){return ne.open(),i.value="",a.value="",void H.resetFormValidation()})),ne.setEventListeners(),Y.setEventListeners()})();
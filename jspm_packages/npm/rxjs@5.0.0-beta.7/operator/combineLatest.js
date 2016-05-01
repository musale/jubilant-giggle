/* */ 
"use strict";
var __extends = (this && this.__extends) || function(d, b) {
  for (var p in b)
    if (b.hasOwnProperty(p))
      d[p] = b[p];
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = require('../observable/ArrayObservable');
var isArray_1 = require('../util/isArray');
var isScheduler_1 = require('../util/isScheduler');
var OuterSubscriber_1 = require('../OuterSubscriber');
var subscribeToResult_1 = require('../util/subscribeToResult');
function combineLatest() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i - 0] = arguments[_i];
  }
  var project = null;
  if (typeof observables[observables.length - 1] === 'function') {
    project = observables.pop();
  }
  if (observables.length === 1 && isArray_1.isArray(observables[0])) {
    observables = observables[0];
  }
  observables.unshift(this);
  return new ArrayObservable_1.ArrayObservable(observables).lift(new CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
function combineLatestStatic() {
  var observables = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    observables[_i - 0] = arguments[_i];
  }
  var project = null;
  var scheduler = null;
  if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
    scheduler = observables.pop();
  }
  if (typeof observables[observables.length - 1] === 'function') {
    project = observables.pop();
  }
  if (observables.length === 1 && isArray_1.isArray(observables[0])) {
    observables = observables[0];
  }
  return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new CombineLatestOperator(project));
}
exports.combineLatestStatic = combineLatestStatic;
var CombineLatestOperator = (function() {
  function CombineLatestOperator(project) {
    this.project = project;
  }
  CombineLatestOperator.prototype.call = function(subscriber, source) {
    return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
  };
  return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
var CombineLatestSubscriber = (function(_super) {
  __extends(CombineLatestSubscriber, _super);
  function CombineLatestSubscriber(destination, project) {
    _super.call(this, destination);
    this.project = project;
    this.active = 0;
    this.values = [];
    this.observables = [];
    this.toRespond = [];
  }
  CombineLatestSubscriber.prototype._next = function(observable) {
    var toRespond = this.toRespond;
    toRespond.push(toRespond.length);
    this.observables.push(observable);
  };
  CombineLatestSubscriber.prototype._complete = function() {
    var observables = this.observables;
    var len = observables.length;
    if (len === 0) {
      this.destination.complete();
    } else {
      this.active = len;
      for (var i = 0; i < len; i++) {
        var observable = observables[i];
        this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
      }
    }
  };
  CombineLatestSubscriber.prototype.notifyComplete = function(unused) {
    if ((this.active -= 1) === 0) {
      this.destination.complete();
    }
  };
  CombineLatestSubscriber.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
    var values = this.values;
    values[outerIndex] = innerValue;
    var toRespond = this.toRespond;
    if (toRespond.length > 0) {
      var found = toRespond.indexOf(outerIndex);
      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
    if (toRespond.length === 0) {
      if (this.project) {
        this._tryProject(values);
      } else {
        this.destination.next(values);
      }
    }
  };
  CombineLatestSubscriber.prototype._tryProject = function(values) {
    var result;
    try {
      result = this.project.apply(this, values);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  };
  return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;

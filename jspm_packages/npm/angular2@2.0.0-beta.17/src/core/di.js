/* */ 
"format cjs";
'use strict';/**
 * @module
 * @description
 * The `di` module provides dependency injection container services.
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var metadata_1 = require('./di/metadata');
exports.InjectMetadata = metadata_1.InjectMetadata;
exports.OptionalMetadata = metadata_1.OptionalMetadata;
exports.InjectableMetadata = metadata_1.InjectableMetadata;
exports.SelfMetadata = metadata_1.SelfMetadata;
exports.HostMetadata = metadata_1.HostMetadata;
exports.SkipSelfMetadata = metadata_1.SkipSelfMetadata;
exports.DependencyMetadata = metadata_1.DependencyMetadata;
// we have to reexport * because Dart and TS export two different sets of types
__export(require('./di/decorators'));
var forward_ref_1 = require('./di/forward_ref');
exports.forwardRef = forward_ref_1.forwardRef;
exports.resolveForwardRef = forward_ref_1.resolveForwardRef;
var injector_1 = require('./di/injector');
exports.Injector = injector_1.Injector;
var reflective_injector_1 = require('./di/reflective_injector');
exports.ReflectiveInjector = reflective_injector_1.ReflectiveInjector;
var provider_1 = require('./di/provider');
exports.Binding = provider_1.Binding;
exports.ProviderBuilder = provider_1.ProviderBuilder;
exports.bind = provider_1.bind;
exports.Provider = provider_1.Provider;
exports.provide = provider_1.provide;
var reflective_provider_1 = require('./di/reflective_provider');
exports.ResolvedReflectiveFactory = reflective_provider_1.ResolvedReflectiveFactory;
exports.ReflectiveDependency = reflective_provider_1.ReflectiveDependency;
var reflective_key_1 = require('./di/reflective_key');
exports.ReflectiveKey = reflective_key_1.ReflectiveKey;
var reflective_exceptions_1 = require('./di/reflective_exceptions');
exports.NoProviderError = reflective_exceptions_1.NoProviderError;
exports.AbstractProviderError = reflective_exceptions_1.AbstractProviderError;
exports.CyclicDependencyError = reflective_exceptions_1.CyclicDependencyError;
exports.InstantiationError = reflective_exceptions_1.InstantiationError;
exports.InvalidProviderError = reflective_exceptions_1.InvalidProviderError;
exports.NoAnnotationError = reflective_exceptions_1.NoAnnotationError;
exports.OutOfBoundsError = reflective_exceptions_1.OutOfBoundsError;
var opaque_token_1 = require('./di/opaque_token');
exports.OpaqueToken = opaque_token_1.OpaqueToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLUJSSmVyMUo5LnRtcC9hbmd1bGFyMi9zcmMvY29yZS9kaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHOzs7OztBQUVILHlCQVFPLGVBQWUsQ0FBQztBQVByQixtREFBYztBQUNkLHVEQUFnQjtBQUNoQiwyREFBa0I7QUFDbEIsK0NBQVk7QUFDWiwrQ0FBWTtBQUNaLHVEQUFnQjtBQUNoQiwyREFDcUI7QUFFdkIsK0VBQStFO0FBQy9FLGlCQUFjLGlCQUFpQixDQUFDLEVBQUE7QUFFaEMsNEJBQTBELGtCQUFrQixDQUFDO0FBQXJFLDhDQUFVO0FBQUUsNERBQXlEO0FBRTdFLHlCQUF1QixlQUFlLENBQUM7QUFBL0IsdUNBQStCO0FBQ3ZDLG9DQUFpQywwQkFBMEIsQ0FBQztBQUFwRCxzRUFBb0Q7QUFDNUQseUJBT08sZUFBZSxDQUFDO0FBTnJCLHFDQUFPO0FBQ1AscURBQWU7QUFDZiwrQkFBSTtBQUVKLHVDQUFRO0FBQ1IscUNBQ3FCO0FBQ3ZCLG9DQU1PLDBCQUEwQixDQUFDO0FBSmhDLG9GQUF5QjtBQUN6QiwwRUFHZ0M7QUFDbEMsK0JBQTRCLHFCQUFxQixDQUFDO0FBQTFDLHVEQUEwQztBQUNsRCxzQ0FRTyw0QkFBNEIsQ0FBQztBQVBsQyxrRUFBZTtBQUNmLDhFQUFxQjtBQUNyQiw4RUFBcUI7QUFDckIsd0VBQWtCO0FBQ2xCLDRFQUFvQjtBQUNwQixzRUFBaUI7QUFDakIsb0VBQ2tDO0FBQ3BDLDZCQUEwQixtQkFBbUIsQ0FBQztBQUF0QyxpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBtb2R1bGVcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGBkaWAgbW9kdWxlIHByb3ZpZGVzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciBzZXJ2aWNlcy5cbiAqL1xuXG5leHBvcnQge1xuICBJbmplY3RNZXRhZGF0YSxcbiAgT3B0aW9uYWxNZXRhZGF0YSxcbiAgSW5qZWN0YWJsZU1ldGFkYXRhLFxuICBTZWxmTWV0YWRhdGEsXG4gIEhvc3RNZXRhZGF0YSxcbiAgU2tpcFNlbGZNZXRhZGF0YSxcbiAgRGVwZW5kZW5jeU1ldGFkYXRhXG59IGZyb20gJy4vZGkvbWV0YWRhdGEnO1xuXG4vLyB3ZSBoYXZlIHRvIHJlZXhwb3J0ICogYmVjYXVzZSBEYXJ0IGFuZCBUUyBleHBvcnQgdHdvIGRpZmZlcmVudCBzZXRzIG9mIHR5cGVzXG5leHBvcnQgKiBmcm9tICcuL2RpL2RlY29yYXRvcnMnO1xuXG5leHBvcnQge2ZvcndhcmRSZWYsIHJlc29sdmVGb3J3YXJkUmVmLCBGb3J3YXJkUmVmRm59IGZyb20gJy4vZGkvZm9yd2FyZF9yZWYnO1xuXG5leHBvcnQge0luamVjdG9yfSBmcm9tICcuL2RpL2luamVjdG9yJztcbmV4cG9ydCB7UmVmbGVjdGl2ZUluamVjdG9yfSBmcm9tICcuL2RpL3JlZmxlY3RpdmVfaW5qZWN0b3InO1xuZXhwb3J0IHtcbiAgQmluZGluZyxcbiAgUHJvdmlkZXJCdWlsZGVyLFxuICBiaW5kLFxuXG4gIFByb3ZpZGVyLFxuICBwcm92aWRlXG59IGZyb20gJy4vZGkvcHJvdmlkZXInO1xuZXhwb3J0IHtcbiAgUmVzb2x2ZWRSZWZsZWN0aXZlQmluZGluZyxcbiAgUmVzb2x2ZWRSZWZsZWN0aXZlRmFjdG9yeSxcbiAgUmVmbGVjdGl2ZURlcGVuZGVuY3ksXG5cbiAgUmVzb2x2ZWRSZWZsZWN0aXZlUHJvdmlkZXJcbn0gZnJvbSAnLi9kaS9yZWZsZWN0aXZlX3Byb3ZpZGVyJztcbmV4cG9ydCB7UmVmbGVjdGl2ZUtleX0gZnJvbSAnLi9kaS9yZWZsZWN0aXZlX2tleSc7XG5leHBvcnQge1xuICBOb1Byb3ZpZGVyRXJyb3IsXG4gIEFic3RyYWN0UHJvdmlkZXJFcnJvcixcbiAgQ3ljbGljRGVwZW5kZW5jeUVycm9yLFxuICBJbnN0YW50aWF0aW9uRXJyb3IsXG4gIEludmFsaWRQcm92aWRlckVycm9yLFxuICBOb0Fubm90YXRpb25FcnJvcixcbiAgT3V0T2ZCb3VuZHNFcnJvclxufSBmcm9tICcuL2RpL3JlZmxlY3RpdmVfZXhjZXB0aW9ucyc7XG5leHBvcnQge09wYXF1ZVRva2VufSBmcm9tICcuL2RpL29wYXF1ZV90b2tlbic7XG4iXX0=
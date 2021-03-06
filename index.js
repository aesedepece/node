// Generated by IcedCoffeeScript 108.0.7
(function() {
  var Stampery, crypto, iced, request, __iced_k, __iced_k_noop;

  iced = require('iced-runtime');
  __iced_k = __iced_k_noop = function() {};

  crypto = require('crypto');

  request = require('request');

  Stampery = (function() {
    function Stampery(api_key, beta) {
      this.api_key = api_key;
      this.beta = beta;
      this.req = request.defaults({
        baseUrl: !this.beta ? 'https://stampery.co/api/v1' : 'https://beta.stampery.co/api/v1',
        json: true,
        headers: {
          'x-user-token': this.api_key
        }
      });
    }

    Stampery.prototype.hash = function(data) {
      var hash;
      hash = crypto.createHash('sha256');
      hash.update(data);
      return hash.digest('hex');
    };

    Stampery.prototype.stamp = function(fileName, fileHash, extra, cb) {
      var data, err, formData, res, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      formData = {
        fileName: fileName,
        extra: JSON.stringify(extra)
      };
      if (typeof fileHash !== 'string') {
        data = fileHash;
        formData.fileHash = this.hash(data);
        formData.file = {
          value: data,
          options: {
            filename: fileName
          }
        };
      } else {
        formData.fileHash = fileHash;
        formData.fileSize = 0;
      }
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/home/li/dev/stampery-node/index.iced",
            funcname: "Stampery.stamp"
          });
          _this.req.post(!_this.beta ? {
            baseUrl: 'https://stampery.herokuapp.com/api/v1'
          } : void 0, {
            url: '/stamp',
            formData: formData
          }, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return res = arguments[1];
              };
            })(),
            lineno: 37
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          var _ref, _ref1;
          err = err ? err : (_ref = res.body) != null ? _ref.err : void 0;
          return cb(err, (_ref1 = res.body) != null ? _ref1.fileHash : void 0);
        };
      })(this));
    };

    Stampery.prototype.get = function(id, cb) {
      var err, res, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/home/li/dev/stampery-node/index.iced",
            funcname: "Stampery.get"
          });
          _this.req.get("/stamp/" + id, __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return res = arguments[1];
              };
            })(),
            lineno: 42
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          var _ref;
          return cb(err, (_ref = res.body) != null ? _ref.stamp : void 0);
        };
      })(this));
    };

    Stampery.prototype.proof = function(id, cb) {
      var err, res, ___iced_passed_deferral, __iced_deferrals, __iced_k;
      __iced_k = __iced_k_noop;
      ___iced_passed_deferral = iced.findDeferral(arguments);
      (function(_this) {
        return (function(__iced_k) {
          __iced_deferrals = new iced.Deferrals(__iced_k, {
            parent: ___iced_passed_deferral,
            filename: "/home/li/dev/stampery-node/index.iced",
            funcname: "Stampery.proof"
          });
          _this.req.get("/stamp/" + id + "/proof", __iced_deferrals.defer({
            assign_fn: (function() {
              return function() {
                err = arguments[0];
                return res = arguments[1];
              };
            })(),
            lineno: 46
          }));
          __iced_deferrals._fulfill();
        });
      })(this)((function(_this) {
        return function() {
          var _ref;
          return cb(err, (_ref = res.body) != null ? _ref.proof : void 0);
        };
      })(this));
    };

    return Stampery;

  })();

  module.exports = Stampery;

}).call(this);

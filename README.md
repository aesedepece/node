Stampery
=======

[![NPM Package](https://img.shields.io/npm/v/stampery.svg?style=flat-square)](https://www.npmjs.org/package/stampery)

Notarize all your data using the blockchain. Generate immutable and valid globally proofs of existence, integrity and ownership of any piece of data.

## Get Started

```
npm install stampery
```

Using it in Node:

```javascript
var Stampery = require('stampery')

// 'beta' for testing, remove the argument for production
var stampery = new Stampery('55b6a36e87d90b030074d308', 'beta')

var data = new Buffer('Create a proof of this using the blockchain')
stampery.stamp('test.txt', data, {someother: 'extradata'}, function(err, fileHash) { })
stampery.get(hash, function(err, stamp) { })
stampery.proof(hash, function(err, proof) { })
```

You can get your API key [signing up](https://stampery.co/signup) and going to [your account](https://stampery.co/account).

## License

Code released under [the MIT license](https://github.com/stampery/js/blob/master/LICENSE).

Copyright 2015 Stampery

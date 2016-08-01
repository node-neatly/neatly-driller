# neatly-driller

Testing tools for [neatly](https://github.com/node-neatly/neatly).


# Install

`npm install --save neatly-driller`


# Usage

```javascript
const driller = require('neatly-driller');
const myModule = require('./my-module');

const init = driller.wrap(myModule);

describe('myProvider', ()=>{

	it('should have method a()', () => {
		return init((myProvider) => expect(myProvider.a).to.be.a.function());
	});

})
```


# Author

[@platdesign](https://twitter.com/platdesign)


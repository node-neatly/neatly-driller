'use strict';


module.exports = function(neatly) {

	return {
		wrap: function(module, mocks) {
			return function bootsrap(configHandler) {

				let deps = [module].concat(mocks||[]);

				let _module = neatly.module('wrapped', deps);
				if(configHandler) {
					_module.config(configHandler);
				}
				return neatly.init(_module);
			};
		}
	};

};

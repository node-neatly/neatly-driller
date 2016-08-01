'use strict';


module.exports = function(neatly) {

	return {
		wrap: function(module, mocks) {
			return function bootsrap(configHandler) {
				let _module = neatly.module('wrapped', [module, ...mocks||[]]);
				if(configHandler) {
					_module.config(configHandler);
				}
				return neatly.init(_module);
			};
		}
	};

};

define([
  'require', 'jquery', 'Store', 'Component'
], function (require) {
    var component = require('Component');
    var Test = component.create({
        name : 'Test',

        init : function() {
            console.log('test init>>>>>>>>>>>');
            this.watchingMe(['JobCategory', 'Major']);
            console.log('<<<<<<<<<<<test init');
        },

        shouldUpdate : function() {
            // 상태가 변경되었는지 판단하여 render를 다시할지 결정한다.
            // 객체 비교를 단순화 하기위해 immutable한 객체를 사용.
        	// return boolean
        },

        render : function() {
            console.log('test render()');
        },

    });

    return Test;
});

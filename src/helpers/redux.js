import ObjectAssign from 'object-assign';

export default { 
 
    getState(props) {

		return props.state ? props.state : {};
    },

    mapStateToProps(state, component = []) {

        var stateObj = {}, firstObj = {}, remainObj = {};

        if (component && component.length > 0 && state[component[0]]) {
            firstObj = state[component[0]];
        }
        
        if (component && component.length > 1) {
            
            component.map((val, i) => {
                
                if (i !== 0 && state[val]) {
                    remainObj[val] = state[val];
                } else if (i !== 0) {
                    remainObj[val] = {};
                }
            });
        }

        stateObj.state = ObjectAssign({}, firstObj, remainObj); //consider as state value in props object
        
		return stateObj;
	}

};

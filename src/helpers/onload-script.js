

const defaultProps = {
  src: '/js/onload-script.js',
  is_async: false,
  type: 'text/javascript',
  element: 'script'
};

module.exports = { 
 
    scriptOnload: function (onloadScript, props = defaultProps) {

        if (this.isLoadedScript(props.src, props.element))
            this.deleteExistScript(props.src, props.element);

        var script = document.createElement(props.element);
        //script.type = props.element;
        script.async = props.is_async;
        
        script.onload = function(){
          
            if (onloadScript) onloadScript();
            // remote script has loaded
        };
        
        script.src = props.src;
        document.body.appendChild(script);
    },

    isLoadedScript: function(lib, element) {

        return document.querySelectorAll(element+'[src="' + lib + '"]').length > 0
    },

    deleteExistScript: function(lib, element) {

        var c = document.querySelectorAll(element+'[src="' + lib + '"]');
        if (c[0]) c[0].parentElement.removeChild(c[0]);
        
        return c[0];
    }

};

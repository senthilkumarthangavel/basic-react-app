const PropTypes = require('prop-types');
const React = require('react');
const Toastr = require('toastr');

//reference url : https://github.com/CodeSeven/toastr

const propTypes = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};


class Toaster extends React.Component {
    constructor(props) {
        super(props);

        this.success = this.success.bind(this);
        this.warning = this.warning.bind(this);
        this.info = this.info.bind(this);
        this.error = this.error.bind(this);

    }
    componentDidMount(){
        //console.log('test')
    }
    success(msg) {
        toastr.options = propTypes;
        toastr.success(msg)
    }
    warning(msg) {
        toastr.options = propTypes;
        toastr.warning(msg)
    }
    info(msg) {
        toastr.options = propTypes;
        toastr.info(msg)
    }
    error(msg) {
        toastr.options = propTypes;
        toastr.error(msg)
    }
    
}

Toastr.propTypes = propTypes;

module.exports = Toaster;

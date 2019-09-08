import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper'
import jQuery from 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
const $ = jQuery;
import 'daterangepicker';

// Aqui el javascript asociado
$('#test').text('HolaMundo');

// Para manejar fechas
$("#picker").daterangepicker({
    startdate:[moment().subtract(29, "days")],
    enddate:moment(),
    range: {
        'today': [moment(), moment()],
        'yesterday': [moment().subtract(1, "days"), moment().subtract(1,"days")],
        'last 7 days': [moment().subtract(6, "days"), moment()],
        'last 30 days': [moment().subtract(29, "days"), moment()],
        'this month': [moment().startOf("month"),moment().endOf("month")],
        'last month': [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
    }
},function(start, end){
    $("#date").html(start.format('MMM DD, YY')+ ' - ' + end.format('MMM DD, YY ')) 
});

$("#date").html(moment().subtract(29, "days").format('MMM DD, YY')+ ' - ' + moment().format('MMM DD, YY '));
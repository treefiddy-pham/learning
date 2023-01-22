// sort an array of event objects in temporal order by a property called 'month'

// array of months for determining correct order of months
const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort( function comparison(a,b){
        // uses the indexOf() array method to return the position of month
        return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month);
    });
}

module.exports = sortByMonth;
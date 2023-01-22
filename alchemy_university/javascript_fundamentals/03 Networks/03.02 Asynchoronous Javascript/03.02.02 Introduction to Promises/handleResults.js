// example of async / await usage.
// given functions getResults, sendResults, and logResponse, the handleResults function 
// executes each in a specific order by using await to await for function to return promise.
 
const { getResults } = require('./lab');
const { sendResults } = require('./messaging');
const { logResponse, logError } = require('./logs');

async function handleResults(patientId) {
    // calls nested into one-liner. can also be stored into variables then passed to next 
    // function each step of the way.
    try {
        return logResponse( await sendResults(patientId, await getResults(patientId)));
    }
    // catch any exceptions and calls logError with it
    catch(ex) {
        logError(ex);
    }
}

module.exports = handleResults;
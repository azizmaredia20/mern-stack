import gConfig from '../../credentials.json';
// // Array of API discovery doc URLs for APIs used by the quickstart
// var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

/**
 *  Sign in the user upon button click.
 */
export const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
}
  
/**
 *  Sign out the user upon button click.
 */
export const handleSignoutClick = (event) => {
    gapi.auth2.getAuthInstance().signOut();
}
  
/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */

const CLIENT_ID = gConfig.web.client_id;
// const API_KEY = '<YOUR_API_KEY>';
const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/admin.directory.customer.readonly',
];

 export const googleAuthorize = () => {
    gapi.load('client:auth2', initClient);
 }


function initClient() {
  gapi.client.init({
    // apiKey: API_KEY,
    clientId: CLIENT_ID,
    // discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Value to find out if sign is done
    // updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    // authorizeButton.onclick = handleAuthClick;
    // signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
// function updateSigninStatus(isSignedIn) {
//   if (isSignedIn) {
//     authorizeButton.style.display = 'none';
//     signoutButton.style.display = 'block';
//     listMajors();
//   } else {
//     authorizeButton.style.display = 'block';
//     signoutButton.style.display = 'none';
//   }
// }


/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
// function appendPre(message) {
//   var pre = document.getElementById('content');
//   var textContent = document.createTextNode(message + '\n');
//   pre.appendChild(textContent);
// }

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
// function listMajors() {
//   gapi.client.sheets.spreadsheets.values.get({
//     spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
//     range: 'Class Data!A2:E',
//   }).then(function(response) {
//     var range = response.result;
//     if (range.values.length > 0) {
//       appendPre('Name, Major:');
//       for (i = 0; i < range.values.length; i++) {
//         var row = range.values[i];
//         // Print columns A and E, which correspond to indices 0 and 4.
//         appendPre(row[0] + ', ' + row[4]);
//       }
//     } else {
//       appendPre('No data found.');
//     }
//   }, function(response) {
//     appendPre('Error: ' + response.result.error.message);
//   });
// }

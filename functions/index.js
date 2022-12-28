const functions = require("firebase-functions");

const { openai_answer_query } = require( `./modules/openai` )
exports.marvin_answer_query = functions.https.onCall( openai_answer_query )
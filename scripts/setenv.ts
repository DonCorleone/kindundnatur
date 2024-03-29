const { writeFile } = require('fs');
const { argv } = require('yargs'); // read environment variables from .env file
require('dotenv').config(); // read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = `./src/environments/environment.custom.ts`; // we have access to our environment variables
// in the process.env object thanks to dotenv

const environmentFileContent = isProduction
  ? `export const environment = {
   production: true,
   NODE_VERSION: "${process.env?.['NODE_VERSION']}",
   SITE_ID: "${process.env?.['SITE_ID']}",
   API_KEY_NETLIFY: "${process.env?.['API_KEY_NETLIFY']}",
   URL: "${process.env?.['URL']}",
   START_NEXT_SEMESTER: "${process.env?.['START_NEXT_SEMESTER']}",
   NETLIFY_EMAILS_SECRET: "${process.env?.['NETLIFY_EMAILS_SECRET']}",
   EMAIL_SENDER: "${process.env?.['EMAIL_SENDER']}",
   SITE_NAME: "${process.env?.['SITE_NAME']}",
};`
  : `export const environment = {
   production: false,
   NODE_VERSION: "${process.env?.['NODE_VERSION']}",
   SITE_ID: "${process.env?.['SITE_ID']}",
   API_KEY_NETLIFY: "${process.env?.['API_KEY_NETLIFY']}",
   URL: "${process.env?.['URL']}",
   START_NEXT_SEMESTER: "${process.env?.['START_NEXT_SEMESTER']}",
   NETLIFY_EMAILS_SECRET: "${process.env?.['NETLIFY_EMAILS_SECRET']}",
   EMAIL_SENDER: "${process.env?.['EMAIL_SENDER']}",
   SITE_NAME: "${process.env?.['SITE_NAME']}",
};`; // write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.log(err);
  }
  console.log(`Wrote ${JSON.stringify(argv)} variables to ${targetPath}`);
});

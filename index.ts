let vsts = require('vso-node-api');

// your collection url
let collectionUrl = "https://zebfross.visualstudio.com/Car%20Website";

// ideally from config
let token: string = process.env.tfs_token;

let authHandler = vsts.getPersonalAccessTokenHandler(token); 
let connect = new vsts.WebApi(collectionUrl, authHandler);    


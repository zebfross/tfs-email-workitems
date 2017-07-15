///<reference path='typescript-node-definitions/node.d.ts'/>

let vsts = require('vso-node-api');

import VSSInterfaces = require("vso-node-api/interfaces/common/VSSInterfaces");
import * as wit from 'vso-node-api/WorkItemTrackingApi';
import * as iWit from 'vso-node-api/interfaces/WorkItemTrackingInterfaces';

// your collection url
let collectionUrl = "https://zebfross.visualstudio.com/DefaultCollection";

// ideally from config
let token: string = process.env.tfs_token;

console.log("token: " + token);
let authHandler = vsts.getPersonalAccessTokenHandler(token);
let connection = new vsts.WebApi(collectionUrl, authHandler);

let vstsWit: wit.IWorkItemTrackingApi = connection.getWorkItemTrackingApi();

async function createWorkItem(title: string, description: string) {
    let wijson: VSSInterfaces.JsonPatchDocument = [
        { "op": "add", "path": "/fields/System.Title", "value": title },
        { "op": "add", "path": "/fields/System.Description", "value": description }];
    let project: string = "Car Website";
    let witype: string = "User Story";
    return vstsWit.createWorkItem(null, wijson, project, witype);
}

module.exports = {
    createWorkItem: createWorkItem
};

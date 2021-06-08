const { maxInt, detailsText, buttonText, buttonUrl, updateInterval, clientId } = require('./settings.json');
const rpc = require("discord-rpc");
const client = new rpc.Client({transport: 'ipc'})

function updateRPC() {
    var randomInt = Math.floor(Math.random() * maxInt);
    try{
        client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `${detailsText}`,
            assets: {
                large_image: `himehowa${randomInt}`,
                small_image: `heart`,
            },
            buttons: [{label: `${buttonText}`, url: `${buttonUrl}`}]
}})} catch(err) {
        console.warn(err);
    }
}

var randomInt = Math.floor(Math.random() * maxInt); //cannot be more than: 300, must be >= amount of resources uploaded in aplication/rich presence
client.once('ready', () => {
    console.log('Status now active!');
    client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity: {
        details: `${detailsText}`,
        assets: {
            large_image: `himehowa${randomInt}`,
            small_image: `heart`,
        },
        buttons: [{label: `${buttonText}`, url: `${buttonUrl}`}]
}})})

setInterval(() => {
    updateRPC();
  }, updateInterval); //Discord ratelimits it to 1 request/15000ms
client.login({clientId: `${clientId}`}).catch(console.error);
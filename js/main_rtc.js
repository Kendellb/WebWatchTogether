const { default: AgoraRTM } = require("agora-rtm-sdk");

let APP_ID = "3736d2c40d9b4e72bd704881f8cc53c4"



let token = null;
let uid = sessionStorage.getItem('uid')
if(!uid){
    String(Math.floor(Math.random() * 10000))
    sessionStorage.setItem('uid',uid)
}

let client;
let channel;



const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let roomId = urlParams.get('room')

if(!roomId){
    window.location = 'lobby.html'
}

let localTracks = []
let remoteUsers = {}

let joinRoomInit = async () => {
    client = AgoraRTC.createClient({mode:'rtc',codec:'vp8'})
    await client.join(APP_ID, roomId, token, uid)
    joinStream()
}

let joinStream = async () => {
    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = 
}

joinRoomInit()
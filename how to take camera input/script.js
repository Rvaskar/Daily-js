async function openCam(){
    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    video.srcObject = stream;
}
// async function closeCam(){
//     const stream = await navigator.mediaDevices.getUserMedia({video: false});
//     video.srcObject = stream;
// }
async function closeCam(){
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => {
        track.stop();
    });

    video.srcObject = null;
}
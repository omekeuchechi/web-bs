// const video = document.getElementById('video');
// const result = document.getElementById('result');

// // Load face detection models
// Promise.all([
//     faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
//     faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//     faceapi.nets.faceRecognitionNet.loadFromUri('/models')
// ]).then(startVideo);

// function startVideo() {
//     navigator.getUserMedia(
//         { video: {} },
//         stream => video.srcObject = stream,
//         err => console.error(err)
//     );
// }

// video.addEventListener('loadeddata', () => {
//     const detections = faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions({ minConfidence: 0.5 }));
//     const faceLandmarks = faceapi.computeFaceLandmarks(video, detections);
//     const faceDescriptors = faceapi.computeFaceDescriptors(video, detections);

//     detections.forEach((detection, i) => {
//         const canvas = document.createElement('canvas');
//         canvas.width = video.width;
//         canvas.height = video.height;
//         faceapi.draw.drawDetections(canvas, [detection]);
//         faceapi.draw.drawFaceLandmarks(canvas, [faceLandmarks[i]]);
//         result.appendChild(canvas);
//     });
// });

const video = document.getElementById('video');
const result = document.getElementById('result');

// Load face detection models
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models')
]).then(startVideo);

function startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => video.srcObject = stream)
        .catch(err => console.error(err));
}

video.addEventListener('loadeddata', async () => {
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(result, displaySize);

    setInterval(async () => {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        result.innerHTML = faceapi.createCanvasFromMedia(video).outerHTML;
        const canvas = result.querySelector('canvas');
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    }, 100);
});

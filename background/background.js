try {
    self.importScripts('firebase/firebase-app-10.7.2-compat.js', 'firebase/firebase-firestore-10.7.2-compat.js');

    const firebaseConfig = {
        apiKey: "AIzaSyAc-BKsoJPUItZQmaaDOzS5UXAHYGs8AhA",
        authDomain: "job-data-extractor.firebaseapp.com",
        projectId: "job-data-extractor",
        storageBucket: "job-data-extractor.appspot.com",
        messagingSenderId: "100133199966",
        appId: "1:100133199966:web:760805054efd56e82fd4cf"
    };

    // Init firebase
    firebase.initializeApp(firebaseConfig);

    // Init firestore service
    const projectFirestore = firebase.firestore();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;

    // Listener
    chrome.runtime.onMessage.addListener(async function (request, sender, sendResponse) {
        if (request.action === 'post') {
            try {
                const res = await projectFirestore.collection('jobs').doc(request.data.id).set(request.data);
                console.log(res)
            } catch (err) {
                console.log(err.message);
            }
        }
    });

} catch (err) {
    console.log(err);
}
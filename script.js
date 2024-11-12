document.getElementById('openPopupButton').addEventListener('click', () => {
    const videoURL = document.getElementById('videoURL').value;

    if (videoURL) {
        // Extraire l'ID vidéo de l'URL
        const videoID = getYouTubeVideoID(videoURL);
        if (videoID) {
            // Ouvrir une popup avec l'iframe de la vidéo YouTube
            openVideoPopup(videoID);
        } else {
            alert('URL invalide ou vidéo non trouvée.');
        }
    } else {
        alert('Veuillez entrer une URL.');
    }
});

// Fonction pour extraire l'ID vidéo à partir de l'URL YouTube
function getYouTubeVideoID(url) {
    const regex = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/)([\w-]+))|(?:https?:\/\/youtu\.be\/([\w-]+))/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;
}

// Fonction pour ouvrir une popup avec la vidéo YouTube
function openVideoPopup(videoID) {
    const width = 640;
    const height = 360;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    // Créer la fenêtre popup
    const popup = window.open(
        `https://www.youtube.com/embed/${videoID}`,
        'Video Popup',
        `width=${width},height=${height},top=${top},left=${left}`
    );

    // Attendre que la vidéo soit prête dans la popup
    popup.document.write(`
        <h2>Regarder la vidéo</h2>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>
        <br>
        <button onclick="downloadVideo('${videoID}')">Télécharger la vidéo</button>
    `);
}

// Fonction pour simuler le téléchargement de la vidéo (par exemple via une API de téléchargement)
function downloadVideo(videoID) {
    // Remplace ceci par une logique réelle pour obtenir le lien de téléchargement
    const downloadLink = `https://yt5s.biz/fr/youtube-to-mp4?url=https://www.youtube.com/watch?v=${videoID}`;

    // Ouvrir un nouvel onglet pour télécharger la vidéo
    window.open(downloadLink, '_blank');
}

function openVideoPopup(videoID) {
    const width = 800;
    const height = 600;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);

    // Ouverture de la popup
    const popup = window.open(
        '',
        'Video Popup',
        `width=${width},height=${height},top=${top},left=${left}`
    );

    if (popup) {
        // Contenu HTML de la popup
        popup.document.write(`
            <html>
            <head>
                <title>Visionneuse YouTube</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                    iframe { width: 100%; height: 60%; border: none; }
                    button { margin-top: 15px; padding: 10px 20px; font-size: 16px; cursor: pointer; }
                    a { display: inline-block; margin-top: 20px; padding: 10px 20px; font-size: 16px; color: white; background-color: #007bff; text-decoration: none; border-radius: 5px; }
                    a:hover { background-color: #0056b3; }
                </style>
            </head>
            <body>
                <h2>Regarder la vidéo</h2>
                <iframe src="https://www.youtube.com/embed/${videoID}" frameborder="0" allowfullscreen></iframe>
                <br>
                <!-- Lien pour télécharger la vidéo -->
                <a href="https://yt5s.biz/fr/youtube-to-mp4?url=https://www.youtube.com/watch?v=${videoID}" target="_blank">Télécharger la vidéo</a>
            </body>
            </html>
        `);
        popup.document.close();
    } else {
        alert("Veuillez autoriser les popups pour cette action.");
    }
}

document.getElementById('convertButton').addEventListener('click', async () => {
    const videoURL = document.getElementById('videoURL').value;
    if (videoURL) {
        document.getElementById('result').innerText = 'Redirection en cours...';

        // Rediriger l'utilisateur vers le site de conversion
        const redirectUrl = `https://yt5s.biz/fr/youtube-to-mp4?url=${encodeURIComponent(videoURL)}`;
        
        // Afficher un message de redirection ou un lien
        document.getElementById('result').innerHTML = `Si la page ne s'ouvre pas automatiquement, cliquez ici : <a href="${redirectUrl}" target="_blank">Redirection vers la conversion</a>`;
        
        // Ouvrir le site de conversion dans un nouvel onglet
        window.open(redirectUrl, "_blank");
    } else {
        alert('Veuillez entrer une URL valide.');
    }
});

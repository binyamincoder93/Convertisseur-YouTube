document.getElementById('convertButton').addEventListener('click', async () => {
    const videoURL = document.getElementById('videoURL').value;
    if (videoURL) {
        document.getElementById('result').innerText = 'Conversion en cours...';

        // Redirige l'utilisateur vers le site de conversion
        const redirectUrl = `https://youtube.techloq.com/?url=${encodeURIComponent(videoURL)}`;
        
        // Afficher un message de redirection ou un lien
        document.getElementById('result').innerHTML = `Redirection vers le site de conversion... <a href="${redirectUrl}" target="_blank">Cliquez ici si la page ne s'ouvre pas automatiquement.</a>`;
        
        // Ouvrir le site de conversion dans un nouvel onglet
        window.open(redirectUrl, "_blank");
    } else {
        alert('Veuillez entrer une URL valide.');
    }
});

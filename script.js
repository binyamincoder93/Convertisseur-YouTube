document.getElementById('convertButton').addEventListener('click', async () => {
    const videoURL = document.getElementById('videoURL').value;
    if (videoURL) {
        document.getElementById('result').innerText = 'Conversion en cours...';

        // Placeholder pour l'appel API. Remplace cette section avec ta logique API.
        try {
            // Simulation d'appel API (à remplacer par la vraie URL et logique)
            const response = { ok: true, downloadLink: 'https://exemple.com/telechargement' };

            if (response.ok) {
                document.getElementById('result').innerHTML = `<a href="${response.downloadLink}" target="_blank">Télécharger la vidéo</a>`;
            } else {
                document.getElementById('result').innerText = 'Erreur lors de la conversion.';
            }
        } catch (error) {
            console.error('Erreur:', error);
            document.getElementById('result').innerText = 'Une erreur est survenue.';
        }
    } else {
        alert('Veuillez entrer une URL valide.');
    }
});

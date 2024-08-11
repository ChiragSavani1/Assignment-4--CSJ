document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'RyfjGCyeKigYkygfLmaEt36epnd9SDREdNdmensN'; 
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageElement = document.getElementById('apodImage');
            const titleElement = document.getElementById('apodTitle');
            const descriptionElement = document.getElementById('apodDescription');

            imageElement.src = data.url;
            titleElement.textContent = data.title;
            descriptionElement.textContent = data.explanation;

            if (data.media_type === 'video') {
                imageElement.style.display = 'none';
                const videoElement = document.createElement('iframe');
                videoElement.src = data.url;
                videoElement.width = '640';
                videoElement.height = '360';
                videoElement.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                videoElement.allowFullscreen = true;
                document.querySelector('.container').appendChild(videoElement);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('apodTitle').textContent = 'Error';
            document.getElementById('apodDescription').textContent = 'Unable to load the picture. Please try again later.';
        });
});

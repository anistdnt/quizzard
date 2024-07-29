window.onload = function() {
    document.getElementById('download').addEventListener('click', () => {
        const doc = document.getElementById('content');
        var opt = {
            margin:       [0.5, 0.5, 0.5, 0.5], // Increased margin for better layout
            filename:     'answer.pdf', // Filename of the downloaded PDF
            image:        { type: 'jpeg', quality: 0.98 }, // Image type and quality
            html2canvas:  { 
                scale: 2, // Scaling factor for better resolution
                useCORS: true, // Use CORS to load images from external domains
                scrollX: 0,
                scrollY: 0,
                windowWidth: document.documentElement.scrollWidth,
                windowHeight: document.documentElement.scrollHeight
            },
            jsPDF:        { 
                unit: 'in', // Units for measurement
                format: 'letter', // Page format (letter size)
                orientation: 'portrait' // Page orientation (portrait)
            }
        };
        html2pdf().from(doc).set(opt).save();
    });
}

window.onload = function() {
    document.getElementById('download').addEventListener('click', () => {
        const doc = document.getElementById('content');
        const uname = document.getElementById("result-page-username").innerHTML;
        const level = document.getElementById("result-page-qtype").innerHTML;
        const domain = document.getElementById("result-page-domain").innerHTML;


        var opt = {
            margin:       [0.5, 0.5, 0.5, 0.5], // Increased margin for better layout
            filename:     `${uname}_${domain}_${level}_answersheet.pdf`, // Filename of the downloaded PDF
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
                format: 'a4', // Page format (letter size)
                orientation: 'portrait' // Page orientation (portrait)
            }
        };
        html2pdf().from(doc).set(opt).save();
    });
}

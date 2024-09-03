document.getElementById('analyzeButton').addEventListener('click', async () => {
    const text = document.getElementById('inputText').value.trim();
    
    if (!text) {
        alert('Please enter some text.');
        return;
    }

    try {
        const response = await fetch('https://language.googleapis.com/v1/documents:analyzeSentiment?key=AIzaSyB1K9sihDyjnesjm5mpmlTBJZ_GuVy4nqc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                document: {
                    type: 'PLAIN_TEXT',
                    content: text,
                }
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        document.getElementById('result').textContent = JSON.stringify(result, null, 2);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred. Please try again.';
    }
});

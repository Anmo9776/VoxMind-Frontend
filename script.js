async function getAnswer() {
    const question = document.getElementById('question').value;

    if (!question) {
        alert("Please type a question!");
        return;
    }

    // Show loading message
    document.getElementById('loading').style.display = "block";
    document.getElementById('response').style.display = "none";
    
    try {
        // Replace this with your own API URL
        const apiUrl = 'https://ai-module.apis-bj-devs.workers.dev/?text=' + encodeURIComponent(question) + '&model=Llama 3.1-8B';
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Hide loading message
        document.getElementById('loading').style.display = "none";
        
        // Show the response
        document.getElementById('response').style.display = "block";
        document.getElementById('response').innerHTML = data.response;
    } catch (error) {
        document.getElementById('loading').style.display = "none";
        document.getElementById('response').style.display = "block";
        document.getElementById('response').innerHTML = "Sorry, there was an error processing your request.";
    }
}

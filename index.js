// look back at the <readme.md> file for some hints //
// working API key //

    const form = document.getElementById('gif-form');
    const gifContainer = document.getElementById('gif-container');
    const removeBtn = document.getElementById('remove-images');

    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevents form from submitting

        // Get search query from input field
        const searchQuery = document.getElementById('search').value.trim();

        // Check if query is not empty
        if(!searchQuery) {
            alert("Please enter a search term");
            return;
        }

        const giphyApiKey = "imd5wVIZLxIIGPcdBa34qmIbGy5i4q5A";    
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchQuery}&limit=10`;

        try {
            // Use Axios to get data from API
            const response = await axios.get(url);
            

            // Clear previous GIFs
            gifContainer.innerHTML = "";

            const gifs = response.data.data; // Array of GIF objects
            const firstRow = document.createElement("div");
            const secondRow = document.createElement("div");

            firstRow.classList.add("row", "first");
            secondRow.classList.add("row", "second");
            
            // 5 GIFs for 1st Row
            for(let i=0; i < 5; i++) {
                const img = document.createElement('img');                         
                img.src = gifs[i].images.fixed_width.url;  // Create an element and set its source to the GIF URL   
                firstRow.appendChild(img);
            }
            // 5 GIFs for 2nd Row
            for(let i=5; i < 10; i++) {
                const img = document.createElement('img');                         
               img.src = gifs[i].images.fixed_width.url;  // Create an element and set its source to the GIF URL  
               secondRow.appendChild(img);
            }
              // append both rows to the parent <div> //
            gifContainer.appendChild(firstRow);
            gifContainer.appendChild(secondRow); 
   

            function removeGifs() {
                gifContainer.innerHTML = "";
                gifContainer.innerHTML = "...GIF here...";
            }

            // Event listener for removing images
            removeBtn.addEventListener('click', removeGifs);  // Clears all images in the container
            
        } catch(error) {
            console.error('Error fetching the GIF:', error);
        }

    });












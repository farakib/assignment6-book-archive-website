document.getElementById('error-message').style.display = 'none';

const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value; 
    // console.log(searchText);
    searchField.value = '';
    // document.getElementById('error-message').style.display = 'none';
    if(searchText === ''){

    }else{
        const url =`https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs))
        .catch(error => displayError(error));
    }       
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}



const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                 <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                 <div class="card-body">
                 <h5 class="card-title">Book name: ${book.title}</h5>
                 <p class="card-text">Author:${book.author_name}</p>
                 <p class="card-text">First publish year: ${book.first_publish_year}</p>
                 <p class="card-text">${book.text[0]}</p>
                 <p class="card-text">publisher name: ${book.publisher}</p>
                 <p class="card-text">Publish date: ${book.publish_date}</p>
                </div>
         </div>
        `;
        searchResult.appendChild(div);
    })
   
}



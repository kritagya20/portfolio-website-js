try {
    const blogContainer =  document.querySelector('.blog-posts'); //selecting the parent of  all blog container to append different blog data in it

    //GENERATING-BLOGS
    blogs.forEach(blog => {
        const tr = document.createElement('span'); //creating element
        //wrapping actual data in html tags through js variable
        const Content = `     
            <li class="post-card">
                <article>
                    <a href="${blog.link}" target="_blank" class="post-card-link">
                        <div class="post-card-meta">
                            <time class="post-card-meta-date">${blog.metaData}</time>
                        </div>
                        <h2 class="post-card-title">${blog.heading}</h2>
                        <p class="post-card-description">${blog.description}...</p>
                    </a>
                </article>
            </li>
        `;
        tr.innerHTML = Content; //adding variable (containg data) in the html element created before  
        blogContainer.appendChild(tr); //appending the element in DOM 
    });
}catch (e){
    console.log(`Error caught fetching the blog data: ${e}`);
}

try{
    //INTERSECTION OBSERVER
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
        return;
        } else {
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
        }
    })
    }, appearOptions);

    faders.forEach(fader => {
    appearOnScroll.observe(fader);
    });
}catch (e){
    console.log(`Error caught in intersection obeserver of blogs archive page: ${e}`);
}

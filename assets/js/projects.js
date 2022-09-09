const projectContainer =  document.querySelectorAll('.project-card'); //selecting all project containers to append different porject data in it

projects.forEach((project) => {
    projectContainer.forEach((container) => {
        if (container.getAttribute('id') == project.id) {
            container.innerHTML = `
                <div class="project-content">
                    <!-- CARD-HEADING -->
                    <div class="head-container">
                        <p class="project-overline">Featured Project</p>
                        <h3 class="project-title">
                            <a href="${project.githubLink}" target="_blank">${project.heading}</a>
                        </h3>
                        <!-- CARD-DESCRIPTION -->
                        <div class="project-description">
                            <p>${project.description}</p>
                        </div>
                        <!-- CARD-TECHNOLOGY-LIST -->
                        <ul class="project-tech-list">
                            <li>${project.techList.tl1}</li>
                            <li>${project.techList.tl2}</li>
                            <li>${project.techList.tl3}</li>
                            <li>${project.techList.tl4}</li>
                            <li></li>
                        </ul>
                        <!-- CARD-GIT-LINK -->
                        <div class="project-links">
                            <a href="${project.githubLink}" aria-label="GitHub Link"
                                target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-github">
                                    <title>GitHub</title>
                                    <path
                                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- CARD-IMAGE -->
                <div class="project-image-block">
                    <figure class="project-figure">
                        <img class="project-image" src="${project.image}">
                    </figure>
            
                </div>
            `;
        } else {
            return;
        }    
    });
});

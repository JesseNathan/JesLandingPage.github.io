  let suggestHTML = ''

  Texts.forEach((text) => {
    suggestHTML += `
    <a href="#">
    <div class="reference-item">
        <div class="card">
            <div class="img-top">
                <img src="${text.image}" alt="" style="width: 210.5px; height: 131.56px;">
            </div>
            <div class="card-body">
                <div class="card-text">
                    <div class="mb-2" style="margin-bottom: .5rem;">
                        <span class="card-date">${text.date.toString()}</span> 
                        <p>${text.paragraph}</p>
                    </div>
                    <div class="read-more">
                        <p>Load More</p>
                        <i class="fa-solid fa-circle-chevron-right" style="color: #63E6BE;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</a>
                
    `
  })

  document.querySelector('.content-card').innerHTML = suggestHTML
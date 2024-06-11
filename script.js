//*efek stinky
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const stickyElement = document.querySelector('.position-stinky');

  if (window.scrollY >= 0) {
      stickyElement.classList.add('stuck');
  } else {
      stickyElement.classList.remove('stuck');
  }
});
//*end efek stinky


//animasi navbarScroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {   
    navbar.classList.remove('scrolled');
  }
});
//*end animasi navbarScroll

  //*dark-mode
  const toggleBtn = document.querySelector('.toggle-mode');
  
  toggleBtn.addEventListener('click', function(){
    document.body.classList.toggle('dark-mode');
  })

  const toggleBtn2 = document.querySelector('.toggle-mode2');
  
  toggleBtn2.addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
  //*end dark-mode 
  })

  //*navbar-toggle
    const bars = document.getElementById('navbar-toggle'),
    closeBtn = document.getElementById('close-btn'),
    menu = document.querySelector('.menu'),
    dropdownLinks = document.querySelector('.dropdown-link')

    //menampilkan menu ketika tombol bar diklik
    bars.addEventListener('click', () => {
      menu.classList.add('active');
    })

    //menyebunyikan dropdown menu
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('active');
    })

    //mengatur dropdown menu
    document.querySelectorAll('.dropdown-link').forEach((element) => {
      element.addEventListener('click', (event) => {
          event.preventDefault(); 
          let dropdownBars = element.nextElementSibling;
  
          document.querySelectorAll('.dropdown-bars').forEach((content) => {
              if (content !== dropdownBars) { 
                  content.style.display = 'none';
              }
          });

          dropdownBars.style.display =
           dropdownBars.style.display === 'block' ? 'none' : 
           'block';

      }); 
  });


  //*end navbar-toggle

  //*dropdown navbar
  document.querySelectorAll('.dropdown-toggle').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); //mencegah perilaku default anchor tag dimana untuk mencegah halaman berubah atau menggulir ke tempat lain.

        // Dapatkan dropdown terkait dengan elemen yang di-klik
        let dropdown = element.nextElementSibling;

        // Tutup semua dropdown kecuali dropdown yang di-klik
        document.querySelectorAll('.dropdown-content').forEach((content) => {
            if (content !== dropdown) { 
                content.style.display = 'none';
            }
        });

        // Toggle display untuk dropdown yang di-klik
        dropdown.style.display =
         dropdown.style.display === 'block' ? 'none' : 'block';
    }); 
});

// Tutup semua dropdown jika area di luar dropdown diklik
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach((dropdown) => {
            dropdown.style.display = 'none';
        });
    }
});
//*end dropdown navbar

//*sidebar
document.querySelectorAll('#go-explore').forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('sidebar').style.width = '280px';
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block'
  
  });
  
  document.getElementById('close-sidebar').addEventListener('click', () => {
    document.getElementById('sidebar').style.width = '0';
    document.getElementById('popup-overlay').style.display = 'none'
  });
  
  // Tutup semua sidebar jika area di luar sidebar diklik
  document.addEventListener('click', (event) => {
    if (!event.target.closest('#sidebar') && !event.target.closest('#go-explore')) {
      document.getElementById('sidebar').style.width = '0';
      document.getElementById('popup-overlay').style.display = 'none'
    }
  });
})

//*end sidebar
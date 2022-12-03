    <footer>
        <div class="container">
            <div class="footer-wrap">
                <div class="frst-ftr">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="footer-logo">
                            <img src="images/logo1.svg" alt="">
                        </div>
                        <div class="quick-links quick-links-scnd">
                                 <ul>
                                     <li><a href="">About Us</a></li>
                                     <li><a href="contact.php">Contact Us</a></li>
                                 </ul>
                             </div>
                    </div>
                  
                    <div class="col-lg-6">
                        <div class="social-links">
                            <ul>
                                <li><a href=""><iconify-icon icon="bxl:facebook"></iconify-icon></a></li>
                                <li> <a href=""><iconify-icon icon="bxl:instagram-alt"></iconify-icon></a></li>
                                <li><a href=""><iconify-icon icon="bxl:linkedin"></iconify-icon></a></li>
                                <li> <a href=""><iconify-icon icon="bxl:youtube"></iconify-icon></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                 <hr class="footer-line">
                 <div class="copy-right">
                     <div class="row">
                         <div class="col-lg-9">
                             <div class="wrap01">
                                 <p> @2022 wewoo. All Rights Reserved.</p>
                                 <p>Developed by <a href="https://www.crantia.com/" target="_blank">Crantia Technologies</a></p>
                                 <!--  -->
                             </div>
                             <div class="wrap02">
                                 <a href="terms&conditions.php">Terms & Conditions</a>
                                 <a href="privacy_policy.php">Privacy Policy</a>
                             </div>
                         </div>
                         <div class="col-lg-3">
                             <div class="quick-links quick-links-frst">
                                 <ul>
                                     <li><a href="">About Us</a></li>
                                     <li><a href="contact.php">Contact Us</a></li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    </footer> 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
    <script src="https://code.iconify.design/iconify-icon/1.0.0-beta.3/iconify-icon.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  </script>


    <script>
        const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  //Toggle Nav
  burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-active');
    
    //Animate Links
    navLinks.forEach((link, index)=>{
      if(link.style.animation){
        link.style.animation = ''
      }else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;

      }
    });
    burger.classList.toggle('toggle');
  });
}

navSlide();
    </script>
    <script>
        var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});
    </script>
   
  </body>
</html>

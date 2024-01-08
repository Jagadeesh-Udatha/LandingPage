document.addEventListener("DOMContentLoaded", function () {

  let isPageVisible = true;
  let scrollInterval;

  let currentPosition = 0;
  const duration = 1500;
  const interval = 3000;
  var totalImages =0;

  var imageContainerWidth = 0;
  
  var isClicked = false;
  var changeSecondCarousel = document.getElementById("carousel-id");
  var imagesScroll = document.querySelector(".carousel");

  changeSecondCarousel.addEventListener("click", function () {
    if(!isClicked) {
      changeSecondCarousel.classList.remove("some-carousel");
      changeSecondCarousel.classList.add("carousel");
      imagesScroll = document.querySelector(".carousel");
      changeSecondCarousel.innerHTML =
      `
      <div class="div-all">
        <div class="images-para">
          <img src = "k-letter.png" alt ="letter-k"> KNOWLEDGE
        </div>
        <p> "Knowledge" represents the foundational understanding and expertise that individuals gain through comprehensive training at Kodnest. It emphasizes in-depth learning and mastery of various domains.</p>
      </div>
      <div class="div-all">
        <div class="images-para">
          <img src = "icons8-o-50 (1).png" alt ="letter-o"> OPPORTUNITIES 
        </div>
        <p> "Opportunities" signify the doors that open for individuals who acquire skills at Kodnest. This includes career opportunities, project collaborations, and chances to contribute to the tech industry.</p>
      </div>
      <div class="div-all">
        <div class="images-para">
          <img src = "icons8-d-50.png" alt ="letter-d"> DREAMS 
        </div>
        <p> "Dreams" encapsulate the aspirations and goals of individuals undergoing training at Kodnest. The institute aims to empower students to realize their professional dreams by equipping them with necessary skills and knowledge.</p>
      </div>
      <div class="div-all">
        <div class="images-para">
          <img src = "icons8-n-50.png" alt ="letter-n"> NURTURED 
        </div>
        <p> "Nurtured" reflects the supportive and conducive learning environment provided to students at Kodnest. It underscores the institute's commitment to fostering growth, skill development, and a sense of community.</p>
      </div>
      <div class="div-all">
        <div class="images-para">
          <img src = "icons8-e-50.png" alt ="letter-e"> EXCELLENCE 
        </div>
        <p> Kodnest emphasizes a commitment to "Excellence" in all aspects of training. This includes delivering high-quality education, staying updated with industry standards, and cultivating a culture of continuous improvement.</p>
      </div> 
      <div class="div-all">
        <div class="images-para">
          <img src = "icons8-s-50.png" alt ="letter-s"> SUCCESS 
        </div>
        <p> "Success" reflects the ultimate goal for individuals completing their training at Kodnest. This could involve successful entry into the workforce, achieving career milestones, and making meaningful contributions.</p>
      </div>
      <div class="div-all">
        <div class="images-para">
          <img src = "icons8-t-50.png" alt ="letter-t">TRASNFORMATION  
        </div>
        <p> Kodnest views "Transformation" as a holistic change that individuals undergo during their training journey. This includes a transformation in skills, mindset, and readiness to adapt to changing environments.</p>
      </div>
      `;
    scrollInterval = setInterval(scrollImages, interval);

      isClicked = true;
      totalImages = document.querySelectorAll(".carousel > div").length;

      imageContainerWidth = 100 / totalImages;
      } else {
        changeSecondCarousel.classList.remove("carousel");
        changeSecondCarousel.classList.add("some-carousel");
      // imagesScroll = document.querySelector(".some-carousel");

        changeSecondCarousel.innerHTML =  `
          <div class="before-hover">
            <h1>7 Letters of KodNest !</h1>
            <p> You Must Know the meaning </p>
            <p>Click on the box to see</p>
            <img style = "height: 40px;
            animation: pop-up-down 1s infinite;" src = "icons8-click-30.png" alt = "arrow-up">
          </div>
        `;
        isClicked = false;
        totalImages = 0;
        imageContainerWidth = 0;
        clearInterval(scrollInterval);
        currentPosition = 0;
        // imagesScroll.style.transition = `transform ${duration}ms ease-in-out`;
        imagesScroll.style.transform = `translateX(${currentPosition}%)`;
        imagesScroll.style.transition = "none";
        
      }
    
  })
  
  
  
  function scrollImages() {
    console.log("scrolling");
    console.log(currentPosition);
    console.log(imageContainerWidth);
    if (isPageVisible) {
      currentPosition = (currentPosition + imageContainerWidth) % 100;
      imagesScroll.style.transition = `transform ${duration}ms ease-in-out`;

      imagesScroll.style.transform = `translateX(-${currentPosition}%)`;
      if (Math.abs(currentPosition) < 0.001) {
        imagesScroll.style.transition = "none";
      }
    }
  } 
    document.querySelectorAll(".carousel > div").forEach(function (imageContainer) {
      imageContainer.style.width = `${imageContainerWidth}%`;
    });


  function addOptionListeners() {
    var qualityHTML = document.getElementById("quality");
    var placementsHTML = document.getElementById("placements");
    var preparationHTML = document.getElementById("preparation");

    var editableHTML = document.querySelector(".info-about-clicked");

    qualityHTML.addEventListener("click", function() {
      updateActiveOption(qualityHTML);
      editableHTML.innerHTML = 
      `
        <p>We bring to you the best experience and state of the art infrastructure to provide both Offline and Online modes of training.</p>
      `;
    })

    placementsHTML.addEventListener("click", function() {
      updateActiveOption(placementsHTML);
      editableHTML.innerHTML = 
      `
        <p>There is no reason why a company would not hire a trained student, we will get you Unlimited Placements opportunities to show case your skill and find your first dream job.</p>
      `;
    })

    preparationHTML.addEventListener("click", function() {
      updateActiveOption(preparationHTML);
      editableHTML.innerHTML = 
      `
        <p>Offline classes, Mock interviews and mock tests. Live projects and many small projects. One-on-one mentorship and transparency at all levels.</p>
      `;
    })
    function updateActiveOption(activeOption) {
      qualityHTML.classList.remove("active");
      placementsHTML.classList.remove("active");
      preparationHTML.classList.remove("active");

      activeOption.classList.add("active");
    }
  }
  var changeTheCarouselContext = document.querySelector(".clickable-carousel");
  changeTheCarouselContext.addEventListener("mouseenter", function() {
    changeTheCarouselContext.innerHTML = `
      <div class="options-3">
        <p id="quality"  class="quality-p">Quality</p>
        <p id="placements" class="placements-p">Placements</p>
        <p id="preparation" class="preparation-p">Preparation</p>
      </div>
      <div class="info-about-clicked">
        <p>We bring to you the best experience and state of the art infrastructure to provide both Offline and Online modes of training.</p>
      </div>
    `;
    addOptionListeners();
  })

  changeTheCarouselContext.addEventListener("mouseleave" , function() {
    changeTheCarouselContext.innerHTML = `
    <div class="before-hover">
      <h1>Your Dream Platform !</h1>
      <p> You Should Know Why ?</p>
      <p>Hover over the box to see </p>
      <img class="arrow-up-class" src = "icons8-arrow-up-48.png" alt = "arrow-up">
    </div>
    `;
  })
})
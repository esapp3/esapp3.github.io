<html> 
  <?php 
  include "head.php";
  ?>
  <body>
    <div class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"><span><img src="/img/erin-tree.png"></span></a>
            </div>
            <div class="navbar-collapse collapse" id="navbar-ex-collapse">
                <!-- <ul class="nav navbar-nav navbar-left left-section"> -->
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="/">Projects</a>
                    </li>                       
                    <li>
                        <a href="/port/resume.pdf">Resume</a>
                    </li>
                    <li class="active">
                        <a href="/templates/about.php">About Me</a>
                    </li>                                            
              </ul>
            </div>
        </div>
    </div>
    <section class="text">
      <div class="container"> 
        <div class="about">
          <div class="row">
            <div class="col-md-4"> 
              <img src="/img/erin.jpg" class="img-responsive">
            </div>
            <div class="col-md-8"> 
              <h3> About Erin Sapp </h3>
              <p> My name is Erin, and I am a senior at Georgia Tech graduating with a 
                BS in Computational Media.  As a designer, I value beautiful, clean designs 
                and effortless user experiences.  As a developer, I enjoy working with emerging
                technologies and creating innovative projects that have a positive impact.  
                I am especially passionate about bridging the gap between the creative and 
                technical world by applying my wide range of skills to projects.
                I am goal oriented, organized, learn quickly, and am always ready for a challenge. </p>
              <p> I was born and raised in Atlanta and attend a Greek Orthodox Church.  
                 In my spare time I enjoy reading, cutting-edge ideas, comedy, and food.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br> <br>
    <section class="text">
      <div class="container">   
        <!-- <hr class="star-primary"> -->
        <div class="row">
          <div class="col-md-4"> 
          </div>
          <div class="col-md-4"> 
          </div>
          <div class="col-md-4"> 
            <!-- Contact Me -->
          </div>
        </div>
    </div>
    </section>
  </body>
  <?php 
  include "footer.php";
  include "scripts.php";
  ?> 
</html>

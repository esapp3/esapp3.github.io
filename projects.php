<html> 
  <?php 
  include "templates/head.php";
  include "templates/navbar.php";
  ?> 
  <body>
    <div class="section projects">
        <div class="container">
            <div class="row">
              <h1>Duckie Dash</h1>
              <div class="col-md-8"> 

              <div id="carousel-example" data-interval="false" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="item active">
                        <img src="port/duckieDash1.png">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="port/duckieDash2.png">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="port/duckieDash3.png">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="port/duckieDash4.png">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="port/duckieDash5.png">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="port/duckieDash6.png">
                        <div class="carousel-caption"></div>
                    </div>
                    <div class="item">
                        <img src="port/duckieDash7.png">
                        <div class="carousel-caption"></div>
                    </div>
                </div>
                  <a class="left carousel-control" href="#carousel-example" data-slide="prev"><i class="icon-prev  fa fa-angle-left"></i></a>
                  <a class="right carousel-control" href="#carousel-example" data-slide="next"><i class="icon-next fa fa-angle-right"></i></a>
                </div>
              </div>
            <div class="col-md-4">
              <h2>Tags: Gameboy, C</h2>
              <p>This game was created for Gameboy and features animated sprites, a tiled
                  background map (1024 x 1024), a collision map, sounds, four levels, and
                  a few other special components. Music and sounds were created using Audacity
                  and WAV2GB, Sprites and Background were drawn from scratch using Usenti.
                  This game was made for Gameboy using C.</p>
              <h3>
                <a href="port/duckieDash.gba" target="_blank">Download GBA file</a>
                (You will need an emulator)
              </h3>
            </div>
          </div>
        </div>
    </div>
  </body>
  <?php 
  include "templates/footer.php";
  include "templates/scripts.php";
  ?> 
</html>

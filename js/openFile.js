<script type="text/javascript">

    function openPdf(e, path, redirect) {
        // stop the browser from going to the href
        e = e || window.event; // for IE
        e.preventDefault();

        // launch a new window with your PDF
        window.open(path, 'somename', ... /* options */);

        // redirect current page to new location
        window.location = redirect;
    }
    
    function OnMouseIn (elem) {
    elem.style.border = "2px solid blue";
  }
  function OnMouseOut (elem) {
    elem.style.border = "";
  }

</script>

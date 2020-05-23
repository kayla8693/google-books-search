import React from "react";

function JumboTron() {
    return (
        <div class="jumbotron jumbotron-fluid text-center">
  <div class="container">
    <h1 class="display-4 jumboText">Your Library</h1>
    <br></br>

    <a class="jumboText" href="https://developers.google.com/books" target="blank">Powered by Google Books API</a>
    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
  </div>
</div>
    );
}

export default JumboTron;

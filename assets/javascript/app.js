//  TODO: NYT api get.
//  TODO: write API call.
//  TODO: call will need to have a dynamic url.
//  TODO: when calling use info that user inputs.
//  TODO: after call write.then fxn.
//  TODO: display articles in html.
//  TODO: clear articles fxn.
//  $("button").on("click", function() {
    // var person = $(this).attr("data-person");
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //   person + "&api_key=dc6zaTOxFJmzC&limit=10";

var apiKey = b97PVFoem0M22HUVjcdSHpLd6ky0e9Wz;
var term = "";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey;

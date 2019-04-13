

//  TODO: display articles in html.
//  TODO: clear articles fxn.
//  $("button").on("click", function() {
    // var person = $(this).attr("data-person");
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //   person + "&api_key=dc6zaTOxFJmzC&limit=10";

var apiKey = "b97PVFoem0M22HUVjcdSHpLd6ky0e9Wz";
var term = $("#searchTerm").text;
var recNumber = $("#numberOfRec").text;

//TODO add to url
var startYear = $("#startYear").text;
var endYear = $("#endYear").text;

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey;

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    
    console.log(response);
    console.log(response.response.docs[0].headline.main);
    console.log(response.response.docs[0].snippet);



}
)



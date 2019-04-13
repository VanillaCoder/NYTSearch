
$("#searchBtn").on("click", function () {
    event.preventDefault();
    console.log("CLICK");
    var term = $("#searchTerm").val()
    console.log(term);
    var recNumber = $("#numberOfRec").val();
    //TODO loop later
    var apiKey = "b97PVFoem0M22HUVjcdSHpLd6ky0e9Wz";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {

        console.log(response);
        console.log(response.response.docs[0].headline.main);
        console.log(response.response.docs[0].snippet);

        var variable = $("<div>");
        
        variable.attr("class", "formContainer");

        var articleTitle = response.response.docs[0].headline.main;
        var articleSnippet = response.response.docs[0].snippet;

        $(variable).append(articleTitle);
        $(variable).append(articleSnippet);

        $("#articles").append(variable)
    }
)
})

//TODO add to url
// var startYear = $("#startYear").text;
// var endYear = $("#endYear").text;







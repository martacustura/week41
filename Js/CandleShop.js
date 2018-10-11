//Getting candles
function listCandles() {
    // Call Web API to get a list of post
    $.ajax({
        url: 'http://candleshop.azurewebsites.net/api/Candles',
        type: 'GET',
        dataType: 'json',
        success: function (customers) {
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

    if ($("#candlesTable tbody").length == 0) {
        $("#candlesTable").append("<tbody></tbody>");
    }
    $("#candlesTable tbody").empty();
    // Iterate over the collection of data
        // Add a row to the post table
    });
}

    // Check if <tbody> tag exists, add one if not
    // Append row to <table>
    $("#candlesTable tbody").append(
}

function buildCandleRow(candle) {
    var ret =
        "<tr>" +
        "<td>" + candle.id + "</td>" +
        "<td>" + candle.name + "</td>" +
        "<td>" + candle.type + "</td>" +
        "<td>" + candle.price + "</td>" +
        "<td>" + candle.stock + "</td>" +
        "<td>" + candle.imageURL + "</td>" +
        "<td>"
        "<i class='fas fa-minus-circle'></i>" +
        "</button>" +
        "</td >" +
        "</tr>";
    return ret;
}

//Creating a candle
$('#newCandleForm').on('submit',function(e){
    e.preventDefault();
    var name = $( "#candleName" ).val();
    var type = $( "#candleType" ).val();
    var price = $( "#candlePrice" ).val();
    var stock = $("#candleStock" ).val();
    var imageURL = $("#candleImageURL").val();

    $.ajax({
        url: 'http://candleshop.azurewebsites.net/api/Candles',
        type: 'POST',
        data: JSON.stringify({
            "name": name,
            "type": type,
            "price": price,
            "stock": stock,
            "imageURL": imageURL}),
        processData: false,
        contentType: 'application/json',
        success: function (comments) {
            console.log("Created candle");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
});

//Updating candles
 $("#put").click(function(){
     var id = $("#updateCandleId").val();
     var name = $( "#newCandleName" ).val();
     var type = $( "#newCandleType" ).val();
     var price = $( "#newCandlePrice" ).val();
     var stock = $("#newCandleStock" ).val();
     var imageURL = $("#newCandleImageURL").val();

     var settings = {
         url: "http://candleshop.azurewebsites.net/api/Candles/" + id,
         type: "PUT",
         contentType: 'application/json',
         data: JSON.stringify({
             id: id,
             name: name,
             type: type,
             price: price,
             stock: stock,
             imageURL: imageURL})
     };
     $.ajax(settings);
 })

//Deleting candles
$('#deleteCandleForm').on('submit',function(e){
    e.preventDefault();
    var id = $("#deleteCandleId").val();

    $.ajax({
        url: 'http://candleshop.azurewebsites.net/api/Candles/' + id,
        type: 'DELETE',
        success: function (comments) {
            console.log("Deleted candle");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
});

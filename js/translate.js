 $(document).ready(function(){

    $("#transform").click(function(){
      $.ajax({
        url: "https://yoda.p.mashape.com/yoda",
        type: "GET",
        datatype: "json",
        data: {sentence:$("#text").val() },
        headers: {
          "X-Mashape-Authorization": "kSjY9dDW21mshGVQgEXOa3nfu7hip1iRURXjsnQGMFF9rmFL5k"
        },
        beforeSend: function(xhr) {
          $('.loading-spinner').html("<img src='loader.gif' />");
        }
      }).success(function(result){
        $('.loading-spinner').html('');
        $("#newText").text(result);
      })
    });

  });

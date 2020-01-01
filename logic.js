function submit ( ) {
    event.preventDefault();
    blockchainize = $("#username").val().trim();
}


function clear ( ) {
    event.preventDefault();
    $( "#results" ).empty();
}


$(document).on("click", "#submit", submit);

$(document).on("click", "#clear", clear);


const nowLoading = {
    load() {setTimeout(()=>{$("#results").html("Initializing...");
},1000);{setTimeout(()=>{$("#results").html("Running " + blockchainize +" to the Blockchain" ) ;
},1500)};{setTimeout(()=>{$("#results").html("5% completed");
},2000)};{setTimeout(()=>{$("#results").html("10%");
},2300)};{setTimeout(()=>{$("#results").html("15%");
},2300)};{setTimeout(()=>{$("#results1").html("Need more Mining Power..." );
},2400)};{setTimeout(()=>{$("#results").html("19%");
},2600)};{setTimeout(()=>{$("#results").html("20%");
},2650)};{setTimeout(()=>{$("#results1").html("Looking up Satoshi");
},2700)};{setTimeout(()=>{$("#results").html("31%");
},2780)};{setTimeout(()=>{$("#results").html("33%");
},3000)};{setTimeout(()=>{$("#results").html("34%");
},4000)};{setTimeout(()=>{$("#results").html("35%");
},4000)};{setTimeout(()=>{$("#results1").html("Trying not to get hacked..");
},4500)};{setTimeout(()=>{$("#results").html("36%");
},4700)};{setTimeout(()=>{$("#results").html("40%");
},4800)};{setTimeout(()=>{$("#results").html("41%");
},4900)};{setTimeout(()=>{$("#results").html("46%");
},5000)};{setTimeout(()=>{$("#results").html("49%");
},5100)};{setTimeout(()=>{$("#results1").html("Mining some sweet " + blockchainize);
},5600)};{setTimeout(()=>{$("#results").html("50%");
},5700)};{setTimeout(()=>{$("#results").html("51%");
},6000)};{setTimeout(()=>{$("#results").html("59%");
},6500)};{setTimeout(()=>{$("#results1").html("Rerouting " + blockchainize);
},6800)};{setTimeout(()=>{$("#results").html("60%");
},6900)};{setTimeout(()=>{$("#results").html("65%");
},7000)};{setTimeout(()=>{$("#results1").html("Chaining " + blockchainize + "to the block");
},7500)};{setTimeout(()=>{$("#results").html("69%");
},8000)};{setTimeout(()=>{$("#results").html("70%");
},8600)};{setTimeout(()=>{$("#results").html("79%");
},9000)};{setTimeout(()=>{$("#results").html("80%");
},9500)};{setTimeout(()=>{$("#results1").html("Waiting to que-up in the block-chain to process "  + blockchainize);
},9900)};{setTimeout(()=>{$("#results").html("85%");
},10000)};{setTimeout(()=>{$("#results").html("89%");
},10500)};{setTimeout(()=>{$("#results").html("90%");
},10600)};{setTimeout(()=>{$("#results").html("91%");
},10700)};{setTimeout(()=>{$("#results").html("92%");
},10800)};{setTimeout(()=>{$("#results").html("93%");
},10900)};{setTimeout(()=>{$("#results").html("94%");
},11000)};{setTimeout(()=>{$("#results").html("95%");
},11300)};{setTimeout(()=>{$("#results").html("96%");
},11500)};{setTimeout(()=>{$("#results").html("97%");
},12000)};{setTimeout(()=>{$("#results").html(blockchainize + " wont block chain");
},13000)}}
};



  const progressBar = {
    pBarLoad() {setTimeout(()=>{$("#pBar").css("width", "1%");
},1000);{setTimeout(()=>{$("#pBar").css("width", "2%") ;
},1500)};{setTimeout(()=>{$("#pBar").css("width", "3%");
},2000)};{setTimeout(()=>{$("#pBar").css("width", "50%");
},2300)}}}



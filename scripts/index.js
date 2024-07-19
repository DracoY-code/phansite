// Handle the question on the `index.html`
document.addEventListener("DOMContentLoaded", _ => {
  const buttonYes = document.getElementById("button-yes");
  const buttonNo = document.getElementById("button-no");
  const response = document.getElementById("response");
  const responseRating = document.getElementById("response-rating");

  // Setup the counters
  let yesCount = 0;
  let noCount = 0;

  // Record and update the response
  function recordResponse(choice) {
    if (choice === "yes") {
      yesCount++;
    } else if (choice === "no") {
      noCount++;
    }

    // Get approval rating
    let { rating, totalVoteCount } = computeRating({ yesCount, noCount });
    console.log(`Rating: ${rating}`);

    // Update the response
    response.textContent = `Approval Rating: ${rating}% (${totalVoteCount} votes)`;
  }

  // Compute the approval rating
  function computeRating(data) {
    let totalVoteCount = data.yesCount + data.noCount;
    let rating = (data.yesCount / totalVoteCount * 100).toFixed(2);
    
    return { rating, totalVoteCount };
  }

  buttonYes.addEventListener("click", _ => {
    console.log(`Selected: "Yes"!`);
    recordResponse("yes");
  });

  buttonNo.addEventListener("click", _ => {
    console.log(`Selected "No"!`);
    recordResponse("no");
  });
});

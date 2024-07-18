// Handle the question on the `index.html`
const buttonYes = document.getElementById("button-yes");
const buttonNo = document.getElementById("button-no");
const response = document.getElementById("response");

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

  // Update the response
  response.innerText = `Approval Rating: ${rating}% (${totalVoteCount} votes)`;
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

// main.js

function redactAndScramble() {
    // Get the input values
    var originalText = document.getElementById("originalText").value;
    var wordsToScramble = document.getElementById("wordsToScramble").value.split(" ");
    var replacementType = document.querySelector("select[name='replacementType']").value;

    // Perform redaction and scrambling
    var redactedText = originalText;
    var numWordsScanned = originalText.split(/\s+/).length; // Count the number of words in the original text
    var numMatchedWords = 0;
    var numCharactersScrambled = 0;
    var startTime = performance.now(); // Record the start time

    for (var i = 0; i < wordsToScramble.length; i++) {
        var regex = new RegExp('\\b' + wordsToScramble[i] + '\\b', 'gi');
        redactedText = redactedText.replace(regex, function(match) {
            numMatchedWords++; // Increment the matched words count
            numCharactersScrambled += match.length; // Increment the characters scrambled count
            return replacementType.repeat(match.length);
        });
    }

    var endTime = performance.now(); // Record the end time
    var timeTaken = (endTime - startTime) / 1000; // Calculate the time taken in seconds

    // Display the redacted content and stats
    document.getElementById("result").innerHTML = "Redacted Content: <br>" + redactedText;
    document.getElementById("stats").innerHTML = `Status: <br> Words scanned: ${numWordsScanned}, Words redacted: ${numMatchedWords}, Characters redacted: ${numCharactersScrambled}, Time taken: ${timeTaken.toFixed(2)} seconds`;
}

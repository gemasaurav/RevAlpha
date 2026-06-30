function convertText() {
  const input = document.getElementById("inputText").value;
  let output = "";

  for (let ch of input) {
    const upper = ch.toUpperCase();

    if (letterMap[upper]) {
      let converted = letterMap[upper];

      if (ch === ch.toLowerCase()) {
        converted = converted.toLowerCase();
      }

      output += converted;
    }
    else if (numberMap[ch]) {
      output += numberMap[ch];
    }
    else {
      output += ch;
    }
  }

  document.getElementById("outputText").value = output;
}

function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}


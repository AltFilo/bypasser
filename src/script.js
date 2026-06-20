function transformWord(word) {
  let result = "";
  for (let i = 0; i < word.length; i += 2) {
    if (i > 0) result += "\u200D";
    result += word.slice(i, i + 2);
  }
  return result;
}

async function transformAndCopy() {
  const input = document.getElementById("input").value.trim();

  if (!input) {
    alert("Please enter some text.");
    return;
  }

  const transformed = input
    .split(/\s+/)
    .map(transformWord)
    .join(" ");

  try {
    await navigator.clipboard.writeText(transformed);
    alert("Copied to clipboard!");
  } catch (err) {
    alert("Failed to copy. Your browser may block clipboard access.");
    console.error(err);
  }
}

document.getElementById("transformBtn")
  .addEventListener("click", transformAndCopy);
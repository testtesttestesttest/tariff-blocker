// Define your blocked words here
// const blockedWords = ["cat", "dog", "badword", "tAMKATT", "tamkatt"];
const blockedWords = ["cat", "dog", "badword", "tariff","tariffs", "OK", "worldnews", "sweden", "unket"];

// Walk the DOM tree recursively using modern syntax
const walk = (node) => {
  if (node.nodeType === Node.TEXT_NODE) {
    handleText(node);
  } else {
    [...node.childNodes].forEach(walk);
  }
};

// Replace blocked words in text nodes
const handleText = (textNode) => {
  let { nodeValue } = textNode;

  blockedWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, "gi");

    console.log(regex);
    
    nodeValue = nodeValue.replace(regex, "40graderifebruari");
  });

  textNode.nodeValue = nodeValue;
};

// Run the walker on the document body
walk(document.body);

// Put all the javascript code here, that you want to execute after page load.
const boldify = ((text, boldFraction) => {
  const words = text.split(' ').map(w => {
    const n = Math.max(1, Math.round(w.length * boldFraction));
    return "<b>" + w.substr(0, n) + "</b>" + w.substr(n);
  }).join(' ');
  return words
});
const paragraphs = [...document.getElementsByTagName('p')];
const excludeTextWithHTML = (x=>!x.innerHTML.match("[<>]"));

console.log(`Found ${paragraphs.length} paragraphs`)

paragraphs.filter(excludeTextWithHTML).forEach(p => {
  console.log(`Formatting ${p.innerHTML}`)
  p.innerHTML = boldify(p.innerHTML, 0.3);
});
/*
You've just finished writing the last chapter for your novel when a virus suddenly infects your document.
It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters.

Write a function which will:
1.Remove the spelling errors in 'ei' words. (Examples of 'ei' words: their, caffeine, deceive, weight)
2.Only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case. Each sentence is separated by a full stop.

Example:
He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
*/

function proofread (str) { 
  let sentences = str.split('. ');
  let res = [];
        
  for (let sentence of sentences) {
    let processed = sentence.toLowerCase().replace(/ie/g, "ei");
    processed = processed[0].toUpperCase() + processed.slice(1);
    res.push(processed);
  }

  return res.join('. ');
}

console.log(proofread ("SHe wEnt CaNoIenG.")); //"She went canoeing."
console.log(proofread ("He haD iEght ShOTs of CAffIEne")); //"He had eight shots of caffeine"
console.log(proofread ("ThE kiDs enJoYEd the SLiegh RidE.")); //"The kids enjoyed the sleigh ride."
console.log(proofread ("THe neIghBour's ceiLing FEll on His Head. The WiEght of It crusHed him To thE gROuNd.")); //"The neighbour's ceiling fell on his head. The weight of it crushed him to the ground."

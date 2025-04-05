import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let pronouns = ["we", "they", "us"];
  let adj = ["beautiful", "heavy", "fast"];
  let nouns = ["car", "sun", "florida"];
  let web = [".com", ".net", '.org'];
  let domains = [];

  for (let i = 0; i < pronouns.length; i++) {
    let pros = pronouns[i];
    for (let j = 0; j < adj.length; j++) {
      let ads = adj[j];
      for (let k = 0; k < nouns.length; k++) {
        let noun = nouns[k];
        for (let l = 0; l < web.length; l++){
          let webs = web[l];
        
        let domain = pros + ads + noun + webs;
          
        domains.push(domain);
        console.log(domain);
      }
      }
    }
  }


};

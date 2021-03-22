/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "your"];
  let adj = ["great", "big", "small"];
  let noun = ["joker", "head", "code"];
  let extension = [".com", ".es", ".net"];

  let domain = "";
  let domains = [];

  for (var i = 0; i < pronoun.length; i++) {
    for (var z = 0; z < adj.length; z++) {
      for (var y = 0; y < noun.length; y++) {
        for (var w = 0; w < extension.length; w++) {
          domain = pronoun[i].concat(adj[z], noun[y], extension[w]);
          domains.push(domain);
        }
      }
    }
  }

  let body = document.querySelector("body");
  let ulList = document.createElement("ul");

  for (var x = 0; x < domains.length; x++) {
    let listDomains = document.createElement("li");
    let domains1By1 = document.createTextNode(domains[x]);
    listDomains.appendChild(domains1By1);
    ulList.appendChild(listDomains);
    body.appendChild(ulList);
  }
};

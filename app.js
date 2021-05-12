const express = require('express');
const app = express();

app.listen(3000);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
/* app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});
 */


app.get('/api/random', (req, res) => {
  res.send({ 'number': Math.floor(Math.random() * 1024) }); 
  //for curl: curl -X GET localhost:3000/api/random
});

app.get('/api/custom_random/:num', (req, res) => {
  res.send({ 'number': Math.floor(Math.random() * req.params.num) });
  //for curl: curl -i -X GET localhost:3000/api/custom_random/0
});

app.post('/api/vowel_counter', (req, res) => {
  const word = req.body.word; //for html
  //const word = req.query.word; //for curl
  //for curl: | curl -X POST localhost:3000/api/vowel_counter/?word=testing
  

  var vowels = 0;
  for(i = 0; i < word.length; i++) {
   
    if(word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'y' ) {
      vowels++;
    }
  }
  
  res.send({ 'vowels': vowels });

});

//Node.js Crash Course Tutorial #6 - Express Apps (https://www.youtube.com/watch?v=Lr9WUkeYSA8)
//Node.js Crash Course Tutorial #10 - Get, Post & Delete Requests (https://www.youtube.com/watch?v=VVGgacjzc2Y)
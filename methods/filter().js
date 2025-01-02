//*    -- --- --- filter()---- ----  *//
//* The filter method is used to filter out array elements that fail a boolean test. Only elements that pass the test are allowed through into the new return array. *//


let posts = [
    {
        title: "post 1",
        author: "katya"
    },
    {
        title: "post 2",
        author: "olena"
    },
    {
        title: "post 3",
        author: "katya"
    },
];

let katyasposts = posts.filter(post /* access to the each post */ => post.author === 'katya');
console.log(katyasposts);//[{…}, {…}] two post where is katya author


let cities = [
    { name: "Stokington", rivers: 3 },
    { name: "Phillydelfia", rivers: 6 },
    { name: "New Ports", rivers: 2 },
  ]
  let moreThanTwoRivers = cities.filter(c => c.rivers > 2)
  // [
  //   { name: 'Stokington', rivers: 3 },
  //   { name: 'Phillydelfia', rivers: 6 },
  // ];

  let articles = [
    { title: "PHP classes", author: "Danny Adams" },
    { title: "Python arrays", author: "Amy Sanders" },
    { title: "Arrays in PHP", author: "Danny Adams" },
  ]
  // Lets say the user searches for all articles with PHP in the title
  let PHPArticles = articles.filter(a => a.title.includes("PHP"))
  // [
  //   { title: 'PHP classes', author: 'Danny Adams' },
  //   { title: 'Arrays in PHP', author: 'Danny Adams' },
  // ];
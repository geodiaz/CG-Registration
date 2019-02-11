const express = require('express');
const router = express.Router();

var books = [{
    title: 'Book Title',
    genre: 'Book Genre',
    author: 'Book Author',
    read: false
  },
  {
    title: 'Book2 Title2',
    genre: 'Book2 Genre2',
    author: 'Book2 Author2',
    read: false
  }];
  
  router.route('/')
  .get((req, res)=>{
    res.render('books',
    {
      nav: [{link : '/books', title: 'Books'},
            {link: '/authors',title: 'Author'}],
      title: 'Library',
      books
    });
  });
    
  router.route('/single')
  .get((req, res)=>{
    res.send('hello singel books');
    });

  module.exports = router;
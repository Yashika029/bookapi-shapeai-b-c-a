//  ---- Requirements ----

// Books

//     - ISBN               - String        (International Standard Book No)
//     - Title              - String
//     - Author ID          - [Number]
//     - Language           - String
//     - Publications       - Number
//     - No of Pages        - Number
//     - Categories         - [String]


// Author

//      -id       - number
//      name      - string
//      books     - [string]

// Publications

//      -id       - number
//      name      - string
//      books     - [string]


//  ---- APIs ----

// Books 

    //  - GET
         // - to get all books 
         // - to get specific books
         // - to get a list of books based on category
         // - to get a list of books based on author

    //  - POST
         // to add new  book

    //  - PUT
         // - to update book details
         // - to update/add new author

    //  - DELETE
         // - delete a book
         // - delete an author from the book 
         
         
// Authors 

    // - GET
         //  - to get all authors
         //  - to get specific author
         //  - to get list of authors based on a book

    // - POST
         //  - to add new author

    // - PUT
         //  - update author details

    // - DELETE
         //  - delete an author


// Publications  
     // - GET
         //  - to get all publications
         //  - to get specific publication
         //  - to get a list of publications based on a book

     // - POST
         //  - add new publications

     // - PUT
         //  - update publication details
         //  - to update/add new book

     // - DELETE 
         //  - delete a book from publication
         //  - delete a publication

/*
Routes Needed in producation
/author/                                 getting all authors
/author/:isbn                            get a list of authors based on a book's ISBN
/author/new                              add new author
/book/                                   get all books
/book/is/:isbn                           get specific book based on ISBN
/book/c/:category                        get specific books based on a category
/book/new                                add new books
/book/update/:isbn                       update title of a book
/book/author/update/:isbn                update/add new author
/book/delete/:isbn                       delete a book
/book/delete/author/:isbn/:authorId      delete a author from a book
/publications                            get all publications
/publication/update/book/:isbn           update/add new book to a publication
/publication/delete/book/:isbn/:pubId    delete a book from publication
*/
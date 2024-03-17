const { Router } = require('express');
const { bookscontroller } = require('../controllers/books_controller');

const cors = require('cors');
const router = Router();

const corsMiddleware = cors({
  origin: '*', // Define a origem permitida (todos os domínios)
  credentials: true, // Permite o uso de cookies e cabeçalhos de autorização com HTTPS
  allowedHeaders: 'Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale', // Define os cabeçalhos permitidos
  methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS' // Define os métodos permitidos
});

router.use(corsMiddleware);

router.use(
    '/books',
    router.get('/', bookscontroller.getAllBooks),
    router.get('/:id', bookscontroller.getBookById),    
    router.post('/', bookscontroller.createNewBook),
    router.patch('/:id', bookscontroller.updateBook),
    router.delete('/:id', bookscontroller.deleteBook),
)



module.exports = router;
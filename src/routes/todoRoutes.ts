import { Router } from 'express';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';
import { validateTodo, validateUpdateTodo } from '../middlewares/validator';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();

router.use(verifyToken);

// GET /api/todos – Pasang middleware authenticateToken di baris ini
router.get('/', getTodos);

// GET /api/todos/:id – Ambil satu todo berdasarkan ID
router.get('/:id', getTodoById);

// POST /api/todos – Tambah todo baru
router.post('/', validateTodo, createTodo);

// PUT /api/todos/:id – Update todo (task atau status selesai)
router.put('/:id', validateUpdateTodo, updateTodo);

// DELETE /api/todos/:id – Hapus todo
router.delete('/:id', deleteTodo);

export default router;
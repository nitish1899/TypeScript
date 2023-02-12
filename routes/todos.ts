import {Router} from 'express';
import {Todo} from '../modules/todo';

let todos:Todo[] = [];

const router = Router();

router.get('/', (req,res,next) => {
    res.status(200).json({message:'Hi', todos: todos});
});

router.post('/todo', (req,res,next) => {
    console.log('request from postman', req.body.text);
    const newTodo:Todo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(201).json({message:'Todo added successfully', todo: newTodo, todos:todos});
});

router.put('/todo/:todoId', (req,res,next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if(todoIndex >=0){
        todos[todoIndex] = {id : todos[todoIndex].id, text: req.body.text};
        return res.status(200).json({message:'Todo updated successfully', todos:todos})
    }
    res.status(404).json({message:'Could not find todo for thid id.'})
});


router.delete('/todo/:todoId', (req,res,next) => {
   todos = todos.filter((todoItem) => todoItem.id !== req.params.todoId);
   res.status(200).json({message:'Todo deleted successfully', todos:todos}) 
})

export default router;

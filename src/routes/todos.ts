import {Router} from 'express';
import {Todo} from '../modules/todo';

let todos:Todo[] = [];

const router = Router();
type RequestBody = {text: string};
type RequestParams = {todoId: string};

router.get('/', (req,res,next) => {
    res.status(200).json({message:'Hi', todos: todos});
});

router.post('/todo', (req,res,next) => {
    const body = req.body as RequestBody;
    console.log('request from postman', body.text);
    const newTodo:Todo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({message:'Todo added successfully', todo: newTodo, todos:todos});
});

router.put('/todo/:todoId', (req,res,next) => {
    const body = req.body as RequestBody;
    const params = req.params as RequestParams;
    const tid = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if(todoIndex >=0){
        todos[todoIndex] = {id : todos[todoIndex].id, text: body.text};
        return res.status(200).json({message:'Todo updated successfully', todos:todos})
    }
    res.status(404).json({message:'Could not find todo for thid id.'})
});


router.delete('/todo/:todoId', (req,res,next) => {
   const params = req.params as RequestParams; 
   todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
   res.status(200).json({message:'Todo deleted successfully', todos:todos}) 
})

export default router;

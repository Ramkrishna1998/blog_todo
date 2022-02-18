import Header from '../Header/header';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function TodoComponent() {
    return (
        <div className='min-h-screen'>
            <Header />
            <div className="p-10">
                <TodoInput />
                <TodoList />
            </div>           
        </div>
    );
}

export default TodoComponent;

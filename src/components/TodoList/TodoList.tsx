import { TasksContainer, TodoListComponent } from "./styles"
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { v4 } from "uuid"
import { todoListSliceActions, todoListSliceSelectors } from "store/redux/todoList/todoListSlice"

function TodoList() {
  const [task, setTask] = useState<string>("")

  const dispatch = useAppDispatch()

  const taskArray = useAppSelector(todoListSliceSelectors.todoList)

  const onClick = () => {
    dispatch(todoListSliceActions.addTask(task))
    setTask('')
  }

  const tasksMap = taskArray.map(task => {
    return <div key={v4()}>{task}</div>
  })

  return (
    <TodoListComponent>
      <Input
        name="Task Input"
        onInputChange={event => setTask(event.target.value)}
        value={task}
        placeholder='Task'
      />
      <Button name="Submit" onButtonClick={onClick} />
      <TasksContainer>{tasksMap}</TasksContainer>
    </TodoListComponent>
  )
}

export default TodoList
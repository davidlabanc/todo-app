import { useState, useCallback } from 'react'
import { TodoInterface } from '../../ts/interfaces/app_interfaces';

export const useTodo = () => {
  const [items, setItems] = useState<TodoInterface[]>([])

  const setTodos = useCallback(
    (items: TodoInterface[]) => {
      let new_items = items.map(item => { return { ...item, id: item.id.toString() } })
      setItems(new_items)
    },
    []
  )

  const setCompleted = useCallback(
    (id: String) => {
      let new_items = items.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
      setItems(new_items)
    },
    [items]
  )

  return { items, setTodos, setCompleted }
}
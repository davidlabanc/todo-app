import { useState, useCallback } from 'react'

export const useTodo = () => {
  const [items, setItems] = useState<{ id: string; title: string; completed: Boolean }[]>([])

  const setTodos = useCallback(
    (items : { id: string; title: string; completed: Boolean }[]) => {
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
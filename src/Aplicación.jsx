
import { useState } from 'react'
import TaskForm from './FormularioTareas.jsx'
import TaskList from './ListaTareas.jsx'
import './Aplicación.css'

function Aplicación() {
  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')

  function agregarTarea(evento) {
    evento.preventDefault()

    if (nuevaTarea.trim() === '') {
      return
    }

    const tarea = {
      id: Date.now(),
      texto: nuevaTarea.trim()
    }

    setTareas([...tareas, tarea])
    setNuevaTarea('')
  }

  function eliminarTarea(id) {
    const tareasActualizadas = tareas.filter(
      (tarea) => tarea.id !== id
    )

    setTareas(tareasActualizadas)
  }

  return (
    <main>
      <h1>Mi Lista de Tareas</h1>

      <p>Organiza tus actividades de manera sencilla.</p>

      <TaskForm
        nuevaTarea={nuevaTarea}
        setNuevaTarea={setNuevaTarea}
        agregarTarea={agregarTarea}
      />

      <TaskList
        tareas={tareas}
        eliminarTarea={eliminarTarea}
      />
    </main>
  )
}

export default Aplicación

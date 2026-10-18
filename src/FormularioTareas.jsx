
function FormularioTareas({ nuevaTarea, setNuevaTarea, agregarTarea }) {
  return (
    <form onSubmit={agregarTarea}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea"
        value={nuevaTarea}
        onChange={(evento) =>
          setNuevaTarea(evento.target.value)
        }
      />

      <button type="submit">
        Agregar tarea
      </button>
    </form>
  )
}

export default FormularioTareas

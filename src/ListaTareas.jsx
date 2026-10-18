
function ListaTareas({ tareas, eliminarTarea }) {
  return (
    <section>
      <h2>Mis tareas</h2>

      <p className="contador">
        Tareas pendientes: {tareas.length}
      </p>

      {tareas.length === 0 ? (
        <p>No tienes tareas pendientes.</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <span>{tarea.texto}</span>

              <button
                type="button"
                onClick={() => eliminarTarea(tarea.id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaTareas

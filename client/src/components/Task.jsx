import { useDrag } from "react-dnd";

const Task = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'image',
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))
  return (
    <>
      <img id="1" ref={drag} src="https://placecats.com/300/200" alt="" style={{ border: isDragging ? "5px solid pink" : "0px" }} />
    </>
  )
}

export default Task
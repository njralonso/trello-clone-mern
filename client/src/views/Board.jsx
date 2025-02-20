import Layout from "./layouts/_layout"
import { useParams, useSearchParams } from 'react-router'
import { useDrop } from "react-dnd"
import Task from "../components/Task"
import { useState } from "react"

const Board = () => {
  const { name } = useParams()
  const [{ isOver }, collectedProps, drop] = useDrop(() => ({
    accept: "image",
    drop: () => addImageToBoard(),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }))
  const addImageToBoard = () => {
    console.log("ok")
  }
  return (
    <Layout>
      <h1 className="bg-red-300 text-white font-semibold text-5xl">OLA K ASE {name}</h1>
      <div style={{
        backgroundColor: '#f4f5f7',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
      }}>
        <ul style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridGap: "10px",
          gridAutoRows: "minmax(100px, auto)",
          // opacity: isDragging ? 0.5 : 1
        }}>
          <Task />
          <Task />
        </ul>
        <div ref={drop} style={{ border: "2px solid black", height: "300px" }}></div>
      </div>
    </Layout>
  )
}

export default Board
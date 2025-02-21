import Layout from "./layouts/_layout"
import { useParams } from 'react-router'
import Task from "../components/Task"

const Board = () => {
  const { name } = useParams()

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
        }}>
          <Task />
          <Task />
        </ul>
      </div>
    </Layout>
  )
}

export default Board
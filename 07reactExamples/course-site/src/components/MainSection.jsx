import students from "../json/students.json"
import CardGroup from 'react-bootstrap/CardGroup';
import StudentCard from "./StudentCard"

export default function MainSection() {
  const cards = students.map((student)=><StudentCard student={student}></StudentCard>)
  return <section><CardGroup>{cards}</CardGroup></section>
}
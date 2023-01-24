import Card from 'react-bootstrap/Card';

function StudentCard({student}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={student.photo} />
      <Card.Body>
        <Card.Link href={student.site}>{student.name}</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;
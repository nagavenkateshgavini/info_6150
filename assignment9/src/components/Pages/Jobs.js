import Card from 'react-bootstrap/Card';
import './Jobs.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {Row, Col, Button} from 'react-bootstrap';

function BasicExample() {

  const cardInfo = [
      {image: "", title:"Python Developer", text:"A Python Developer is responsible for coding, designing, deploying, and debugging development projects, typically on the server-side"},
      {image: "", title:"Java Developer", text:"Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once"},
      {image: "", title:"ML Engineer", text:"Machine learning (ML) is a field of inquiry devoted to understanding and building methods that learn – that is, methods that leverage data to improve ..."}
  ]

  const renderedCard = (card, index) => {
    return (
      <Card key={index} className="container"> 
        <Card.Img variant="top" src={card.image}/>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
        <Button variant="primary" size="sm">Apply Here</Button>
        </Card>
    )
  }

  return (
    <div className='container'> 
      {cardInfo.map(renderedCard)}
    </div>
  );
}

export default BasicExample;
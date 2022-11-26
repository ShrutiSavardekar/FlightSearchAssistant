import React, { Component, useState, useEffect} from 'react';
import {
    Row, Col, Image, ListGroup, Card, Button, Form, Modal, Jumbotron, Container,
  } from 'react-bootstrap';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
  import background from './background.jpeg'; 
  
  function Home() {
    const [show, setShow] = useState(false);
    const [error, seterror] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(origin && destination){
        seterror(false);
       setShow(true);
      }
     else
       seterror(true);

    }
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [DepartureDate, setDepartureDate] = useState("");
    const [Carrier, setCarrier] = useState("DL");
    let [flights, setFlights] = useState([]);
    
    if(flights){
        if(origin)
        flights = flights.filter((review)=> review.origin_city === origin);
        if(destination)
        flights = flights.filter((review)=> review.destination_city === destination);
    }
    const getFlightData = (event) => {
        event.preventDefault();
          let week = DepartureDate.split('-')[1];
          let month = DepartureDate.split('-')[2];
          // alert(week + " " + month);
          if(week[0] === '0'){
            week = week.substring(1, week.length);
          }
          if(month[0] === '0'){
            month = month.substring(1, month.length);
          }
          // alert(week + " " + month);
          fetch(`http://localhost:6000/api/${Carrier}`)
            .then(res => res.json())
            .then(
              (result) => {
                setFlights(result._rs.rows);
              },
              (error) => {
                console.log(error);
              }
            )
      
        }

   
  
    return (
      
      <div className="App" >
        <header className="App-header">
        <Jumbotron style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '48rem', backgroundPosition: 'center'}}>
              {/* <h1 style={{ color: 'black' }}>
                {' '}
               Flight Search Assistant
              </h1>
              <p style={{ color: 'black' }}>
                •
                Plan your vacation with cheap flights
                •
              </p> */}
            
        <Container>
        
        <Row>
              <Col sm={5} md={1} lg={2}>
                </Col>
              <Col>
                <ListGroup>
                  <h1>
                Expert Flight Search
              </h1>
                </ListGroup>
                <hr></hr>
                <input type="radio" value="oneway" name="bookingtype" /> One way
                {' '}
                <input type="radio" value="round" name="bookingtype" /> Round Trip
                <hr></hr>
            
            <div className="form">
            
        <form style={{width: "50%"}}>
        
        {error && <div className="alert alert-danger" style={{backgroundColor: '#a98e91'}}>All fields are required</div>}
        <div className="form-group">
        <div className="form-group">
          <label className="text-muted">Carrier</label>
          <select   onChange={(event)=>setCarrier(event.target.value)} className="form-control" placeholder="Enter Carrier" value={Carrier}>
           <option value="DL">DL</option>
           <option value="WN">WN</option>
           <option value="AA">AA</option>
            <option value="UA">UA</option>
            <option value="US">US</option>
           <option value="OO">OO</option>
           <option value="B6">B6</option>
            <option value="EV">EV</option>
            <option value="MQ">MQ</option>
           <option value="9E">9E</option>
           <option value="AS">AS</option>
            <option value="FL">FL</option>
          </select>
      </div>
        <Row>
          <Col>
          <div className="form-group">
          <label className="text-muted">From:</label>
          <select   onChange={(event)=>setOrigin(event.target.value)} className="form-control" placeholder="Enter Origin" value={origin}>
           <option value="10165">Adak Island</option>
           <option value="10299">Anchorage</option>
           <option value="10304">Aniak</option>
            <option value="10754">Barrow</option>
            <option value="10551">Bethel</option>
           <option value="10926">Cordova</option>
           <option value="14709">Deadhorse</option>
            <option value="11336">Dillingham</option>
            <option value="11630">Fairbanks</option>
           <option value="11997">Gustavus</option>
           <option value="12523">Juneau</option>
            <option value="12819">Ketchikan</option>
            <option value="10245">King Salmon</option>
            <option value="10170">Kodiak</option>
            <option value="13970">Kotzebue</option>
            <option value="13873">Nome</option>
            <option value="14256">Petersburg</option>
            <option value="14828">Sitka</option>
            <option value="12807">St. Mary's</option>
            <option value="11445">Unalaska</option>
            <option value="15841">Wrangell</option>
            <option value="15991">Yakutat</option>
            <option value="10599">Birmingham</option>
            <option value="11869">Grand Canyon</option>
            <option value="14107">Phoenix</option>
            <option value="15376">Tucson</option>
            <option value="10800">Burbank</option>
            <option value="11041">Carlsbad</option>
            <option value="11002">Chico</option>
            <option value="10910">Concord</option>
            <option value="10930">Crescent City</option>
            <option value="11638">Fresno</option>
            <option value="15383">Lake Tahoe</option>
            <option value="12954">Long Beach</option>
            <option value="12892">Los Angeles</option>
            <option value="13388">Mammoth Lakes</option>
            <option value="13796">Oakland</option>
            <option value="14262">Palm Springs</option>
            <option value="14487">Redding</option>
            <option value="14893">Sacramento</option>
            <option value="14679">San Diego</option>
            <option value="14771">San Francisco</option>
            <option value="14831">San Jose</option>
            <option value="14698">San Luis Obispo</option>
          </select>
      </div>
          </Col>
        
          </Row><hr></hr>
          <Row>
          <Col>
          <div className="form-group">
          <label className="text-muted">To:</label>
          <select   onChange={(event)=>setDestination(event.target.value)} className="form-control" placeholder="Enter Destination" value={destination}>
           <option value="10165">Adak Island</option>
           <option value="10299">Anchorage</option>
           <option value="10304">Aniak</option>
            <option value="10754">Barrow</option>
            <option value="10551">Bethel</option>
           <option value="10926">Cordova</option>
           <option value="14709">Deadhorse</option>
            <option value="11336">Dillingham</option>
            <option value="11630">Fairbanks</option>
           <option value="11997">Gustavus</option>
           <option value="12523">Juneau</option>
            <option value="12819">Ketchikan</option>
            <option value="10245">King Salmon</option>
            <option value="10170">Kodiak</option>
            <option value="13970">Kotzebue</option>
            <option value="13873">Nome</option>
            <option value="14256">Petersburg</option>
            <option value="14828">Sitka</option>
            <option value="12807">St. Mary's</option>
            <option value="11445">Unalaska</option>
            <option value="15841">Wrangell</option>
            <option value="15991">Yakutat</option>
            <option value="10599">Birmingham</option>
            <option value="11869">Grand Canyon</option>
            <option value="14107">Phoenix</option>
            <option value="15376">Tucson</option>
            <option value="10800">Burbank</option>
            <option value="11041">Carlsbad</option>
            <option value="11002">Chico</option>
            <option value="10910">Concord</option>
            <option value="10930">Crescent City</option>
            <option value="11638">Fresno</option>
            <option value="15383">Lake Tahoe</option>
            <option value="12954">Long Beach</option>
            <option value="12892">Los Angeles</option>
            <option value="13388">Mammoth Lakes</option>
            <option value="13796">Oakland</option>
            <option value="14262">Palm Springs</option>
            <option value="14487">Redding</option>
            <option value="14893">Sacramento</option>
            <option value="14679">San Diego</option>
            <option value="14771">San Francisco</option>
            <option value="14831">San Jose</option>
            <option value="14698">San Luis Obispo</option>
          </select>
      </div>
          </Col>
          {/* <Col>
          <label className="text-muted">Arrival Date:</label>
          <input  type="date" className="form-control"/>
          </Col> */}
          </Row>
          <Row>
          <Col>
          <label className="text-muted" >Departure Date:</label>
          <input  type="date" onChange={(event)=>setDepartureDate(event.target.value)}  className="form-control" value={DepartureDate}/>
          </Col>
         </Row>
        </div>
       
      
          <Button type="submit" value="Search" variant="info" onClick={(event)=>getFlightData(event)}>
            Search
          </Button>
         

      </form>
      
        </div>
              </Col>
        
        </Row>

       
        </Container>
                 <Container>
                 {flights && flights.map((flight, i) => (
                   <Row>
                     <Col sm={5} md={4} lg={12}>
                   <Card className="my-3 p-3 rounded">
  
             <Card.Body style={{ fontFamily: 'initial' }}>
               <Card.Title as="div">
  
                 <strong>
                   {' '}
                   Carrier: {flight.carrier}
                   {' '}
                 </strong>
                 {' '}
  
               </Card.Title>
               <Card.Text as="div">
               <ListGroup>
               Departure Date: {flight.dayofmonth}/{flight.dayofweek}/2021
               </ListGroup>
               <ListGroup>
               Origin city: {flight.origin_city}
               </ListGroup>
               <ListGroup>
               Destination city: {flight.destination_city}
               </ListGroup>
               
               </Card.Text>
             <hr></hr>
               <Button type="submit" value="Search" variant="success" onClick={handleShow}>
            Book Flight
          </Button>
             </Card.Body>
           </Card>
           
           </Col>
                   </Row>
               
                     ))}
                        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>You have successfully booked the Flight</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  
                    </Container>
       
        </Jumbotron>
  
  
  </header>
      
      </div>
      
    );
  }
  
   export default Home;
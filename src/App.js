import "./App.css"
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap"
// import { useState } from "react"
function App() {
  return (
    <div className="App">
      <header className="App-body">
        <Container className="border-check-off">
          <Row>
            {/* way to center Col --> md={{ span: 6, offset: 3 }}> */}
            <Col md={{ span: 6, offset: 3 }}></Col>
          </Row>
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="border-check-off">
              <h3>Login 1</h3>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <div className="width-70px"> email</div>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon2">
                    <div className="width-70px">Password</div>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="email"
                  aria-label="email"
                  aria-describedby="basic-addon2"
                />
              </InputGroup>
              <Button variant="primary" size="lg" block>
                Primary
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App

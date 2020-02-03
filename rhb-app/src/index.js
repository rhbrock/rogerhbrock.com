import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isHome: true,
            home: "",
            isAbout: false,
            isResume: false
        };
    }

    handleClick() {
  
            if (this.state.isHome === false) {
                this.setState({ isHome: true });
            } else this.setState({ isHome: false });
        

    }

    render() {
        return (
            <div>
                <NavigationBar onClick={this.handleClick} />
                <Home value={this.state.isHome} />
                <About value={this.state.isAbout} />
            </div>
        );
    }

}



function Home(props) {

    const x = props.value;

    if (x) {
        return (
            <div className="">
                <h1>Currently Under Construction</h1>
                <p>Please check back soon</p>
            </div>
        );

    } else return <div></div>;

}

function About(props) {

    const x = props.value;

    if (x) {
        return (
            <div className="">
                <h1>About</h1>
            </div>
        );

    } else return <div></div>;

}


function Resume() {
    return (
        <div className="">
            <h1>Home</h1>
        </div>

    );
}

function NavigationBar(props) {

    const home = "home";

    return (
        <div>

            <Navbar bg="dark" variant="dark" expand="lg" >
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link value={home} onClick={props.onClick}>Home</Nav.Link>
                        <Nav.Link onClick={props.onClick}>About</Nav.Link>
                        <Nav.Link onClick={props.onClick}>Resume</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                    </Nav>
                    {/* <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                </Navbar.Collapse>
            </Navbar>

        </div>

    );
}


ReactDOM.render(<Main />, document.getElementById('root'));
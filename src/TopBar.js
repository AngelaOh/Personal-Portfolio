import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './TopBar.css'

function TopBar() {
  return (
    <div className="Topbar">
            <h1>Angela Oh . . . </h1>
            <Button variant="light">About</Button>
            <Button variant="light">Projects</Button>
            <Button variant="light">Contact</Button>
    </div>
  );
}

export default TopBar;
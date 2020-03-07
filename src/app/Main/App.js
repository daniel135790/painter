import React, {useState} from 'react';
import {
  Container,
  Drawer,
  AppBar,
  IconButton,
  Toolbar as muiToolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import Canvas from '../Components/Canvas'
import Toolbar from '../Components/Toolbar';
import constants from "../constants";
import webSocket from '../webSocket';
import useStyles from './styles';
import './App.css';

const {DEFAULT_LINE_COLOR, DEFAULT_LINE_WIDTH} = constants;

const App = () => {
  const [lineWidth,
    setLineWidth] = useState(DEFAULT_LINE_WIDTH);
  const [lineColor,
    setLineColor] = useState(DEFAULT_LINE_COLOR);

  const [isDrawerOpen,
    setDrawerOpen] = useState(false);

  const styles = useStyles();

  const onLineWidthChange = (e) => {
    webSocket.sendTest(e.target.value);
    setLineWidth(e.target.value);
  }

  const onLineColorChange = color => setLineColor(color.hex);

  const handleDrawerOpen = () => setDrawerOpen(true);

  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <AppBar position="static">
        <muiToolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start">
            <MenuIcon/>
          </IconButton>
        </muiToolbar>
      </AppBar>
      <Container maxWidth="lg" className="canvas-container">
        <Drawer
          onClose={handleDrawerClose}
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          classes={{
          paper: styles.drawerPaper
          }}
          >
          <Toolbar
            lineColor={lineColor}
            lineWidth={lineWidth}
            onLineColorChange={onLineColorChange}
            onLineWidthChange={onLineWidthChange}/>
        </Drawer>
        <Canvas lineColor={lineColor} lineWidth={lineWidth}/>
      </Container>
    </>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Badge, Panel, PanelHeader, PanelFooter, Text, Breadcrumbs } from 'rebass';
import classnames from 'classnames';

import ImageGrid from './ImageGrid.js';

class App extends React.Component {

    render() {
        return <div></div>
    }
}

class Rebass extends React.Component {
  constructor(props) { // use when using ES6 classes else getInitialState can be used
    super(props);
    this.state = {
      openImageGrid: false
    };
  }

  openImageGrid () {
    this.setState({ openImageGrid : true });
  }

  toggleImageGrid () {
    this.setState({openImageGrid: !this.state.openImageGrid});
  }

  render () {
    var btnClass = classnames({
      'DemoBtn': true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return (
        <div>
            <Panel theme="info">
              <PanelHeader
                inverted={true}
                theme="default"
              >
                <Breadcrumbs links={[{children: 'Jxnblk', href: '#!'}, {children: 'Rebass', href: '#!'}, {children: 'Breadcrumbs', href: '#!'}]} />
                Panel - this is in the header
              </PanelHeader>
              <Text>
                Panels are great for visually separating UI, content, or data from the rest of the page.
              </Text>
              <Text>
                {this.props.msg}
              </Text>
                <Button
                    onClick={ () => { console.log("clicked");}}
                    onMouseOver={ () => { this.state.btnState = 1; console.log("over") }}
                    onMouseLeave={ () => { this.state.btnState = 0; }}
                    onMouseDown={ () => { this.state.isPressed = true; console.log("down"); }}
                    onMouseUp={ () => { this.state.isPressed = false; console.log("up"); }}
                    className={btnClass}
                >
                    Demo Button
                </Button>
                <Button
                    onClick={ () => { 
                      this.openImageGrid();
                    }}
                    className={btnClass}
                >
                    Open Image Grid
                </Button>
                <ImageGrid open={this.state.openImageGrid} toggle={this.toggleImageGrid.bind(this)}></ImageGrid>
                <Badge>Badge</Badge>
              <PanelFooter theme="default">
                The footer is a good place for less important information
              </PanelFooter>
            </Panel>
        </div>
    )
  }
}

ReactDOM.render(
    <Rebass msg='What a day it is' label='Hello there'/>,
    document.getElementById('rebass')
)
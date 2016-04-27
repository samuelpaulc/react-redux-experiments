import React from 'react';
import ReactDOM from 'react-dom';
import GridLayout from 'react-grid-layout';
import { Button, Badge, Panel, PanelHeader, PanelFooter, Text, Breadcrumbs, Overlay, CardImage, Close, Space } from 'rebass';

export default class ImageGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageRootDir: '../images/',
            images: [
                'sofa.png',
                'wedding.png',
                'vr46.jpg',
                'vr46 vs mm.jpg',
                'koenigseggoneto1.jpg',
                'koenigseggoneto2.jpg'
            ],
            open: true
        }
    }

    generateLayout () {
        var itemsLen = this.state.images.length;
        return this.state.images.map( (path, idx) => {
            var row = Math.floor(idx/6);
            var rem = idx%5;
            var x = 2*rem + rem ? 1: 0;
            return {
                i: path,
                x: 2*rem + rem ? 1: 0,
                y: Math.floor(idx/6),
                w: 2,
                h: 2,
                minW: 2, 
                maxW: 2
            }
        });
    }

    render() {
        // layout is an array of objects, see the demo for more complete usage
        var layout = this.generateLayout();
        var className = 'image-grid-item'
        var rootDir = this.state.imageRootDir;
        var images = this.state.images.map( (path) => {
            var fullpath = rootDir + path;
            return (
                <div key={path} className={className}>
                    <CardImage src={fullpath} onClick={ () => {  console.log(path + " clicked!")}}/>
                </div>
            )
        });

        return (
            <Overlay 
                open={this.props.open}
                className={'vbox'}
                style={{
                    'width': '900px',
                    'height': '600px'
                }}>
                <Panel theme="primary">
                  <PanelHeader
                    inverted={true}
                    theme="default"
                  >
                    Panel
                    <Space auto />
                    <Close onClick={ () => {
                        this.props.toggle();
                    }} />
                  </PanelHeader>
                    <div style={{display: 'inline-block'}}>
                      {images}
                    </div>
                    <Text>
                    Using grid layout
                    </Text>
                  <GridLayout className="layout" layout={layout} cols={7} rowHeight={120} width={800}>
                    {images}
                  </GridLayout>
                  <PanelFooter theme="default">
                    The footer is a good place for less important information
                  </PanelFooter>
                </Panel>
            </Overlay>
        )
    }

}

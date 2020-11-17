import React from 'react';
import { Modal, Button, Space } from 'antd';
import './index.css';
import 'rodal/lib/rodal.css';
import Rodal from 'rodal';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

class AnimationCircle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleFirst: false,
            visibleSecond: false,
            visibleThird: false,
        };
    }
    componentDidMount(){
        setTimeout(this.showFirst, 10000);
    }

    showFirst = () => {
        this.setState({ visibleFirst: true });
    }
    showSecond = () => {
        setTimeout((
            this.setState({ 
                visibleFirst: false,
                visibleSecond: true
              })
        ), 5000);
    }
    showThird = () => {
        setTimeout((
            this.setState({ 
                visibleSecond: false,
                visibleThird: true
             })
        ), 5000);
    }
    
    hideThird = () => {
        this.setState({ visibleThird: false });
    }
    
    render() {
        return (
            <div className='container'>
                <Rodal
                    height = {200}
                    width = {400}
                    visible={this.state.visibleFirst}
                    showCloseButton = {false}
                    animation='slideUp'
                    duration ='1500'
                    customStyles = {{top: '60vh', display: 'flex'}}
                >
                    <div>Content First</div>
                    <div className="div-button">
                        <Button className="mr15" onClick={this.showSecond.bind(this)}>Cancel</Button>
                        <Button type="primary" onClick={this.showSecond}>Next</Button>
                    </div>
                </Rodal>

                 <Rodal
                    height = {200}
                    width = {400}
                    visible={this.state.visibleSecond}
                    showCloseButton = {false}
                    animation='slideUp'
                    duration ='1500'
                    customStyles = {{top: '60vh', display: 'flex'}}
                >
                    <div>Content Second</div>
                    <div className="div-button">
                        <Button className="mr15" onClick={this.showThird.bind(this)}>Cancel</Button>
                        <Button type="primary" onClick={this.showThird}>Next</Button>
                    </div>
                </Rodal>

                <Rodal
                    height = {200}
                    width = {400}
                    visible={this.state.visibleThird}
                    showCloseButton = {false}
                    animation='slideUp'
                    duration ='1500'
                    customStyles = {{top: '60vh', display: 'flex'}}
                >
                    <div>Content Third</div>
                     <div className="div-button">
                        <Button className="mr15" onClick={this.hideThird.bind(this)}>Cancel</Button>
                        <Button type="primary" onClick={this.hideThird.bind(this)}>Next</Button>
                    </div>
                </Rodal> 
            </div>
        );
    }
}

export default AnimationCircle;
import React, { Component } from 'react';
import {connect} from 'react-redux'

import {fetchStreams} from '../../actions'

class StreamList extends Component {
    componentDidMount(){
        this.props.fetchStreams()
    }

    renderList = () => {
        return this.props.streams.map(stream => {
            return (
                <div className='item' key={stream.id}>
                    <i className="large middle aligned icon camera"></i>
                    <div className='content'>
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        // console.log(this.props.streams)
        return (
            <div>
                <div>Streams</div>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams)
    }
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);

import React, {Component} from 'react';
// importing json file into component
import ListenHistory from '../data/listen_history.json';

class ListenHistoryDisplay extends Component {
    render () {
        return (
            <div>
                <h1>Hello World!</h1>
                {/* mapping through json objects */}
                {ListenHistory && ListenHistory.map((listenHistory, index) => {
                    return (
                        <div key={index}>
                            {/* displaying json data */}
                            <h1>{listenHistory.title}</h1>
                            {listenHistory.subtitles && listenHistory.subtitles.map ((data, index) => {
                                return (
                                    <div key={index}>
                                        <h3>{data.name}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListenHistoryDisplay
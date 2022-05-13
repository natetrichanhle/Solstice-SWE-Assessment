// importing useEffect to run script
import React, { useEffect, useState } from 'react';
// importing json file into component
import ListenHistory from '../data/listen_history.json';

export default () => {
    // setting state
    const [played, setPlayed] = useState({})
    const [topTenPlayed, setTopTenPlayed] = useState([])
    const [url, setUrl] = useState({})
    const [topTenUrls, setTopTenUrls] = useState([])

    // useEffect runs script everytime the page is loaded
    // finding the top 10 songs played
    // getting the count of how many times the title shows up for all objects
    useEffect(() => {
        const HashMap = {}
        for (let i = 0; i < ListenHistory.length; i++) {
            // hasOwnProperty checking if title occurs multiple times in the HashMap
            if (HashMap.hasOwnProperty(ListenHistory[i].title)) {
                // if there's multiple objects with the same title add 1 every time it hasOwnProperty
                HashMap[ListenHistory[i].title] += 1;
            } else {
                // if there's only one object with it's title then just set it equal to 1 
                HashMap[ListenHistory[i].title] = 1;
            }
        }

        // saving the HashMap in state
        setPlayed(HashMap);
    }, [])

    // sorting the count of the objects from highest to lowest
    useEffect(() => {
        var items = Object.keys(played).map(
            (key) => { return [key, played[key]] });

        // Step - 2
        // Sort the array from highest to lowest
        items.sort(
            (first, second) => { return second[1] - first[1] }
        );

        // Step - 3
        // Obtain the list of keys in sorted order of the values.
        var keys = items.map(
            (e) => { return e[0] });

        // saving values in a list
        let list = []
        // pushing only the top 10 into the list
        for (let i = 0; i < 10; i++) {
            list.push(keys[i])
        }

        // saving the list with all sorted values in state
        setTopTenPlayed(list);

    }, [played])

    // finding the top 10 played song urls
    useEffect(() => {
        const HashMap = {}
        for (let i = 0; i < ListenHistory.length; i++) {
            // hasOwnProperty checking if the titleUrl occurs multiple times within the HashMap
            if (HashMap.hasOwnProperty(ListenHistory[i].titleUrl)) {
                // if there's multiple objects with the same titleUrl add 1 every time it hasOwnProperty
                HashMap[ListenHistory[i].titleUrl] += 1;
            } else {
                // if there's only one object with it's titleUrl then just set it equal to 1 
                HashMap[ListenHistory[i].titleUrl] = 1;
            }
        }
        // saving the HashMap in state
        setUrl(HashMap);
    }, [])

    // sorting the count of the objects from highest to lowest
    useEffect(() => {
        var items = Object.keys(url).map(
            (key) => { return [key, url[key]] });

        // Step - 2
        // Sort the array from highest to lowest
        items.sort(
            (first, second) => { return second[1] - first[1] }
        );

        // Step - 3
        // Obtain the list of keys in sorted order of the values.
        var keys = items.map(
            (e) => { return e[0] });

        // saving values in a list
        let list = []
        // pushing only the top 10 into the list
        for (let i = 0; i < 10; i++) {
            list.push(keys[i])
        }
        console.log(items)
        // saving the list with all sorted values in state
        setTopTenUrls(list);

    }, [url])

    return (
        <div className='p-3'>
            <h1>Top 10 Played Songs</h1>
            {topTenPlayed && topTenPlayed.map ((played, index) => {
                return (
                    <div key={index} className="p-2 card border-secondary text-secondary">
                        <h3 className="">{index + 1}. {played}</h3>
                    </div>
                )
            })}
            <h1>Links to Top 10 Song URL's</h1>
            {topTenUrls && topTenUrls.map((urls, index) => {
                return (
                    <div key={index} className="p-2 card">
                        <a href={urls} className="btn btn-outline-secondary">Link to {index + 1}</a>
                    </div>
                )
            })}
        </div>
    )

}


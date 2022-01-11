import React from 'react';
import YouTubeEmbed from '../components/YouTubeEmbed';
import '../style/styling.css'

function ResourcesPage (){
    return (
        <div className='links'>
            <h1>Resources</h1>
            <br/>
            <br/>
            <YouTubeEmbed embedId='PZ7lDrwYdZc' />
            <YouTubeEmbed embedId='iHzzSao6ypE' />
            <YouTubeEmbed embedId='wOmjnioNulo' />
        </div>
    );
}

export default ResourcesPage;
import React from 'react';
import '../style/styling.css';
import {FAKE_DATA} from '../components/paragraphConst';
import YouTubeEmbed from '../components/YouTubeEmbed';

function MainPage() {

    return (
        <div className='whole-app'>
            <h1 className='titles'>Welcome to Yosan's Website</h1>
            <p className='fake-paragraph'>{FAKE_DATA}</p>
            <h2 className='titles'>Youtube Videos</h2>
            <YouTubeEmbed embedId='PZ7lDrwYdZc' />
        </div>
    );
}

export default MainPage; 
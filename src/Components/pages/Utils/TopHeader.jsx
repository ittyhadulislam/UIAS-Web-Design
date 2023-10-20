// import React from 'react';
import "./TopHeader.css"

const TopHeader = () => {
    return (
        <div className='top-header'>
            <div className='inner-content'>
                <h4 className='content-title'>Universal Information Authentication System</h4>
                <div className='content-button-textbox'>
                    <input className='input-text' type="text" name="" id="" placeholder='UIASCode™' />
                    <button className='header-button' type="button">Authenticate</button>
                    <button className='header-button' type="button">Notify UnAuthenticate</button>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
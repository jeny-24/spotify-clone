import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { SkipNext } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo"
                    src="data:image/jpeg;base64,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"
                    alt="image" />
                <div className="footer_songInfo">
                    <p>The Night</p>
                    <h4>The Night</h4>

                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipNextIcon className="footer_icon" />
                <PlayCircleOutlineIcon className="footer_icon" />
                <SkipNextIcon className="footer_icon" />
                <RepeatIcon className="footer_green" />

            </div>

            <div className="footer_right">
                <Grid container spacing={2} >
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer

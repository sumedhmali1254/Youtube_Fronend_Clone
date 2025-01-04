import React from 'react'
import './PlayVideo.css'
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/jack.png"
import user_profile from "../../assets/user_profile.jpg"



const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best channel to learn codding that help you to be a web Developer</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt=''/>125</span>
                <span><img src={dislike} alt=''/>5</span>
                <span><img src={share} alt=''/>share</span>
                <span><img src={save} alt=''/>save</span>

            </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src={jack} alt=''/>
            <div>
                <p>GreatStack</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>Channel that makes Learning Easy</p>
            <p>Subscribe Greatstack to watch More Tutorials on web Development</p>
            <hr/>
            <h4>130 Commenst</h4>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicolsan <span>1 day ago</span></h3>
                    <p>This video was recommended as soon as I opened Youtube. What an exciting tutorial it is.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />

                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicolsan <span>1 day ago</span></h3>
                    <p>This video was recommended as soon as I opened Youtube. What an exciting tutorial it is.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />

                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicolsan <span>1 day ago</span></h3>
                    <p>This video was recommended as soon as I opened Youtube. What an exciting tutorial it is.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />

                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Jack Nicolsan <span>1 day ago</span></h3>
                    <p>This video was recommended as soon as I opened Youtube. What an exciting tutorial it is.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />

                    </div>
                </div>
            </div>

        </div>


    </div>
  )
}

export default PlayVideo
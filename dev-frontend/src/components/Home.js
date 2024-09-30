import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
//import img1 from "../images/dev-to-uploads.png";
// import img2 from "../images/dev-to-uploads.png";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitch } from "react-icons/io5";
import { IoLogoMastodon } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineFlag } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { IoIosMicrophone } from "react-icons/io";
import { ImVideoCamera } from "react-icons/im";
import { BsTagsFill } from "react-icons/bs";
import { TiLightbulb } from "react-icons/ti";
import { GiShoppingBag } from "react-icons/gi";
import { FcLike } from "react-icons/fc";
import { FaDev } from "react-icons/fa";
import { GiFrenchHorn } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
import { BsEmojiSurprise } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa";
import { FcSelfie } from "react-icons/fc";
import { GiEvilEyes } from "react-icons/gi";
import { IoEllipsisHorizontal } from "react-icons/io5";
import postData from "./dummyData";
import "./home.css"

function Home() {
    return (
        <div>
            <Navigation />
            <div className="container">
                <div className="sidebar-wrapper-left">
                    <div className="primary-sidebar">
                        <div className="card">
                            <h2 className="card-no">DEV Community is a community of 1,208,445 amazing developers</h2>
                            <p className="card-place">We're a place where coders share, stay up-to-date and grow their careers.</p>
                            <div className="creataccount-login">                                
                                <div className="card-createAccount">
                                    <Link to="/register">
                                        <p>Create account</p>
                                    </Link>
                                </div>
                                <div className="card-login">
                                    <Link to="/login">
                                        <p>Log In</p>
                                    </Link>   
                                </div>
                            </div>
                        </div>

                        <nav className="main-nav">
                            <ul className="main-nav-ulist">
                                <li><Link><span className="home-icon"><FcHome /></span><span>Home</span></Link></li>
                                <li><Link><span className="reading-list-icon"><FcReadingEbook /></span><span>Reading List</span></Link></li>
                                <li><Link><span className="podcast-icon"><IoIosMicrophone /></span><span>Podcasts</span></Link></li>
                                <li><Link><span className="video-icon"><ImVideoCamera /></span><span>Videos</span></Link></li>
                                <li><Link><span className="tags-icon"><BsTagsFill /></span><span>Tags</span></Link></li>
                                <li><Link><span className="faq-icon"><TiLightbulb /></span><span>FAQ</span></Link></li>
                                <li><Link><span className="forem-icon"><GiShoppingBag /></span><span>Forem Shop</span></Link></li>
                                <li><Link><span className="red-love-icon"><FcLike /></span><span>Advertise on DEV</span></Link></li>
                                <li><Link><span className="DEV-icon"><FaDev /></span><span>About</span></Link></li>
                                <li><Link><span className="trumpet-icon"><GiFrenchHorn /></span><span>Contact</span></Link></li>
                                <li><Link><span className="book-icon"><IoBookSharp /></span><span>Guides</span></Link></li>
                                <li><Link><span className="xclaim-icon"><BsEmojiSurprise /></span><span>Software comparisons</span></Link></li>
                            </ul>
                        </nav>

                        <nav className="other-nav">
                            <h2>Other</h2>
                            <ul className="other-nav-ulist">
                                <li><Link><span className="thumb-up-icon"><FaRegThumbsUp /></span><span>Code of Conducts</span></Link></li>
                                <li><Link><span className="smiley-icon"><FcSelfie /></span><span>Privacy Policy</span></Link></li>
                                <li><Link><span className="eyes-icon"><GiEvilEyes /></span><span>Terms of use</span></Link></li>
                            </ul>
                        </nav>

                        <div className="social-media-icons">
                            <Link><IoLogoTwitter /></Link>
                            <Link><IoLogoFacebook /></Link>
                            <Link><IoLogoGithub /></Link>
                            <Link><IoLogoInstagram /></Link>
                            <Link><IoLogoTwitch /></Link>
                            <Link><IoLogoMastodon /></Link>
                        </div>

                        <nav className="popular-tags">
                            <h3 className="subtitle-popular-tags">Popular Tags</h3>
                            <div className="overflow-y-auto">
                                <div><Link>#webdev</Link></div>
                                <div><Link>#javascript</Link></div>
                                <div><Link>#programming</Link></div>
                                <div><Link>#beginners</Link></div>
                                <div><Link>#tutorial</Link></div>
                                <div><Link>#react</Link></div>
                                <div><Link>#python</Link></div>
                                <div><Link>#devops</Link></div>
                                <div><Link>#opensource</Link></div>
                                <div><Link>#discuss</Link></div>
                                <div><Link>#aws</Link></div>
                                <div><Link>#productivity</Link></div>
                                <div><Link>#ai</Link></div>
                                <div><Link>#node</Link></div>
                                <div><Link>#typescript</Link></div>
                                <div><Link>#codenewbie</Link></div>
                                <div><Link>#css</Link></div>
                                <div><Link>#career</Link></div>
                                <div><Link>#html</Link></div>
                                <div><Link>#cloud</Link></div>
                                <div><Link>#news</Link></div>
                                <div><Link>#database</Link></div>
                                <div><Link>#api</Link></div>
                                <div><Link>#learning</Link></div>
                                <div><Link>#github</Link></div>
                                <div><Link>#java</Link></div>
                                <div><Link>#testing</Link></div>
                                <div><Link>#security</Link></div>
                                <div><Link>#azure</Link></div>
                                <div><Link>#machinelearning</Link></div>
                            </div>
                        </nav>

                        <div className="billboard-left">
                            <div className="billboard-left-header">
                                <div>DEV Community</div>
                                <button><IoEllipsisHorizontal />
                                <div className="toggle-dropdown-billboard">
                                    <ul>
                                        <li><Link><IoInformationCircleOutline /><span>What is a billboard?</span></Link></li>
                                        <li><Link><IoSettingsOutline /><span>Manage preferences</span></Link></li>
                                        <hr />
                                        <li><Link><MdOutlineFlag /><span>Report billboard</span></Link></li>
                                    </ul>
                                </div>
                                </button>
                            </div>

                            <div className="billboard-left-body">
                                <h2>Did you know?</h2>
                                <p>
                                    DEV's Organization Accounts give you a dedicated landing page to showcase your brand. It's your opportunity to shine in a sea of content. Explore the possibilities today and stand out from the crowd.
                                    <Link><button>Explore DEV Organizations</button></Link>
                                </p>
                            </div>
                        </div>

                        <footer className="sidebar-footer">
                            <p><Link>DEV Community</Link> A constructive and inclusive social network for software developers. With you every step of your journey.</p>
                            <p>Built on <Link>Forem</Link> - the <Link>open source</Link> software that powers <Link>DEV</Link> and other inclusive communities.</p>
                            <p>Made with love and <Link>Ruby on Rails.</Link> DEV Community © 2016 - 2023.</p>
                        </footer>
                    </div>
                </div>

                <div className="main-content">
                    <header>
                        <nav className="header-pane">
                            <ul className="header-contents">
                                <li className="relevant">
                                    <Link><p>Relevant</p></Link>
                                </li>
                                <li className="latest">
                                    <Link><p>Latest</p></Link>
                                </li>
                                <li className="top">
                                    <Link><p>Top</p></Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <div className="">
                        <div className="post-wrap">
                            {/* <div className="story-pix">
                                <Link>
                                    <img src={img1} alt="" />
                                </Link>
                            </div> */}


                        {
                            postData?.map(item => (
                                <div key={item?.id} className="posts">
                                {/* Render the image inside a div with class "blog-banner" */}
                                {item?.picture && (
                                    <div className="blog-banner">
                                        <img src={item.picture} alt={`${item?.author}'s blog banner`} className="post-image" />
                                    </div>
                                )}
                                <p>{item?.author}</p>
                                <p>{item?.created_at}</p>
                                <p>{item?.title}</p>
                                <p>{item?.tags?.map(tag => (<span key={tag} className="tag">#{tag}</span>))}</p>
                                </div>
                             ))
                        }

                        </div>

                        {/* <div className="sub-stories">
                            <div className="billboard">
                                <div className="story-top">
                                    <div className="title">DEV Community</div>
                                    <button className="drop-down"><IoEllipsisHorizontal /></button>
                                </div>

                                <div className="story-indentation">
                                    <p>
                                        <Link>
                                            <img src={img2} alt="" />
                                        </Link>
                                    </p>
                                    <h3>  Need to stay up-to-date with the most relevant trends in software, such as generate AI, cloud computing, and all things frontend?</h3>
                                    <p>Look no further.</p>
                                    <p>You can do so much more once you <strong>create your account</strong>. Follow the devs and topics you care about, and keep up-to-date.</p>
                                    <h2>
                                        <Link>
                                            Start now
                                        </Link>
                                    </h2>
                                    <p> Happy coding</p>
                                </div>

                            </div>

                            <div className="story-feeds"></div>

                        </div> */}
                    </div>
                </div>

                <div className="sidebar-wrapper-right">
                    <div className="sidebar-wrapper-right-contain">
                        <section className="wrapper">
                        <header className="wrapper-header">
                                <h3>
                                    <Link>Active discussions</Link>
                                </h3>
                            </header>
                            <div className="link-contentful-container">
                                <Link className="link-contentful"> What is Mutex in Golang</Link>
                                <Link className="link-contentful"> Welcome thread - v259</Link>
                                <Link className="link-contentful"></Link>
                                <Link className="link-contentful"></Link>
                                <Link className="link-contentful"></Link>
                            </div>
                            
                        </section>

                        <section className="wrapper">
                            <header className="wrapper-header">
                                <h3>
                                    <Link>#discussions</Link>
                                </h3>
                                <div>
                                    Discussion thread targeting the whole community
                                </div>
                            </header>
                            <div className="link-contentful-container">
                                <Link className="link-contentful"> What was your win this week?<div className="link-contentful-comment">1 comment</div></Link>
                                <Link className="link-contentful">Balancing Act: Code Less or Lead More?<div className="link-contentful-comment">1 comment</div></Link>
                                <Link className="link-contentful">Let's talk #DEVResolutions - what strikes a chord with you?<div className="link-contentful-comment">1 comment</div></Link>
                                <Link className="link-contentful">Sloan's Inbox: As a beginner, should I use AI as a tool and how?<div className="link-contentful-comment">1 comment</div></Link>
                                <Link className="link-contentful">Pseudo-multithreading in Web Development | DataTableDev<div className="link-contentful-comment">1 comment</div></Link>
                            </div>
                        </section>

                        <section className="wrapper">
                        <header className="wrapper-header">
                                <h3>
                                    <Link>#watercolor</Link>
                                </h3>
                                <div>
                                Light, and off-topic conversation.
                                </div>
                            </header>
                            <div className="link-contentful-container">
                                <Link className="link-contentful"> Tumbleweed content <div className="link-contentful-comment">1 comment</div></Link>
                                <Link className="link-contentful"> The Y2K Bug 🐞: Year 2000 Not Found ⁉️    <div className="link-contentful-comment">1 comment</div></Link>
                            </div>
                        </section>

                        <section className="wrapper">
                        <header className="wrapper-header">
                                <h3>
                                    <Link>#devresolutions2024</Link>
                                </h3>
                                <div>
                                    Tag your posts with #DEVResolutions2024 to share your goals, track your progress, and inspire the DEV community with your achievements for the coming year.
                                </div>
                            </header>
                            <div className="link-contentful-container">
                                <Link className="link-contentful"> Let's talk #DEVResolutions - what strikes a chord with you?<div className="link-contentful-comment">1 comment</div></Link>
                                <Link className="link-contentful"> SinisterChef's #DEVResolutions2024<div className="link-contentful-comment">1 comment</div></Link>
                                <Link className="link-contentful"> #DEVResolutions2024<div className="link-contentful-indicator">New</div></Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
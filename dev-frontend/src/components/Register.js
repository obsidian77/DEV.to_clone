import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/dev-logo.png";
import { FaApple } from "react-icons/fa";
import { FaFonticonsFi } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Login() {
    return (
        <section>
            <div className="registeration">
            <div className="registeration-content">
                <Link to="/">
                    <img src={img1} alt="" />
                </Link>
                <h1 className="registeration-title">Join the DEV Community</h1>
                <p className="registeration-description">DEV Community is a community of 1,208,445 amazing developers</p>
            </div>

            <div className="registeration-action">
                <div className="registeration_actions-providers">
                    <form action="" className="apple-form">
                        <input type="hidden" />
                        <button>
                            <FaApple /><span>Sign up with Apple</span>
                        </button>
                    </form>

                    <form action="" className="forem-form">
                        <input type="hidden" />
                        <button className="forem-problem">
                        <FaFonticonsFi /><span>Sign up with Forem</span>
                        </button>
                    </form>

                    <form action="" className="github-form">
                        <input type="hidden" />
                        <button>
                            <FaGithub /><span>Sign up with GitHub</span>
                        </button>
                    </form>

                    <form action="" className="twitter-form">
                        <input type="hidden" />
                        <button>
                            <FaTwitter /><span>Sign up with Twitter</span>
                        </button>
                    </form>
                </div>

                <div className="registeration_actions-email">
                    <div className="registeration_hr-container">
                        <hr className="registeration_hr"/>
                        <div className="registeration_hr-label"></div>
                    </div>

                    <div className="sign-in-text">
                        By signing in, you are agreeing to our <Link>privacy policy,</Link>  <Link>terms of use</Link> and <Link className="code-of-conduct">code of conduct.</Link>
                    </div>

                    <hr className="registeration_hr"/>

                    <div className="new-to-dev">
                        Already have an account? <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
        
    );
}

export default Login;


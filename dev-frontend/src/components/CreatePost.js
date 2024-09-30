import React, { useState } from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import logo from "../images/dev-logo.png";
import { FaEdit } from "react-icons/fa";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Article submitted:", { title, content });
  };

  return (
    <div className="create-article-page" style={{ padding: 30 }}>
      <nav className="main-nav" style={{ width: "80%" }}>
        <ul
          className="main-nav-ulist"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ display: "flex" }}>
            <li>
              <Link>
                <span className="home-icon">
                  <img src={logo} alt="Dev to Logo" style={{ height: 50 }} />
                </span>
              </Link>
            </li>

            <li>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 50,
                }}
              >
                <span>Create Post</span>
              </div>
            </li>
          </div>

          <div style={{ display: "flex" }}>
            <li>
              <button
                style={{
                  padding: 7,
                  width: 70,
                  height: 40,
                  fontSize: 17,
                  border: 0,
                  backgroundColor: activeButton === "edit" ? "#ddd" : "inherit",
                  color: activeButton === "edit" ? "#3b49df" : "#000",
                }}
                onClick={() => setActiveButton("edit")}
                onMouseEnter={() => setActiveButton("edit")}
                onMouseLeave={() => setActiveButton("")}
              >
                <span>Edit</span>
              </button>
            </li>

            <li>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  style={{
                    padding: 7,
                    width: 70,
                    height: 40,
                    border: 0,
                    fontSize: 17,
                    backgroundColor:
                      activeButton === "preview" ? "#ddd" : "inherit",
                    color: activeButton === "preview" ? "#3b49df" : "#000",
                  }}
                  onClick={() => setActiveButton("preview")}
                  onMouseEnter={() => setActiveButton("preview")}
                  onMouseLeave={() => setActiveButton("")}
                >
                  <span>Preview</span>
                </button>
              </div>
            </li>
          </div>
        </ul>
      </nav>
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: 500,
          padding: 50,
          width: "80%",
          borderRadius: 5,
          boxShadow: "0px 0.5px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div>
          <button style={{ padding: 10, borderColor: "#fff" }}>
            Add a cover image
          </button>
          <div>
            <input
              style={{
                backgroundColor: "inherit",
                border: 0,
                marginTop: 10,
                height: 100,
                width: "90%",
                fontSize: 50,
                fontWeight: "bold",
                outline: "none",
              }}
              placeholder="New post title here..."
            />
          </div>

          <div>
            <input
              style={{
                backgroundColor: "inherit",
                border: 0,
                marginTop: 10,
                height: 100,
                width: "90%",
                fontSize: 20,
                outline: "none",
              }}
              placeholder="Add upto 4 tags"
            />
          </div>

          <div>
            <input
              style={{
                backgroundColor: "inherit",
                border: 0,
                marginTop: 10,
                height: 100,
                width: "90%",
                fontSize: 20,
                outline: "none",
              }}
              placeholder="Write your post content here..."
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "25%",
          marginTop: 20,
        }}
      >
        <button
          style={{
            backgroundColor: "#3b49df",
            padding: 10,
            minWidth: 70,
            color: "white",
            border: 0,
          }}
        >
          Publish
        </button>
        <button>Save Draft</button>
        <button style={{ height: 20, justifyContent: "center", alignSelf: "center", }}>
          <FaEdit />
        </button>
        <button>Revert new changes</button>
      </div>
    </div>
  );
};

export default CreatePost;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import "./Album.css";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const albums = await axios.get(
        "https://rallycoding.herokuapp.com/api/music_albums"
      );
      setAlbums(albums.data);
    }
    fetchData();
  }, []);

  console.log(albums);

  return (
    <>
      {albums ? (
        <div
          className="album__Conatiner"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}
        >
          {albums.map((album) => {
            return (
              <div key={uuid()} style={{ maxWidth: "400px", margin: "20px" }}>
                <div className="card">
                  <div className="card-image">
                    <img src={album.image} alt={album.title} />
                  </div>
                  <h3
                    className="card-title"
                    style={{
                      fontFamily: "Grandstander, cursive",
                      color: "black",
                      padding: "0px",
                      marginTop: "10px",
                    }}
                  >
                    <strong
                      style={{
                        color: "green",
                        fontSize: "2rem",
                      }}
                    >
                      Album{" : "}
                    </strong>
                    {album.title}
                  </h3>
                  <div className="card-content">
                    <p style={{ fontFamily: "Grandstander, cursive" }}>
                      by {album.artist}
                    </p>
                  </div>
                  <div className="card-action">
                    <a
                      className="bg-primary"
                      style={{
                        background: "blue",
                        padding: "6px",
                        borderRadius: "4px",
                      }}
                      href={album.url}
                    >
                      Link
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>Loading....!!</div>
      )}
    </>
  );
};

export default Albums;

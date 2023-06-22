import React from "react";
import "./style.css";
import data from "./data";

const Dbox = () => {
  return (
    <>
      <div className="dbox">
        <div className="title-flex">
          <h1 className="title-1">Dash</h1>
          <h1 className="title-2">Board</h1>
        </div>
        {data.map((article, index) => (
          <div className="card-container">
            <div className="card">
              <div className="card-body">
                <h2 id={article.color} className="card-num">
                  {article.database}
                </h2>
                {/* <style>color:{article.color}</style> */}

                <div className="card-position">
                  <h1 id={article.color} className="card-title ">
                    {article.title}
                  </h1>
                </div>
              </div>
              <img
                src={article.thumbnail}
                alt="images"
                className="card-media"
              />

              {/* <span className='card-tag subtle'> know more</span> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dbox;

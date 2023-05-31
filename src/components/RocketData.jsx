import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RocketData = () => {
  let API = "https://api.spacexdata.com/v4/rockets";

  const [dataRocket, setDataRocket] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setDataRocket(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <>
      <section className="py-10 max-width">
        <h1 className="heading text-center mb-10">Rockets</h1>
        <div className="max-width grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 px-5 py-5">
          {dataRocket.map(({ id, name, flickr_images, description }) => {
            return (
              <Link to={`/rockets/${id}`} key={id}>
                <article className="bg-zinc-900">
                  <img
                    src={flickr_images[0]}
                    alt={name}
                    className=" h-64 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="font-bold text-white mb-3 text-lg">
                      {name}
                    </h2>
                    <p className="text-white opacity-75 mb-5">{`${description.substring(
                      0,
                      80
                    )}...`}</p>
                    <Link to={`/rockets/${id}`} className="btn text-white">
                      Read More &rarr;
                    </Link>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RocketData;

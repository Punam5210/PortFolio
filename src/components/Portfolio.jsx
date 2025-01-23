import React from "react";
import bookstore from "../../public/bookstore.png";
import video from "../../public/video.png";
import zerodha from "../../public/zerodha.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: bookstore,
      name: "Bookstore",
      description: "Developed a responsive bookstore website.",
      videoLink:"https://youtu.be/Ag52O5rxshA",
      sourceCode: "https://github.com/example/bookstore",
    },
    {
      id: 2,
      logo: video,
      name: "videoConferencing Platform",
      description: "Created a Zoom-like video calling app.",
      videoLink: "https://youtu.be/EN4LVCkKbag",
      sourceCode: "https://github.com/example/zoom",
    },
    {
      id: 3,
      logo: zerodha,
      name: "StockTrading Platform",
      description: "Built a stock trading platform.",
      videoLink: "https://youtu.be/Q9lxpM0VG50",
      sourceCode: "https://github.com/example/zerodha",
    },
  ];

  const cardClass =
    "bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl overflow-hidden";

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-5">Portfolio</h1>
        <span className="text-lg font-semibold underline text-blue-600">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {cardItem.map(({ id, logo, name, description, videoLink, sourceCode }) => (
            <div className={cardClass} key={id}>
              <img
                src={logo}
                className="w-full h-40 object-cover"
                alt={`${name} project`}
              />
              <div className="p-5">
                <h2 className="font-bold text-xl text-gray-800">{name}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
              </div>
              <div className="p-5 flex justify-between">
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded transition"
                >
                  Video
                </a>
                <a
                  href={sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2 px-4 rounded transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;

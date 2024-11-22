// PhotoGallery.jsx
import React from "react";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://i.ibb.co.com/xDhdxzP/274180129-373139887977099-2973177115856602193-n.jpg",
    width: 4,
    height: 3,
    title: "Computer Lab Session",
  },
  {
    src: "https://i.ibb.co.com/2N8tpy1/291624651-457733169517770-1187731978864082552-n.jpg",
    width: 3,
    height: 4,
    title: "Group Study",
  },
  {
    src: "https://i.ibb.co.com/qxKYccN/274128384-373140444643710-449318436461768587-n.jpg",
    width: 4,
    height: 3,
    title: "Library Exploration",
  },
  {
    src: "https://i.ibb.co.com/bz44j3w/274241310-373140101310411-33430373307386003-n.jpg",
    width: 3,
    height: 4,
    title: "Campus Life",
  },
  {
    src: "https://i.ibb.co.com/wN8zpkG/274147809-373140984643656-2286658094217652232-n.jpg",
    width: 4,
    height: 3,
    title: "Workshop Event",
  },
  {
    src: "https://i.ibb.co.com/c3mQ0Tg/253650299-313241677300254-8388797172488284034-n.jpg",
    width: 3,
    height: 4,
    title: "Cultural Fest",
  },
];

const PhotoGallery = () => {
  return (
    <div className="bg-gray-50 py-4 md:py-8 px-5">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
        Our Photo <span className="text-orange-500">Gallery</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        A glimpse of memorable moments at{" "}
        <span className="font-semibold">BIST</span>.
      </p>
      <div className="max-w-6xl mx-auto">
        <Gallery photos={photos} />
      </div>
    </div>
  );
};

export default PhotoGallery;

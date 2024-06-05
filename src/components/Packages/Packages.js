import React from "react";
import "./Packages.css";
import ielts from "../../accets/PackagePhoto/ielts.jpg";
import englishCourses from "../../accets/PackagePhoto/englishCourses.png";
import usingEnglish from "../../accets/PackagePhoto/usingEnglish.png";

const Packages = ({ id }) => {
  const packageDatas = [
    { id: 1, title: "Live classes", image: ielts, alt: "Live classes" },
    {
      id: 2,
      title: "Buy Courses",
      image: englishCourses,
      alt: "Buy Courses",
    },
    {
      id: 3,
      title: "InfoPack - Teachers'Training",
      image: usingEnglish,
      alt: "InfoPack - Teachers'Training",
    },
    {
      id: 4,
      title: "Books",
      image: "",
      alt: "Books",
    },
  ];
  return (
    <div className="package_parent_div" id={id}>
      <h1 className="packages_title">Packages</h1>
      <div className="package_grid_div">
        {packageDatas.map((packageData) => (
          <div className="package_cart" key={packageData.id}>
            <div className="package_title_div">
              <h4>{packageData.title}</h4>
            </div>
            <img
              className="package_img"
              src={packageData.image}
              alt={packageData.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;

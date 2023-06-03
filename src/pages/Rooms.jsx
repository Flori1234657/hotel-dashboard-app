import { useEffect, useContext, useState } from "react";
import SecondRmsPage from "../components/rooms/SecondRmsPage";
import FirstRmsPage from "../components/rooms/FirstRmsPage";
import Header from "../components/home/Header";
import { PageContext } from "../App";

const Rooms = ({ setShfaqNav }) => {
  const pages = useContext(PageContext);
  const [pageForRender, setPageForRender] = useState(() => {
    if (pages.switchPageObj.rooPg.fp == "active") {
      return <FirstRmsPage />;
    } else {
      return <SecondRmsPage />;
    }
  });

  useEffect(() => {
    setShfaqNav(true);
  }, []);
  useEffect(() => {
    setPageForRender(() => {
      if (pages.switchPageObj.rooPg.fp == "active") {
        return <FirstRmsPage />;
      } else {
        return <SecondRmsPage />;
      }
    });
  }, [pages.switchPageObj]);

  return (
    <div className="conRight">
      <Header />
      {pageForRender}
    </div>
  );
};

export default Rooms;

import { useEffect, useContext, useState } from "react";
import SecondRmsPage from "../components/rooms/SecondRmsPage";
import FirstRmsPage from "../components/rooms/FirstRmsPage";
import Header from "../components/home/Header";
import { PageContext } from "../App";

const Rooms = ({ setShfaqNav, shfaqNav }) => {
  const pages = useContext(PageContext);
  const [pageForRender, setPageForRender] = useState(() => {
    if (pages.switchPageObj.rooPg.fp == "active") {
      return (
        <FirstRmsPage
          dhomatDat={pages.firestoreDhomatDat[0]}
          menaxhimDT={pages.statsData}
          rgData={pages.setRegetData}
        />
      );
    } else {
      return (
        <SecondRmsPage
          dhomatDat={pages.firestoreDhomatDat[0]}
          menaxhimDT={pages.statsData}
          rgData={pages.setRegetData}
        />
      );
    }
  });

  useEffect(() => {
    setShfaqNav(true);
  }, []);
  useEffect(() => {
    setPageForRender(() => {
      if (pages.switchPageObj.rooPg.fp == "active") {
        return (
          <FirstRmsPage
            dhomatDat={pages.firestoreDhomatDat[0]}
            menaxhimDT={pages.statsData}
            rgData={pages.setRegetData}
          />
        );
      } else {
        return (
          <SecondRmsPage
            dhomatDat={pages.firestoreDhomatDat[0]}
            menaxhimDT={pages.statsData}
            rgData={pages.setRegetData}
          />
        );
      }
    });
  }, [pages.switchPageObj]);

  return (
    <div className="conRight">
      <Header setShfaqNav={setShfaqNav} shfaqNav={shfaqNav} />
      {pageForRender}
    </div>
  );
};

export default Rooms;

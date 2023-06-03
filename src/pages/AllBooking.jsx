import { useEffect, useContext, useState } from "react";
import Header from "../components/home/Header";
import FirstPage from "../components/booking/FirstPage";
import SecondPage from "../components/booking/SecondPage";
import { PageContext } from "../App";

const AllBooking = ({ setShfaqNav }) => {
  const pages = useContext(PageContext);
  const [pageForRender, setPageForRender] = useState(() => {
    if (pages.switchPageObj.bkPg.fp == "active") {
      return <FirstPage />;
    } else {
      return <SecondPage />;
    }
  });

  useEffect(() => {
    setShfaqNav(true);
  }, []);

  useEffect(() => {
    setPageForRender(() => {
      if (pages.switchPageObj.bkPg.fp == "active") {
        return <FirstPage />;
      } else {
        return <SecondPage />;
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

export default AllBooking;

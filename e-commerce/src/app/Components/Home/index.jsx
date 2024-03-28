import BigSavingZone from "./BigSavingZone";
import CategoriesForMen from "./CategoriesForMen";
import CategoriesForWomen from "./CategoriesForWomen";
import DealCards from "./DealCards";
import FastionBetter from "./FastionBetter";
import Feedback from "./Feedback";
import LimeLight from "./LimeLight";
import NewArrival from "./NewArrival";
import SummerValuePack from "./SummerValuePack";
import TopBrand from "./TopBrand";
const Home = () => {
  return (
    <>
      <SummerValuePack />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '100px'
        }}
      >
        <DealCards />
        <NewArrival />
        <BigSavingZone />
        <FastionBetter />
        <CategoriesForMen />
        <CategoriesForWomen />
        <TopBrand />
        <LimeLight />
        <Feedback />
      </div>
    </>
  );
};

export default Home;

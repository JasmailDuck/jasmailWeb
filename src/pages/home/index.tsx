import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import S_About from "./sections/S_About";
import S_Activity from "./sections/S_Activity";
import S_Blogs from "./sections/S_Blogs";
import S_Overview from "./sections/S_Overview";
import S_Projects from "./sections/S_Projects";
import S_Service from "./sections/S_Service";
import {
  cleanFunctionalModal,
  dataAnalysisModal,
  dataModal,
  downloadResumeModal,
  efficientAndMaintainable,
  fullstackDevModal,
  inDevModal,
  multimediaModal,
  programmingModal,
  prototypingModal,
  userFriendlyModal,
} from "../../components/modals/homeModals";
import Footer from "../../components/footer/footer";

const index = () => {
  const [modelStateID, setModalStateId] = useState<String>("");

  //On Luanch Modal
  useEffect(() => {
    setModalStateId("dev");
  }, []);

  return (
    <div className=" h-full">
      <div className=" fixed h-full z-50 top-0">
        {downloadResumeModal(modelStateID, setModalStateId)}
        {fullstackDevModal(modelStateID, setModalStateId)}
        {dataAnalysisModal(modelStateID, setModalStateId)}
        {prototypingModal(modelStateID, setModalStateId)}
        {multimediaModal(modelStateID, setModalStateId)}
        {programmingModal(modelStateID, setModalStateId)}
        {dataModal(modelStateID, setModalStateId)}
        {cleanFunctionalModal(modelStateID, setModalStateId)}
        {userFriendlyModal(modelStateID, setModalStateId)}
        {efficientAndMaintainable(modelStateID, setModalStateId)}
        {inDevModal(modelStateID, setModalStateId)}
      </div>

      <Navbar />
      <S_Overview modelStateID={modelStateID} setModalState={setModalStateId} />
      <S_Service modelStateID={modelStateID} setModalState={setModalStateId} />
      <S_Projects />
      <S_Blogs />
      <S_About />
      <S_Activity />
      <Footer />
    </div>
  );
};

export default index;

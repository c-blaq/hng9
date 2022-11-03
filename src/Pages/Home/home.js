import React from "react";
import ProfileSection from "../../containers/ProfileSection/ProfileSection";
import LinkSection from "../../containers/LinkSection/LinkSection";
import Socials from "../../containers/Socials";
import PageLayout from "../../Layout/layout";

const Home = () => {
  return (
    <PageLayout>
      <ProfileSection />
      <LinkSection />
      <Socials />
    </PageLayout>
  );
};

export default Home;

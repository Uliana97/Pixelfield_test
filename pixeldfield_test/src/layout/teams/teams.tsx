import React from "react";

import { TeamBlock } from "../../components";

import { teamInfo, partnersInfo } from "./assets/fixtures";

export const Teams: React.FC = () => {
  return (
    <>
      <TeamBlock heading="Management Team" data={teamInfo} />
      <TeamBlock heading="Our Partners" data={partnersInfo} />
    </>
  );
};

import React from "react";

import CustomLink from "components/CustomLink";
import InfoBanner from "components/InfoBanner";

const baseClass = "vpp-renewal-message";

interface IVppRenewalMessageProps {
  expired: boolean;
}

const VppRenewalMessage = ({ expired }: IVppRenewalMessageProps) => {
  return (
    <InfoBanner
      className={baseClass}
      color="yellow"
      cta={
        <CustomLink
          url="https://fleetdm.com/learn-more-about/renew-vpp"
          text="Renew VPP"
          className={`${baseClass}__new-tab`}
          newTab
          color="core-fleet-black"
          iconColor="core-fleet-black"
        />
      }
    >
      {expired ? (
        <>
          Your Volume Purchasing Program (VPP) content token has expired. You
          can&apos;t add or install App Store apps.
        </>
      ) : (
        <>
          Your Volume Purchasing Program (VPP) content token is less than 30
          days from expiration. If it expires, you won&apos;t be able to add or
          install App Store apps.
        </>
      )}
    </InfoBanner>
  );
};

export default VppRenewalMessage;

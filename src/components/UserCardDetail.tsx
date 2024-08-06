"use client";

import { UserCardDetails } from "@/libs/types";
import { IconMailForward, IconMapPins } from "@tabler/icons-react";

export default function UserCardDetail({ email, address }:UserCardDetails) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward /> {email}
      </p>
      <p>
        <IconMapPins /> {address}
      </p>
    </div>
  );
}

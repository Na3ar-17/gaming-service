import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Good Games || Auth",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }: PropsWithChildren<unknown>) {
  return <>{children}</>;
}

import { Suspense } from "react";


import FranchiseApplication from "@/components/franchise_page/FranchiseApplication";

export default function ComingSoonPage() {
  return (
    <Suspense fallback={null}>
      <FranchiseApplication />
    </Suspense>
  );
}
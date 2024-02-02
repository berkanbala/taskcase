import { useState } from "react";

export default function useModals() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  return { loginModalVisible, setLoginModalVisible };
}

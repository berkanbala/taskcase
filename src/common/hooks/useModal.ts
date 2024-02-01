import { useState } from "react";

export default function UseModals() {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  return { loginModalVisible, setLoginModalVisible };
}

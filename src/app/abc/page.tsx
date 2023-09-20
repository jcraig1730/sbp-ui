"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const Abc = () => {
  const [options, setOptions] = useState<{ clientSecret: string }>();

  useEffect(() => {
    (async () => {
      const result = await axios.post("http://localhost:3000/payments", {
        description: "package 1",
      });

      setOptions({ clientSecret: result.data.clientSecret });
    })();
  }, []);
  return <div>test</div>;
  // return <PaymentForm package="package 3" />;
};

export default Abc;

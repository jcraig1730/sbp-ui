import { PaymentElement } from "@stripe/react-stripe-js";

interface PaymentFormProps {
  isFormComplete: boolean;
  setFormComplete: (val: boolean) => void;
}

const PaymentForm = (props: PaymentFormProps) => {
  const { isFormComplete, setFormComplete } = props;

  return (
    <PaymentElement
      onChange={(e) => {
        if (e.complete !== isFormComplete) {
          setFormComplete(e.complete);
        }
      }}
      options={{ business: { name: "Shelby Bolden Photography" } }}
    />
  );
};

export default PaymentForm;

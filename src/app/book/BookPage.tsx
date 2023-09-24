import BookingConfirmation from "@/components/forms/BookingConfirmation";
import SelectDate from "@/components/forms/SelectDate";
import SelectPackage from "@/components/forms/SelectPackage";
import StandardPageWrapper from "@/components/pageWrappers/StandardPageWrapper";
import PaymentForm from "@/components/payments/PaymentPlaceholder";

interface BookPageProps {
  step: number;
  selectedPackage?: string;
  selectPackage: (name: string) => void;
  selectDate: (date: Date) => void;
  selectedDate?: Date;
  backClick: () => void;
  nextClick: () => void;
  processing: boolean;
  paymentFormComplete: boolean;
  setPaymentFormComplete: (val: boolean) => void;
}

const BookPage = (props: BookPageProps) => {
  const {
    step,
    selectedPackage,
    selectPackage,
    selectDate,
    selectedDate,
    backClick,
    nextClick,
  } = props;

  return (
    <StandardPageWrapper title="Book">
      <div className="flex flex-col">
        <ul className="steps sm:steps mb-12">
          <li className={`step ${step >= 1 ? "step-accent" : "step-primary"}`}>
            Package
          </li>
          <li className={`step ${step >= 2 ? "step-accent" : "step-primary"}`}>
            Date
          </li>
          <li className={`step ${step >= 3 ? "step-accent" : "step-primary"}`}>
            Payment
          </li>
          <li className={`step ${step >= 4 ? "step-accent" : "step-primary"}`}>
            Confirm
          </li>
        </ul>
        <div className="w-[100%]">
          {step === 0 && (
            <SelectPackage
              selected={selectedPackage}
              setSelected={selectPackage}
            />
          )}
          {step === 1 && (
            <div>
              <SelectDate selectDate={selectDate} selectedDate={selectedDate} />
            </div>
          )}
          <div className={`${step === 2 ? "block" : "hidden"}`}>
            <PaymentForm
              isFormComplete={props.paymentFormComplete}
              setFormComplete={props.setPaymentFormComplete}
            />
          </div>

          {step === 3 && (
            <BookingConfirmation
              package={selectedPackage!}
              date={selectedDate!.toString()}
            />
          )}
        </div>
      </div>
      <div className=" flex justify-evenly mt-12">
        <div className="btn btn-accent" onClick={backClick}>
          Back
        </div>
        {props.processing ? (
          <div className="loading-ring loading" />
        ) : (
          <button
            className="btn btn-primary"
            onClick={nextClick}
            disabled={
              props.processing ||
              (step === 0 && !selectedPackage) ||
              (step === 1 && !selectedDate) ||
              (step === 2 && !props.paymentFormComplete)
            }
          >
            {step < 3 ? "Next" : "Create Appointment"}
          </button>
        )}
      </div>
    </StandardPageWrapper>
  );
};

export default BookPage;

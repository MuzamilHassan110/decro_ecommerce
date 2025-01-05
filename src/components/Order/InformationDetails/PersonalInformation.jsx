import { useState } from 'react';
import { Steps, Button, Flex } from 'antd';
import InfoDetaile from './InfoDetaile';
import Address from '../Address/Address';
import ShippingMethod from '../ShippingMethod/ShippingMethod';
import Payment from '../Payment/Payment';

const { Step } = Steps;

const PersonalInformation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const handleComplete = (step) => {
    setCompletedSteps((prev) => {
      if (!prev.includes(step)) {
        const newCompletedSteps = [...prev, step];
        if (step < 3) {
          setCurrentStep(step + 1);
        }
        return newCompletedSteps;
      }
      return prev;
    });
  };

  const steps = [
    {
      title: 'Personal Information',
      content: <InfoDetaile onComplete={() => handleComplete(0)} currentStep = {currentStep} setCurrentStep = {setCurrentStep}/>,
    },
    {
      title: 'Address',
      content: <Address onComplete={() => handleComplete(1)}  />,
    },
    {
      title: 'Shipping Method',
      content: <ShippingMethod onComplete={() => handleComplete(2)} />,
    },
    {
      title: 'Payment',
      content: <Payment onComplete={() => handleComplete(3)} />,
    },
  ];

  return (
    <div>
      <Steps direction="vertical" current={currentStep}>
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={currentStep === index && step.content}
            disabled={!completedSteps.includes(index)}
          />
        ))}
      </Steps>
      <Flex justify='space-between' style={{ marginTop: 20 }} className='info_flex_btn'>
        {currentStep > 0 && (
          <div className="btn_info">
          <Button
             onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </Button>
          </div>
        )}
        {currentStep < steps.length - 1 && (
          <div className="btn_info">
          <Button  onClick={() => setCurrentStep(currentStep + 1)} style={{width: "6.2em"}}>
            Next
          </Button>
          </div>
        )}
      </Flex>
    </div>
  );
};

export default PersonalInformation;

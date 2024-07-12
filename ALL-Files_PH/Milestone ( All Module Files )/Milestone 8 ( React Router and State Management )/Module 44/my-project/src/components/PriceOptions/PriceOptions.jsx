import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptionso = [
    {
      id: 1,
      name: "Basic",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Personal locker",
      ],
      price: "$30",
    },
    {
      id: 2,
      name: "Standard",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Access to group fitness classes",
        "Personal locker",
        "Towel service",
      ],
      price: "$50",
    },
    {
      id: 3,
      name: "Premium",
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Access to group fitness classes",
        "Access to sauna and spa facilities",
        "Personal locker",
        "Towel service",
        "Personal training session (1/month)",
      ],
      price: "$80",
    },
  ];

  return (
    <div className="">
      <h2>Best Prices </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ">
        {priceOptionso.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;

import { Form } from "@/components/ui/form";

import CustomSelect from "@/components/CustomSelect";
import { SelectFormValidationSchema } from "@/lib/validation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  citiesInKenya,
  indicationTypes,
  propertySizesByBedrooms,
  units,
} from "@/constants";
import { SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  CHECKBOX = "checkbox",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
}

const Home = () => {
  const form = useForm<z.infer<typeof SelectFormValidationSchema>>({
    resolver: zodResolver(SelectFormValidationSchema),
    defaultValues: {
      property: "",
    },
  });

  const onSubmit = (values: z.infer<typeof SelectFormValidationSchema>) => {
    console.log(values);
  };

  return (
    <section className="h-[658px]">
      <div className="bg-hero-pattern w-full h-full flex justify-center items-end md:items-center">
        <div>
          <div className="text-white text-center mb-16 md:mb-28">
            <h2 className="text-6xl mb-2">YOUR DREAM HOME</h2>
            <p className="text-2xl">IS ONE CLICK AWAY</p>
          </div>
          <div className="hidden md:flex justify-center items-center gap-1">
            {units.map((unit) => (
              <NavLink
                className={({ isActive }) =>
                  `w-[205px] py-3 text-center rounded-tl-3xl rounded-tr-3xl border-none
                ${isActive ? "bg-white text-black" : "bg-blue-500 text-white"}`
                }
                to={"#"}>
                {unit}
              </NavLink>
            ))}
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="w-full h-full bg-white rounded-xl border border-[#A4A4A4] flex flex-wrap gap-3 px-7 py-4">
                <div className="w-full md:w-[205px]">
                  <CustomSelect
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="property"
                    label="LOOKING FOR"
                    placeholder="Property Type">
                    {indicationTypes.map((type, i) => (
                      <SelectItem key={type + i} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </CustomSelect>
                </div>
                <div className="w-full md:w-[205px]">
                  <CustomSelect
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="city"
                    label="LOCATION"
                    placeholder="All cities">
                    {citiesInKenya.map((type, i) => (
                      <SelectItem key={type + i} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </CustomSelect>
                </div>
                <div className="w-full md:w-[205px]">
                  <CustomSelect
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="size"
                    label="PROPERTY SIZE"
                    placeholder="Bedrooms">
                    {propertySizesByBedrooms.map((type, i) => (
                      <SelectItem key={type + i} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </CustomSelect>
                </div>
                <div className="w-full md:w-[205px]">
                  <CustomSelect
                    fieldType={FormFieldType.SELECT}
                    control={form.control}
                    name="size"
                    label="BUDGET"
                    placeholder="Max. price">
                    {propertySizesByBedrooms.map((type, i) => (
                      <SelectItem key={type + i} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </CustomSelect>
                </div>
                <Button className="self-end" size="customize">
                  Search
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Home;

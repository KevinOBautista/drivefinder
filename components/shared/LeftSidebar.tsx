import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { sort } from "@/constants";

const LeftSidebar = () => {
	return (
		<section className="sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-auto pb-5  ">
			<Accordion type="single" collapsible className="w-full px-4">
				<AccordionItem value="sort-by">
					<AccordionTrigger>Sort by</AccordionTrigger>
					{sort.map((item) => (
						<AccordionContent>
							<RadioGroup defaultValue={item.value} className="flex flex-row">
								<RadioGroupItem value={item.value} />
								<Label htmlFor={item.value}>{item.content}</Label>
							</RadioGroup>
						</AccordionContent>
					))}
				</AccordionItem>
			</Accordion>
		</section>
	);
};

export default LeftSidebar;

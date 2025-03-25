import React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

const Checkbox2 = () => (
	<form>
		<div className="flex items-center">
			<Checkbox.Root
				// className="flex size-[25px] appearance-none items-center justify-center rounded bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px_black]"
				className="flex p-0 size-[20px] appearance-none items-center justify-center rounded bg-white border-slate-300"
				defaultChecked
				id="c1"
			>
				<Checkbox.Indicator className="text-white active:border-0 focus:border-0">
					<CheckIcon className="bg-primary size-[20px] border-0 rounded active:border-0 focus:border-0" />
				</Checkbox.Indicator>
			</Checkbox.Root>
			<label
				className="pl-[15px] text-[15px] leading-none"
				htmlFor="c1"
			>
				Accept terms and conditions.
			</label>
		</div>
	</form>
);

export { Checkbox2 };

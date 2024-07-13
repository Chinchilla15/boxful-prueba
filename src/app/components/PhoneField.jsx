import React, { useRef, useImperativeHandle } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Input } from "antd";

const MyInput = React.forwardRef((props, ref) => {
	const inputRef = useRef(null);

	useImperativeHandle(
		ref,
		() => {
			return inputRef.current.input;
		},
		[]
	);

	return <Input {...props} ref={inputRef} />;
});

MyInput.displayName = "Phone Input";

const PhoneField = ({ value, onChange, ...props }) => {
	return (
		<PhoneInput
			value={value}
			onChange={onChange}
			placeholder="Enter phone number"
			className="phone-input"
			defaultCountry="SV"
			international={true}
			limitMaxLength={true}
			countries={["BZ", "CR", "SV", "GT", "HN", "NI", "PA", "US"]}
			inputComponent={MyInput}
			{...props}
		/>
	);
};

export default PhoneField;

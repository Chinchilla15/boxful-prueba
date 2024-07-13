"use client";
import { useState, Fragment } from "react";
import OrderForm from "./OrderForm";
import OrderItems from "./OrderItems";
import { Form, Button } from "antd";
import Product from "./ProductBox";

const FormContainer = () => {
	const [showOrderItems, setShowOrderItems] = useState(true);

	return (
		<div
			id="form-container"
			className="w-full max-w-5xl pt-12 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
		>
			{!showOrderItems ? (
				<OrderForm onFinish={() => setShowOrderItems(true)} />
			) : (
				<Fragment>
					<OrderItems />
					<Product />

					<div className="flex justify-between w-11/12 mt-10 mb-2">
						<Form.Item className="justify-self-start">
							<Button size="large" className="custom-ant-btn">
								<img src="/arrow-left.svg" alt="" /> Regresar
							</Button>
						</Form.Item>
						<Form.Item className="justify-self-end">
							<Button type="primary" size="large">
								Enviar <img src="/arrow.svg" alt="" />
							</Button>
						</Form.Item>
					</div>
				</Fragment>
			)}
		</div>
	);
};

export default FormContainer;

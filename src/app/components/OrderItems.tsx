"use client";
import React, { Fragment } from "react";
import { Form, Input, Button, InputNumber } from "antd";

interface Product {
	item_weight: number;
	item_name: string;
	item_length: number;
	item_height: number;
	item_width: number;
	id: string;
}

interface OrderItemsProps {
	onSaveProduct: (newProduct: Omit<Product, "id">) => void;
}

const OrderForm: React.FC<OrderItemsProps> = ({ onSaveProduct }) => {
	const [form] = Form.useForm();

	const handleSubmit = () => {
		form.validateFields().then((values) => {
			onSaveProduct(values);
			form.resetFields();
			console.log("Received values:", values);
		});
	};

	return (
		<Fragment>
			<Form
				form={form}
				name="products_form"
				layout="vertical"
				onFinish={handleSubmit}
				className=" flex flex-col items-center "
			>
				<p className="text-regular-blue text-xs w-11/12 mb-4">
					Agrega tus bultos
				</p>
				<div className="bg-background-grey rounded-lg grid grid-rows-2 grid-cols-6 content-center w-11/12 gap-x-4 p-4">
					<div className="flex col-span-2">
						<img
							src="/box.svg"
							height={85}
							width={30}
							alt=""
							className="pr-2 pt-4"
						/>
						<Form.Item
							name="item_length"
							label={
								<span className="text-regular-blue text-xs">
									Largo
								</span>
							}
							rules={[
								{
									required: true,
									message: "Requerido",
								},
							]}
						>
							<Input suffix={"cm"} />
						</Form.Item>
						<Form.Item
							name="item_height"
							label={
								<span className="text-regular-blue text-xs">
									Alto
								</span>
							}
							rules={[
								{
									required: true,
									message: "Requerido",
								},
							]}
						>
							<Input suffix={"cm"} />
						</Form.Item>
						<Form.Item
							name="item_width"
							label={
								<span className="text-regular-blue text-xs">
									Ancho
								</span>
							}
							rules={[
								{
									required: true,
									message: "Requerido",
								},
							]}
						>
							<Input suffix={"cm"} />
						</Form.Item>
					</div>
					<Form.Item
						name="item_weight"
						className="col-span-1"
						label={
							<span className="text-regular-blue text-xs">
								Peso en libras
							</span>
						}
						rules={[
							{
								required: true,
								message: "Requerido",
							},
						]}
					>
						<Input suffix={"lb"} />
					</Form.Item>
					<Form.Item
						name="item_name"
						className="col-span-3"
						label={
							<span className="text-regular-blue text-xs">
								Contenido
							</span>
						}
						rules={[
							{
								required: true,
								message: "Requerido",
							},
						]}
					>
						<Input suffix={" "} />
					</Form.Item>
					<Form.Item className=" col-span-6 text-right self-end">
						<Button
							className="custom-ant-btn "
							htmlType="submit"
							size="large"
						>
							Agregar <img src="/plus.svg" alt="" />
						</Button>
					</Form.Item>
				</div>
			</Form>
			<p className="text-regular-blue text-xs w-11/12 mt-4 mb-2">
				Agrega tus bultos
			</p>
		</Fragment>
	);
};

export default OrderForm;

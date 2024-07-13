"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

interface OrderFormValues {
	height: string;
	width: string;
	wide: string;
	weight: string;
	content: string;
}
const OrderForm: React.FC = () => {
	const [form] = Form.useForm<OrderFormValues>();

	const onFinish = (values: OrderFormValues) => {
		console.log("Received values:", values);
	};

	const handleSubmit = () => {
		form.validateFields().then((values) => {
			console.log("Order Items Form Values:", values);
		});
	};

	return (
		<Form
			form={form}
			name="order_form"
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
								message: "TEST",
							},
						]}
					>
						<Input suffix={"cm"} />
					</Form.Item>
					<Form.Item
						name="item_heigth"
						label={
							<span className="text-regular-blue text-xs">
								Alto
							</span>
						}
						rules={[
							{
								required: true,
								message: "TEST",
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
								message: "TEST",
							},
						]}
					>
						<Input suffix={"cm"} />
					</Form.Item>
				</div>

				<Form.Item
					name="item_weigth"
					className="col-span-1"
					label={
						<span className="text-regular-blue text-xs">
							Peso en libras
						</span>
					}
					rules={[
						{
							required: true,
							message: "TEST",
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
							message: "TEST",
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
	);
};

export default OrderForm;

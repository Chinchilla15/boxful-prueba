"use client";
import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";
import PhoneField from "../components/PhoneField";
import { municipalityByDepartment } from "./municipalityByDepartment";
import dayjs from "dayjs";

const { Option } = Select;

interface OrderFormValues {
	pickup_address: string;
	pickup_date: string;
	first_name: string;
	last_name: string;
	email: string;
	phone: string;
	destination_address: string;
	department: string;
	municipality: string;
	reference_point: string;
	instructions?: string;
}

interface OrderFormProps {
	onFinish: () => void;
	formInfo: OrderFormValues;
	onFormSave: (field: string, value: string) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({
	onFinish,
	formInfo,
	onFormSave,
}) => {
	const [form] = Form.useForm<OrderFormValues>();
	const [selectedDepartment, setSelectedDepartment] = useState<
		string | undefined
	>(undefined);

	useEffect(() => {
		form.setFieldsValue(formInfo);
	}, [formInfo]);

	const handleValuesChange = (changedValues: any) => {
		Object.keys(changedValues).forEach((key) => {
			onFormSave(key, changedValues[key]);
		});
	};

	const handleDepartmentChange = (value: string) => {
		setSelectedDepartment(value);
	};

	const handleSubmit = () => {
		form.validateFields().then((values) => {
			console.log("Received values:", values);
			onFinish();
		});
	};

	return (
		<Form
			form={form}
			name="order_form"
			layout="vertical"
			onFinish={handleSubmit}
			onValuesChange={handleValuesChange}
			className="grid grid-cols-3 grid-rows-6	gap-2 "
			initialValues={formInfo}
		>
			<Form.Item
				name="pickup_address"
				className="col-span-2"
				label={
					<span className="text-regular-blue text-xs">
						📍 Dirección de recolección
					</span>
				}
				rules={[
					{
						required: true,
						message:
							"Por favor ingresa la dirección de recolección!",
					},
				]}
			>
				<Input placeholder="  Dirección de recolección" />
			</Form.Item>

			<Form.Item
				name="pickup_date"
				label={
					<span className="text-regular-blue text-xs">
						📅 Fecha Programada
					</span>
				}
				rules={[
					{
						required: true,
						message: "Por favor ingresa la fecha programada!",
					},
				]}
				getValueFromEvent={(e: any) => e?.format("YYYY-MM-DD")}
				getValueProps={(e: string) => ({
					value: e ? dayjs(e) : "",
				})}
			>
				<DatePicker
					format="YYYY-MM-DD"
					style={{ width: "100%" }}
					suffixIcon={<img src="/calendar.svg" alt="Calendar Icon" />}
				/>
			</Form.Item>

			<Form.Item
				name="first_name"
				label={
					<span className="text-regular-blue text-xs">Nombres</span>
				}
				rules={[
					{ required: true, message: "Por favor ingresa tu nombre!" },
				]}
			>
				<Input placeholder="Nombres" />
			</Form.Item>

			<Form.Item
				name="last_name"
				label={
					<span className="text-regular-blue text-xs">Apellidos</span>
				}
				rules={[
					{
						required: true,
						message: "Por favor ingresa tus apellidos!",
					},
				]}
			>
				<Input placeholder="Apellidos" />
			</Form.Item>

			<Form.Item
				name="email"
				label={
					<span className="text-regular-blue text-xs">
						Correo Electrónico
					</span>
				}
				rules={[
					{
						required: true,
						message: "Por favor ingresa tu correo electrónico!",
					},
					{
						type: "email",
						message:
							"Por favor ingresa un correo electrónico válido",
					},
				]}
			>
				<Input placeholder="Correo Electrónico" />
			</Form.Item>

			<Form.Item
				name="phone"
				label={
					<span className="text-regular-blue text-xs">Teléfono</span>
				}
				rules={[
					{
						required: true,
						message: "Por favor ingresa tu teléfono!",
					},
				]}
			>
				<PhoneField value={undefined} onChange={undefined} />
			</Form.Item>

			<div className="flex justify-end gap-4  col-span-2">
				<img
					className="pt-4"
					src="/location.svg"
					alt="Location"
					height={20}
					width={15}
				/>
				<Form.Item
					name="destination_address"
					className="w-11/12 text-right "
					label={
						<span className="text-regular-blue text-xs">
							Dirección del destinatario
						</span>
					}
					rules={[
						{
							required: true,
							message:
								"Por favor ingresa la dirección del destinatario!",
						},
					]}
				>
					<Input placeholder="Dirección del destinatario" />
				</Form.Item>
			</div>

			<Form.Item
				name="department"
				label={
					<span className="text-regular-blue text-xs">
						Departamento
					</span>
				}
				rules={[
					{
						required: true,
						message: "Por favor selecciona el departamento!",
					},
				]}
			>
				<Select
					placeholder="Departamento"
					onChange={handleDepartmentChange}
				>
					{Object.keys(municipalityByDepartment).map((department) => (
						<Option key={department} value={department}>
							{department}
						</Option>
					))}
				</Select>
			</Form.Item>

			<Form.Item
				name="municipality"
				label={
					<span className="text-regular-blue text-xs">Municipio</span>
				}
				rules={[
					{
						required: true,
						message: "Por favor selecciona el municipio!",
					},
				]}
			>
				<Select placeholder="Municipio">
					{selectedDepartment &&
						municipalityByDepartment[selectedDepartment].map(
							(municipio) => (
								<Option
									key={municipio.value}
									value={municipio.value}
								>
									{municipio.label}
								</Option>
							)
						)}
				</Select>
			</Form.Item>

			<Form.Item
				name="reference_point"
				label={
					<span className="text-regular-blue text-xs">
						Punto de Referencia
					</span>
				}
				rules={[
					{
						required: true,
						message: "Por favor ingresa un punto de referencia!",
					},
				]}
			>
				<Input placeholder="Punto de Referencia" />
			</Form.Item>

			<Form.Item
				name="instructions"
				className="col-span-3"
				label={
					<span className="text-regular-blue text-xs">
						Indicaciones
					</span>
				}
			>
				<Input.TextArea placeholder="Indicaciones" />
			</Form.Item>

			<Form.Item className="col-span-3 text-right">
				<Button type="primary" htmlType="submit" size="large">
					Siguiente <img src="/arrow.svg" alt="" />
				</Button>
			</Form.Item>
		</Form>
	);
};

export default OrderForm;

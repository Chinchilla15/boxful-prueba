"use client";
import OrderForm from "./OrderForm";
import OrderItems from "./OrderItems";
import Product from "./ProductBox";
import Message from "./SentMessage";
import { useState, Fragment } from "react";
import { Form, Button } from "antd";
import { v4 as uuidv4 } from "uuid";

interface Product {
	item_weight: number;
	item_name: string;
	item_length: number;
	item_height: number;
	item_width: number;
	id: string;
}

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

const FormContainer: React.FC = () => {
	const [showOrderItems, setShowOrderItems] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [formInfo, setFormInfo] = useState<OrderFormValues>({
		pickup_address: "",
		pickup_date: "",
		first_name: "",
		last_name: "",
		email: "",
		phone: "",
		destination_address: "",
		department: "",
		municipality: "",
		reference_point: "",
		instructions: "",
	});
	const [productEntries, setProductEntries] = useState<Product[]>([]);

	const handleFormInfoSave = (field: string, value: string) => {
		setFormInfo((prevInfo) => ({
			...prevInfo,
			[field]: value,
		}));
	};

	const handleSaveProduct = (newProduct: Omit<Product, "id">) => {
		const productWithId = { ...newProduct, id: uuidv4() };
		setProductEntries((prevEntries) => [...prevEntries, productWithId]);
	};

	const handleDeleteProduct = (id: string) => {
		const updateEntries = productEntries.filter(
			(product) => product.id !== id
		);
		setProductEntries(updateEntries);
	};

	const handleProductUpdate = (updatedProduct: Product) => {
		setProductEntries((prevEntries) =>
			prevEntries.map((product) =>
				product.id === updatedProduct.id ? updatedProduct : product
			)
		);
	};

	const handleSubmit = async () => {
		const API_URL = "http://localhost:3001";
		const payload = {
			pickup_address: formInfo.pickup_address,
			pickup_date: formInfo.pickup_date,
			first_name: formInfo.first_name,
			last_name: formInfo.last_name,
			email: formInfo.email,
			phone: formInfo.phone,
			destination_address: formInfo.destination_address,
			department: formInfo.department,
			municipality: formInfo.municipality,
			reference_point: formInfo.reference_point,
			instructions: formInfo.instructions,
			products: productEntries.map((product) => ({
				id: product.id,
				item_name: product.item_name,
				item_length: Number(product.item_length),
				item_width: Number(product.item_width),
				item_height: Number(product.item_height),
				item_weight: Number(product.item_weight),
			})),
		};
		console.log("Submitting payload:", payload);

		try {
			const response = await fetch(`${API_URL}/packages`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			setShowMessage(true);

			const data = await response.json();
			console.log("Success:", data);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div
			id="form-container"
			className="w-full max-w-5xl pt-12 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center"
		>
			{showMessage ? (
				<Message />
			) : (
				<Fragment>
					{!showOrderItems ? (
						<OrderForm
							onFinish={() => setShowOrderItems(true)}
							formInfo={formInfo}
							onFormSave={handleFormInfoSave}
						/>
					) : (
						<Fragment>
							<OrderItems onSaveProduct={handleSaveProduct} />
							{productEntries.map((product) => (
								<Product
									key={product.id}
									product={product}
									onDelete={() =>
										handleDeleteProduct(product.id)
									}
									onUpdate={handleProductUpdate}
								/>
							))}

							<div className="flex justify-between w-11/12 mt-10 mb-2">
								<Form.Item className="justify-self-start">
									<Button
										size="large"
										className="custom-ant-btn"
										onClick={() => setShowOrderItems(false)}
									>
										<img src="/arrow-left.svg" alt="" />{" "}
										Regresar
									</Button>
								</Form.Item>
								<Form.Item className="justify-self-end">
									<Button
										type="primary"
										size="large"
										onClick={handleSubmit}
									>
										Enviar <img src="/arrow.svg" alt="" />
									</Button>
								</Form.Item>
							</div>
						</Fragment>
					)}
				</Fragment>
			)}
		</div>
	);
};

export default FormContainer;

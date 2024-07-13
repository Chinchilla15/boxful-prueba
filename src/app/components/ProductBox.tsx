import { Form, Input, Button } from "antd";
import React from "react";

interface ProductProps {
	product: FormValues;
	onDelete: () => void;
	onUpdate: (product: FormValues & { id: string }) => void;
}

interface FormValues {
	item_weight: number;
	item_name: string;
	item_length: number;
	item_height: number;
	item_width: number;
	id: string;
}

const Product: React.FC<ProductProps> = ({ product, onDelete, onUpdate }) => {
	const [form] = Form.useForm<FormValues>();

	const handleSubmit = (values: FormValues) => {
		form.validateFields().then((values) => {
			console.log("Order Items Form Values:", values);
			const updatedProduct = { ...product, ...values };
			onUpdate(updatedProduct);
		});
	};
	return (
		<Form
			form={form}
			name={`product_${product.id}`}
			layout="vertical"
			className=" flex flex-col items-center"
			initialValues={product}
			onValuesChange={(_, values) => handleSubmit(values)}
		>
			<p className="text-regular-blue text-xs w-11/12 mt-4 mb-2">
				Agrega tus bultos
			</p>
			<div className="rounded-lg grid grid-rows-1 grid-cols-6 content-center w-11/12  gap-x-4 border border-green-500 px-3 pt-1">
				<Form.Item
					name="item_weigth"
					className="col-span-1"
					label={
						<span className="text-regular-blue text-xs">
							Peso en libras
						</span>
					}
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
				>
					<Input suffix={" "} />
				</Form.Item>
				<div className="flex col-span-2">
					<img
						src="/box.svg"
						alt=""
						height={85}
						width={30}
						className="pr-2 pt-4"
					/>
					<Form.Item
						name="item_length"
						label={
							<span className="text-regular-blue text-xs">
								Largo
							</span>
						}
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
					>
						<Input suffix={"cm"} />
					</Form.Item>
				</div>
				<Form.Item className=" col-span-6 justify-self-end">
					<Button size="small" type="link" onClick={onDelete}>
						<img src="/trash.svg" alt="" />
					</Button>
				</Form.Item>
			</div>
		</Form>
	);
};

export default Product;

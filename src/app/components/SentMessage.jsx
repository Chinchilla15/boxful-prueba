import React from "react";

export default function Message() {
	return (
		<div className="flex flex-col justify-center items-center h-96">
			<h1 className="text-bold-blue mb-4 text-center text-2xl">
				Gracias por completar la información!
			</h1>
			<h2 className="text-regular-blue text-center text-xl">
				Tu pedido está siendo procesado. En breve recibirás un correo de
				confirmación.
			</h2>
		</div>
	);
}

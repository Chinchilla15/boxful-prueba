import Image from "next/image";
import { Fragment } from "react";
import FormContainer from "./components/FormContainer";

export default function Home() {
	return (
		<Fragment>
			<header className="px-4 py-3 flex ">
				<Image
					src={"/logo.png"}
					alt="Logo"
					width={162.59}
					height={40}
				/>
				<img src="/line.svg" alt="" className="mx-8" />
			</header>
			<main className="font-albert_sans flex flex-col  content-center items-center min-h-screen ">
				<div className="mt-10">
					<div className=" mb-8">
						<h3 className="font-bold text-bold-blue self-start text-2xl">
							Crea una orden
						</h3>
						<p className="text-regular-blue text-s">
							Dale una ventaja competitiva a tu negocio con
							entregas
							<b> el mismo día</b> (Área Metropolitana) y
							<b> el día siguiente</b> a nivel nacional.
						</p>
					</div>

					<FormContainer />
				</div>
			</main>
		</Fragment>
	);
}

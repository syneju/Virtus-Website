import donorData from "@/data/donors.json";
import { Donor } from "@/types/models";

const donors: Donor[] = donorData.sort();

const DonorTable = () => {
	return (
		<article className="prose max-w-none text-center text-pretty justify-center  mt-8 px-8">
			<h1>Donation</h1>
			<table className="table md:table-lg max-w-prose text-center text-pretty justify-center ">
				<thead className="text-lg">
					<tr>
						<th>Name</th>
						<th>Data</th>
						<th>Project</th>
						<th>Amount</th>
					</tr>
				</thead>
				<tbody>
					{donors.map((donor) => (
						<tr key={donor.id}>
							<td>{donor.name}</td>
							<td>{donor.data}</td>
							<td>{donor.project}</td>
							<td className="text-right">{donor.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</article>
	);
};

export default async function donationPage() {
	return (
		<main className=" mx-auto min-h-screen flex flex-col space-y-8 items-center justify-between">
			<section className="container mx-auto flex flex-col items-center justify-center bg-base-100">
				<article className="prose max-w-none text-center text-pretty mt-8 px-8">
					<h1>Donation</h1>
					<p>
						Next.js is a React framework for building full-stack web applications. You use React Components to build
						user interfaces, and Next.js for additional features and optimizations.
					</p>
					<p>
						Next.js is a React framework for building full-stack web applications. You use React Components to build
						user interfaces, and Next.js for additional features and optimizations.
					</p>
					<p>
						Next.js is a React framework for building full-stack web applications. You use React Components to build
						user interfaces, and Next.js for additional features and optimizations.
					</p>
				</article>
			</section>

			<section className="container items-center justify-center bg-base-100">
				<DonorTable />
			</section>
		</main>
	);
}
